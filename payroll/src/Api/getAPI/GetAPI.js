const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getApiUrl = (endpoint) => {
  return `${baseUrl}/${endpoint}`;
};