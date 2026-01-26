import { useState, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./WorkoutSession.css";

export default function WorkoutSession({ userId, refresh }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [activity, setActivity] = useState("Running");
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const timerRef = useRef(null);

  const calorieRate = {
    Running: 12,
    Walking: 5,
    Yoga: 4,
    Gym: 8
  };

  const start = () => {
    if (running) return;
    setRunning(true);

    const startTime = Date.now() - time;
    timerRef.current = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 100);
  };

  const stopAndSave = async () => {
    clearInterval(timerRef.current);
    setRunning(false);

    const minutesRaw = time / 60000;

    if (minutesRaw < 0.5) {
      setError(true);
      setTimeout(() => setError(false), 600);
      return;
    }

    const minutes = Math.max(1, Math.ceil(minutesRaw));
    const calories = minutes * calorieRate[activity];

    try {
      setSaving(true);

      await axios.post(
        `http://localhost:8080/api/activities/user/${userId}`,
        {
          name: activity,
          duration: minutes,
          calories,
          date: new Date().toISOString().split("T")[0],
          category: "General"
        }
      );

      refresh();
      setTime(0);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 1000);
    } catch (err) {
      console.error("Save failed", err);
      setError(true);
      setTimeout(() => setError(false), 600);
    } finally {
      setSaving(false);
    }
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(0);
  };

  const formatTime = ms => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milli = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milli).padStart(2, "0")}`;
  };

  return (
    <motion.div
      className={`workout-card ${error ? "shake" : ""}`}
      animate={success ? { boxShadow: "0 0 40px #22c55e" } : {}}
    >
      <h3>🏋️ Smart Workout Tracker</h3>

      <motion.div
        className="workout-timer"
        animate={running ? { scale: [1, 1.1, 1] } : {}}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        {formatTime(time)}
      </motion.div>

      <div className="workout-actions">
        <button className="workout-btn" onClick={start}>Start</button>
        <button className="workout-btn" onClick={stopAndSave}>
          {saving ? "Saving..." : "Stop & Save"}
        </button>
        <button className="workout-btn" onClick={reset}>Reset</button>
      </div>

      <motion.select
        className="workout-select"
        value={activity}
        onChange={e => setActivity(e.target.value)}
        whileHover={{ scale: 1.05 }}
      >
        <option>Running</option>
        <option>Walking</option>
        <option>Yoga</option>
        <option>Gym</option>
      </motion.select>
    </motion.div>
  );
}
