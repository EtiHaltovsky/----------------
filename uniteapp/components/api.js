import axios from 'axios';
import api from './api';
// Define the base URL for your server API
const BASE_URL = 'http://your-node-server/api';

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL: BASE_URL,
});

export const checkCredentials = async (email, password) => {
  try {
    const response = await api.post('/volunteers/check-credentials', { email, password });
    const { success, message } = response.data;
    
    if (success) {
      // Credentials are valid, perform the desired action (e.g., navigate to another screen)
      console.log('Credentials are valid');
    } else {
      // Credentials are invalid, display an error message
      console.log('Credentials are invalid:', message);
    }
  } catch (error) {
    console.error('Error checking credentials:', error);
  }
};


export default api;
