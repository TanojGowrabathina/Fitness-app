import { useEffect, useState } from "react";
import AddGoal from "../components/goal/AddGoal";
import GoalList from "../components/goal/GoalList";
import { getGoals } from "../services/goalService";

function Goals() {
  const [goals, setGoals] = useState([]);
  const userId = localStorage.getItem("userId");

  const loadGoals = async () => {
    try {
      const res = await getGoals(userId);
      setGoals(res.data || []);
    } catch (err) {
      console.error("Failed to load goals", err);
      setGoals([]);
    }
  };

 useEffect(() => {
  loadGoals();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>🎯 Goals</h2>

      <AddGoal userId={userId} refreshGoals={loadGoals} />
      <GoalList goals={goals} refreshGoals={loadGoals} />
    </div>
  );
}

export default Goals;
