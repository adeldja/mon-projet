import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.iutbayonne.univ-pau.fr/~klevron/api/',
});

export default api;