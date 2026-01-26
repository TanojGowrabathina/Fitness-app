import { useEffect, useState } from "react";
import { getProgress } from "../../services/progressService";
import "./DailyProgress.css";

const DailyProgress = ({ userId }) => {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (!userId) return;

    getProgress(userId).then(res => {
      const arr = Array.isArray(res.data) ? res.data : [];

      const today = new Date().toDateString();

      const todayData = arr.find(p => {
        const apiDate = new Date(p.date).toDateString();
        return apiDate === today;
      });

      setProgress(todayData || null);
    });
  }, [userId]);

  if (!progress) {
    return <p className="daily-empty">📅 No progress recorded for today</p>;
  }

  return (
    <div className="daily-card">
      <h3>📊 Daily Progress</h3>

      <div className="daily-item">
        📅 <b>{new Date(progress.date).toLocaleDateString()}</b>
      </div>

      <div className="daily-item">
        ⏱ {progress.totalDuration} mins
      </div>

      <div className="daily-item calories">
        🔥 {progress.totalCalories} kcal
      </div>
    </div>
  );
};

export default DailyProgress;
