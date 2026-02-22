import axios from "axios";
import API_CONFIG from "../config/api.config";

const API = `${API_CONFIG.BASE_URL}/${API_CONFIG.ENDPOINTS.USERS}`;

// Save height & weight
export const saveBody = (userId, height, weight) => {
  return axios.put(`${API}/${userId}/body`, {
    height: Number(height),
    weight: Number(weight),
  });
};

// Get current user body profile
export const getUser = (userId) => {
  return axios.get(`${API}/${userId}`);
};

// Get BMI history
export const getBodyHistory = (userId) => {
  return axios.get(`${API}/${userId}/body-history`);
};
