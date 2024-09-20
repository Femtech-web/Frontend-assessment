import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const NEWSDATA_API_KEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
