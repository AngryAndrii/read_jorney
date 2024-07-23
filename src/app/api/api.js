import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const setAuthHeader = token => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axiosClient.defaults.headers.common.Authorization = '';
};

// export class Api {
//   static async post(url, data) {
//     return axiosClient.post(url, data);
//   }

//   static async get(url) {
//     return axiosClient.get(url);
//   }

//   static async put(url, data) {
//     return axiosClient.put(url, data);
//   }

//   static async patch(url, data) {
//     return axiosClient.patch(url, data);
//   }

//   static async delete(url, data) {
//     return axiosClient.delete(url, data);
//   }
// }

export const post = async (url, data) => {
  return axiosClient.post(url, data);
};
export const get = async url => {
  return axiosClient.get(url);
};
export const put = async (url, data) => {
  return axiosClient.put(url, data);
};
export const patch = async (url, data) => {
  return axiosClient.patch(url, data);
};
export const deleted = async (url, data) => {
  return axiosClient.delete(url, data);
};
