import axios from "axios";

export const API_URL = 'http://localhost:5001/';

export const apiAxios = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 10000
});
