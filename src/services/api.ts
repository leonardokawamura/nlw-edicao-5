import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'http://192.168.15.12:3333'
})

export default api;