import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import bg from "../assets/gym-bg.png";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
    goal: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      alert("Name, Email and Password are required");
      return;
    }

    const payload = {
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      password: form.password.trim(),
      gender: form.gender || "OTHER",
      dob: form.dob || null,
      goal: form.goal || null
    };

    try {
      await axios.post("http://localhost:8080/api/auth/register", payload);
      alert("Registered successfully!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      className="auth-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="auth-overlay" />

      <div className="auth-card">
        <h2>Create Account</h2>

        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />

        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>

        <input type="date" name="dob" value={form.dob} onChange={handleChange} />

        <select name="goal" value={form.goal} onChange={handleChange}>
          <option value="">Fitness Goal</option>
          <option value="LOSE_WEIGHT">Lose Weight</option>
          <option value="GAIN_MUSCLE">Gain Muscle</option>
          <option value="STAY_FIT">Stay Fit</option>
        </select>

        <button onClick={handleRegister}>Register</button>

        <div className="auth-link">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
