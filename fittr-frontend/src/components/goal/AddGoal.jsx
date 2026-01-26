import { useState } from "react";
import { addGoal } from "../../services/goalService";
import "./AddGoal.css";

const AddGoal = ({ userId, refreshGoals }) => {
  const [activityName, setActivityName] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [goalType, setGoalType] = useState("CALORIES");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) return alert("User not logged in");

    const formattedDate = new Date(targetDate)
      .toISOString()
      .split("T")[0];

    const goal = {
      activityName,
      targetValue: Number(targetValue),
      targetDate: formattedDate,
      goalType
    };

    try {
      setLoading(true);
      await addGoal(userId, goal);
      refreshGoals();

      setSuccess(true);
      setTimeout(() => setSuccess(false), 1000);

      setActivityName("");
      setTargetValue("");
      setTargetDate("");
      setGoalType("CALORIES");
    } catch (err) {
      console.error("Save goal failed:", err);
      setError(true);
      setTimeout(() => setError(false), 800);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`add-goal-form ${error ? "shake" : ""}`}
    >
      <h3>🎯 Add Goal</h3>

      <input
        className="add-goal-input"
        type="text"
        placeholder="Activity (Running, Gym, Yoga...)"
        value={activityName}
        onChange={(e) => setActivityName(e.target.value)}
        required
      />

      <input
        className="add-goal-input"
        type="number"
        placeholder="Target Value"
        value={targetValue}
        onChange={(e) => setTargetValue(e.target.value)}
        required
      />

      <select
        className="add-goal-input"
        value={goalType}
        onChange={(e) => setGoalType(e.target.value)}
      >
        <option value="CALORIES">🔥 Calories</option>
        <option value="DURATION">⏱ Minutes</option>
      </select>

      <input
        className="add-goal-input add-goal-date"
        type="date"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className={`add-goal-btn ${success ? "success" : ""}`}
      >
        {loading ? "Saving..." : "Save Goal"}
      </button>
    </form>
  );
};

export default AddGoal;
