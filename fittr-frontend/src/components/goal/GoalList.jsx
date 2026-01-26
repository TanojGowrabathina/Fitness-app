import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { deleteGoal, getGoalProgress } from "../../services/goalService";
import "./GoalList.css";

const GoalList = ({ goals = [], refreshGoals }) => {
  const [progress, setProgress] = useState({});
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    if (goals.length === 0) {
      setProgress({});
      return;
    }

    goals.forEach(goal => {
      getGoalProgress(goal.id)
        .then(res => {
          setProgress(prev => ({
            ...prev,
            [goal.id]: res.data || 0
          }));
        })
        .catch(() => {
          setProgress(prev => ({
            ...prev,
            [goal.id]: 0
          }));
        });
    });
  }, [goals]);

  const handleDelete = async (id) => {
    setDeleting(id);
    await deleteGoal(id);
    refreshGoals();
    setDeleting(null);
  };

  return (
    <div className="goal-list">
      <h3>🎯 Your Goals</h3>

      {goals.length === 0 && (
        <p style={{ opacity: 0.7 }}>No goals found</p>
      )}

      {goals.map(g => {
        const p = progress[g.id] || 0;
        const achieved = p >= 100;

        return (
          <motion.div
            key={g.id}
            className="goal-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h4>{g.activityName}</h4>
            <p>Target: {g.targetValue}</p>
            <p>Deadline: {g.targetDate}</p>

            <div className="progress-wrap">
              <motion.div
                className="progress-bar"
                style={{
                  width: `${p}%`,
                  background: achieved ? "#22c55e" : "#38bdf8"
                }}
                animate={{ width: `${p}%` }}
              />
            </div>

            <p>{p.toFixed(1)}%</p>

            {achieved && (
              <motion.p
                className="goal-achieved"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                🏆 Goal Achieved!
              </motion.p>
            )}

            <button
              onClick={() => handleDelete(g.id)}
              className={`goal-delete-btn ${
                deleting === g.id ? "shake" : ""
              }`}
            >
              {deleting === g.id ? "Deleting..." : "❌ Delete"}
            </button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default GoalList;
