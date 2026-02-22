import axios from "axios";
import API_CONFIG from "../config/api.config";

const AUTH_API = `${API_CONFIG.BASE_URL}/${API_CONFIG.ENDPOINTS.AUTH}`;

export const login = (email, password) => {
  return axios.post(`${AUTH_API}/login`, {
    email,
    password
  });
};

export const register = (user) => {
  return axios.post(`${AUTH_API}/register`, user);
};


