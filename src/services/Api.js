import axios from 'axios';

const url_teste = "http://192.168.1.109:4000/rpg";
const url_producao = "";

const api = axios.create({
    baseURL: url_teste,
});

export default api;