import axios from 'axios';

const baseURL = 'https://cgl-nest-test.herokuapp.com';

const api = axios.create({ baseURL });

export default api;
