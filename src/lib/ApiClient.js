import axios from 'axios';

const instance = axios.create({
  baseURL: "https://localhost:8080/api",
  timeout: 6000,
});

instance.interceptors.request.use((c) => {
  const cnf = c;
  const token = JSON.parse(localStorage.getItem('jwt_token'));
  cnf.headers.authorization = token && token.id;
  return cnf;
});

instance.interceptors.response.use(res => res.data);

export default instance;
