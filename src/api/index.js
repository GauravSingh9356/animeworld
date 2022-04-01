import axios from 'axios';

const API = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com/films',
});

export const fetchProducts = () => {
  return API.get(`/`);
};
