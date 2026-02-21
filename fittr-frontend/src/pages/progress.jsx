import { useEffect, useState } from "react";
import WeeklyProgressChart from "../components/charts/WeeklyProgressChart";
import FitnessCharts from "../components/charts/FitnessCharts";
import { getActivities } from "../services/activityService";

function Progress() {
  const [activities, setActivities] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const res = await getActivities(userId);
        setActivities(res.data || []);
      } catch (err) {
        console.error("Failed to load activities", err);
        setActivities([]);
      }
    };

    if (userId) loadActivities();
  }, [userId]);

  return (
    <div>
      <WeeklyProgressChart userId={userId} />
      <FitnessCharts activities={activities} />
    </div>
  );
}

export default Progress;
