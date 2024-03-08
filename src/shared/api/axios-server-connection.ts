import axios from 'axios';

export const axiosServerConnection = axios.create({
  baseURL: "http://localhost:5000"
});