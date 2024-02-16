// const baseUrl = 'http://192.168.213.49:8000';
const baseUrl = 'http://localhost:3000';
const baseUrl1 = 'http://192.168.0.143:8000';
const baseUrl2 = 'http://192.168.0.106:8001';
const baseUrl3 = 'http://192.168.0.108:8002';
const baseUrl4=" http://localhost:3000"
export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};
export const getApiUrl1 = (endpoint) => {
  return `${baseUrl1}/${endpoint}`;
};
export const getApiUrl2 = (endpoint) => {
  return `${baseUrl2}/${endpoint}`;
};
export const getApiUrl3 = (endpoint) => {
  return `${baseUrl3}/${endpoint}`;
};
export const getApiUrl4 = (endpoint) => {
  return `${baseUrl4}/${endpoint}`;
};