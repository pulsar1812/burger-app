import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-66794.firebaseio.com'
});

export default instance;
