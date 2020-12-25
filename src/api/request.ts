import Axios from 'axios';
const request = Axios.create({
  // baseURL: 'https://mcctest.cn1.utools.club/',
  baseURL: 'http://localhost:8080/',
  timeout: 60000
});

request.interceptors.request.use(config => {
  const token = window.sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

request.interceptors.response.use(config => {
  return config;
});

export default request;
