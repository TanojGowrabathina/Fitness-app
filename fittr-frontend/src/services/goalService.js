import axios from "axios";
import API_CONFIG from "../config/api.config";

const API_URL = `${API_CONFIG.BASE_URL}/${API_CONFIG.ENDPOINTS.GOALS}`;

// Get goals of logged-in user
export const getGoals = (userId) => {
  return axios.get(`${API_URL}/user/${userId}`);
};

// Add new goal for user
export const addGoal = (userId, goal) => {
  return axios.post(`${API_URL}/user/${userId}`, goal);
};

// Delete goal
export const deleteGoal = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// 🔥 Get goal progress %
export const getGoalProgress = (goalId) => {
  return axios.get(`${API_URL}/${goalId}/progress`);
};



