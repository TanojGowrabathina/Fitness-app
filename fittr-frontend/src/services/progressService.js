import axios from "axios";
import API_CONFIG from "../config/api.config";

export const getProgress = (userId) => {
  return axios.get(`${API_CONFIG.BASE_URL}/${API_CONFIG.ENDPOINTS.PROGRESS}/user/${userId}`);
};
