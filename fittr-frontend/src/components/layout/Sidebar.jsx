import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <h2 className="logo">🔥 Fittr</h2>

      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/body-bmi">Body BMI</NavLink>
        <NavLink to="/goals">Goals</NavLink>
        <NavLink to="/progress">Progress</NavLink>
        <NavLink to="/workout">Workout</NavLink>
        <NavLink to="/nutrition">Nutrition</NavLink>
      </nav>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
