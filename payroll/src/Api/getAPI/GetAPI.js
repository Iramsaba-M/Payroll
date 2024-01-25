const baseUrl = 'http://192.168.0.101:8000';
// const baseUrl = 'http://localhost:3001';


export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};