import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/layout/MainLayout";
import BodyBmi from "./pages/BodyBmi";
import Register from "./pages/Register";
import Workouts from "./pages/Workouts";
import Nutrition from "./pages/Nutrition";
import Progress from "./pages/progress";
import Goals from "./pages/Goals";

// dummy pages (create later if missing)




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/goals"
          element={
            <MainLayout>
              <Goals />
            </MainLayout>
          }
        />

        <Route
          path="/progress"
          element={
            <MainLayout>
              <Progress />
            </MainLayout>
          }
        />

        <Route
          path="/body-bmi"
          element={
            <MainLayout>
              <BodyBmi />
            </MainLayout>
          }
        />

        <Route
          path="/workout"
          element={
            <MainLayout>
              <Workouts />
            </MainLayout>
          }
        />

        <Route
          path="/nutrition"
          element={
            <MainLayout>
              <Nutrition />
            </MainLayout>
          }
        />

        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
