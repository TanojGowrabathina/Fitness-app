import axios from "axios";
import API_CONFIG from "../config/api.config";

const API_URL = `${API_CONFIG.BASE_URL}/${API_CONFIG.ENDPOINTS.WORKOUTS}`;

export const getWorkoutsByUser = (userId) =>
  axios.get(`${API_URL}/user/${userId}`);
