import axios from "axios";
import API_CONFIG from "../config/api.config";

export const getBodyProgress = (userId) => {
  return axios.get(`${API_CONFIG.BASE_URL}/api/body-progress/${userId}`);
};
