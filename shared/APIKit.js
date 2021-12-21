import axios from 'axios';

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
   baseURL: 'http://10.0.2.2:8000',
  //android emulator->  baseURL: 'http://10.0.2.2:8000',
  //through ip address-> baseURL: 'http://192.168.0.108:8000',
  //Your live url-> baseURL: 'https://www.example.com:8000',
  timeout: 10000,
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = token => {
  APIKit.interceptors.request.use(function(config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default APIKit;
