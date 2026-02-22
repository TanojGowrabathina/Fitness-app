// API Configuration
// This determines the backend URL based on environment

const API_BASE_URL = process.env.REACT_APP_API_URL || (
  process.env.NODE_ENV === 'production' 
    ? 'https://your-backend-domain.com' // Update this with your production backend URL
    : 'http://localhost:8080'
);

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  ENDPOINTS: {
    AUTH: 'api/auth',
    USERS: 'api/users',
    ACTIVITIES: 'api/activities',
    GOALS: 'api/goals',
    WORKOUTS: 'api/workouts',
    PROGRESS: 'api/progress',
    CATEGORIES: 'api/categories',
    BODY: 'api/body'
  }
};

export default API_CONFIG;
