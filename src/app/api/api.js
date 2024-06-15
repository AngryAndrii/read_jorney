import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export class Api {
  static async post(url, data) {
    return axiosClient.post(url, data);
  }

  static async get(url, data) {
    return axiosClient.get(url, data);
  }

  static async put(url, data) {
    return axiosClient.put(url, data);
  }

  static async patch(url, data) {
    return axiosClient.patch(url, data);
  }

  static async delete(url, data) {
    return axiosClient.delete(url, data);
  }
}
