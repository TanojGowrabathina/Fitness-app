import { useState } from "react";
import {
  deleteActivity,
  filterActivities
} from "../../services/activityService";
import "./ActivityList.css";

const icons = {
  Running: "🏃",
  Cycling: "🚴",
  Walking: "🚶",
  Yoga: "🧘",
  Gym: "🏋️",
  Swimming: "🏊",
  Football: "⚽",
  Cricket: "🏏"
};

function ActivityList({ activities, refresh, userId }) {
  const [date, setDate] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this activity?")) return;
    await deleteActivity(userId, id);
    refresh();
  };

  const applyFilter = async () => {
    const params = { userId };
    if (date) params.date = date;
    if (categoryId) params.categoryId = categoryId;

    const res = await filterActivities(params);
    refresh(res.data);
  };

  const clearFilter = () => {
    setDate("");
    setCategoryId("");
    refresh();
  };

  if (!activities || activities.length === 0) {
    return (
      <div className="activity-container">
        <h4>📋 Activities</h4>
        <p className="empty-state">No activities found</p>
      </div>
    );
  }

  return (
    <div className="activity-container">
      {/* Filter Bar */}
      <div className="activity-filters">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="2">Running</option>
          <option value="3">Walking</option>
          <option value="4">Gym</option>
          <option value="5">Yoga</option>
          <option value="6">Cycling</option>
        </select>

        <button onClick={applyFilter}>🔍 Filter</button>
        <button onClick={clearFilter}>♻ Clear</button>
      </div>

      {/* Activity List */}
      <ul className="activity-list">
        {activities.map((a) => (
          <li key={a.id} className="activity-item">
            <div className="activity-info">
              {icons[a.name] || "🔥"} <b>{a.name}</b>{" "}
              ({a.category?.name}) – {a.duration} mins – {a.calories} kcal
            </div>

            <button
              className="delete-btn"
              onClick={() => handleDelete(a.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;
