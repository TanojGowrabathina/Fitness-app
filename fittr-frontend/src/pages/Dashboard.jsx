import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

import ActivityList from "../components/activity/ActivityList";
import AddGoal from "../components/goal/AddGoal";
import GoalList from "../components/goal/GoalList";
import CategoryList from "../components/category/CategoryList";
import DailyProgress from "../components/progress/DailyProgress";
import WorkoutSession from "../components/workout/WorkoutSession";
import BodyProfile from "../components/profile/BodyProfile";
import UserProfileCard from "../components/profile/UserProfileCard";

import { getActivities } from "../services/activityService";
import { getGoals } from "../services/goalService";

import FitnessCharts from "../components/charts/FitnessCharts";
import WeeklyProgressChart from "../components/charts/WeeklyProgressChart";

// import FittrTheme from "../theme/FittrTheme";
import { StatSkeleton, SectionSkeleton, ListSkeleton } from "../components/common/Skeletons";

import "./Dashboard.css";

function Dashboard() {
  const [userId, setUserId] = useState(null);
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState([]);
  const [totalDuration, setTotalDuration] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [loading, setLoading] = useState(true);

  /* ===============================
     AUTH
  =============================== */
  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (!id) {
      window.location.href = "/";
    } else {
      setUserId(Number(id));
    }
  }, []);

  /* ===============================
     CALCULATE TOTALS
  =============================== */
  const calculateTotals = (data) => {
    let minutes = 0;
    let calories = 0;

    data.forEach(a => {
      minutes += Number(a.duration || 0);
      calories += Number(a.calories || 0);
    });

    setTotalDuration(minutes);
    setTotalCalories(calories);
  };

  /* ===============================
     LOAD ACTIVITIES
  =============================== */
  const loadActivities = useCallback(async (filteredData = null) => {
    try {
      let data = [];

      if (filteredData) {
        data = Array.isArray(filteredData) ? filteredData : [];
      } else {
        if (!userId) return;
        const res = await getActivities(userId);
        data = Array.isArray(res.data) ? res.data : [];
      }

      setActivities(data);
      calculateTotals(data);
    } catch (err) {
      console.error("Failed to load activities", err);
      setActivities([]);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  /* ===============================
     LOAD GOALS
  =============================== */
  const loadGoals = useCallback(async () => {
    if (!userId) return;
    try {
      const res = await getGoals(userId);
      setGoals(Array.isArray(res.data) ? res.data : []);
    } catch {
      setGoals([]);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      loadActivities();
      loadGoals();
    }
  }, [userId, loadActivities, loadGoals]);

  /* ===============================
     LOADING UI
  =============================== */
  if (!userId || loading) {
    return (
      <div className="dashboard-page">
        <div className="stats-grid">
          <StatSkeleton />
          <StatSkeleton />
          <StatSkeleton />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 30, marginTop: 30 }}>
          <SectionSkeleton />
          <SectionSkeleton />
        </div>
          
        <div style={{ marginTop: 30 }}>
          <ListSkeleton />
        </div>
      </div>
    );
  }

  /* ===============================
     UI
  =============================== */
  return (
    // <FittrTheme>
      <motion.div
        className="dashboard-page"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >


        <div className="dashboard-hero">
          <h1>🔥 Fittr Dashboard</h1>
          <p style={{ opacity: 0.7 }}>
            <b>All Time:</b> {totalCalories} kcal • {totalDuration} mins
          </p>
        </div>

        <div className="stats-grid">
          <StatCard title="Total Calories" value={`${totalCalories} kcal`} />
          <StatCard title="Total Duration" value={`${totalDuration} min`} />
          <StatCard title="Activities" value={activities.length} />
        </div>

        <div className="main-grid">
          <div>
            <Section title="📊 Activity Trends">
              {activities.length > 0 && <FitnessCharts activities={activities} />}
            </Section>

            <Section title="📅 Weekly Progress">
              <WeeklyProgressChart userId={userId} />
            </Section>

            <Section title="🏃 Activity History">
              <ActivityList
                activities={activities}
                refresh={loadActivities}
                userId={userId}
              />
            </Section>
          </div>

          <div>
            <Section title="👤 Profile Overview">
              <UserProfileCard userId={userId} />
            </Section>

            <Section title="🎯 Goals">
              <AddGoal userId={userId} refreshGoals={loadGoals} />
              <GoalList goals={goals} refreshGoals={loadGoals} />
            </Section>

            <Section title="📆 Daily Summary">
              <DailyProgress userId={userId} />
            </Section>
          </div>
        </div>

        <motion.div className="workout-wrap">
          <h2>⏱ Live Workout</h2>
          <WorkoutSession userId={userId} refresh={loadActivities} />
        </motion.div>

        <Section title="🧍 Body Profile">
          <BodyProfile />
        </Section>

        <Section title="📂 Categories">
          <CategoryList />
        </Section>

      </motion.div>
    // </FittrTheme>
  );
}

/* ===============================
   SMALL COMPONENTS
=============================== */

const StatCard = ({ title, value }) => (
  <motion.div className="stat-card" whileHover={{ scale: 1.05 }}>
    <p style={{ opacity: 0.7 }}>{title}</p>
    <h2>{value}</h2>
  </motion.div>
);

const Section = ({ title, children }) => (
  <motion.div className="section-card">
    <h3>{title}</h3>
    {children}
  </motion.div>
);

export default Dashboard;
