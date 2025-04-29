   /**
    * Axios instance for making HTTP requests to the backend API.
    * Centralizes base URL and common settings for all API calls.
    */
   import axios, { AxiosInstance } from "axios";

   export const apiClient: AxiosInstance = axios.create({
     baseURL: "http://localhost:8000/api",
     timeout: 5000,
     headers: { "Content-Type": "application/json" },
   });