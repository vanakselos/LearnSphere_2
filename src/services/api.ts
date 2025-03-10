import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'https://api.learningsphere.com/v1', // Replace with your actual API URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to set auth header
export const setAuthHeader = (token: string | null) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// Export the api instance
export default api;
