import Sidebar from "./Sidebar";
import "./MainLayout.css";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}
