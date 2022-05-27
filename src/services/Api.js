import axios from 'axios';

const url_desenvolvimento = "http://192.168.1.109:5555/rpg";
const url_producao = "https://rpgvitroo-backend.herokuapp.com/rpg";

const api = axios.create({
    baseURL: url_producao,
});

export default api;