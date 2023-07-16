import axios from 'axios';

const API = axios.create({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  baseURL: import.meta.env.VITE_API_URL,
});

export const setApiAuthHeader = (token: string) => {
  if (token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common.Authorization;
  }
};

export default API;
