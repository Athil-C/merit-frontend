import axios from 'axios';

<<<<<<< HEAD
// Use environment variable for API URL, fallback to '/api' for development
const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({ baseURL: API_URL });
=======
const api = axios.create({ baseURL: '/api' });
>>>>>>> 589cdf6fa04d9812363ced05cadb50edf748d7ca

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ...existing code...
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function fetchStudents() {
    const res = await fetch(`${API_BASE}/api/students`);
    return res.json();
}
// ...existing code...
export default api;


