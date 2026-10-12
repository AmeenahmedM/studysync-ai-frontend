import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  timeout: 15000
});

export const api = {
  get: <T>(url: string) => apiClient.get<T>(url),
  post: <T>(url: string, data?: unknown) => apiClient.post<T>(url, data),
  put: <T>(url: string, data?: unknown) => apiClient.put<T>(url, data),
  delete: <T>(url: string) => apiClient.delete<T>(url)
};

export { apiClient };
