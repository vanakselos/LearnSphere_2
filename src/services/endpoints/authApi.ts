import api from '../api';

// Define the auth API endpoints
const authApi = {
  login: (email: string, password: string) => {
    return api.post('/auth/login', { email, password });
  },
  
  register: (userData: any) => {
    return api.post('/auth/register', userData);
  },
  
  forgotPassword: (email: string) => {
    return api.post('/auth/forgot-password', { email });
  },
  
  resetPassword: (token: string, newPassword: string) => {
    return api.post('/auth/reset-password', { token, newPassword });
  },
  
  logout: () => {
    return api.post('/auth/logout');
  },
  
  refreshToken: (refreshToken: string) => {
    return api.post('/auth/refresh-token', { refreshToken });
  },
};

export default authApi;
