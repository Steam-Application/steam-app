import axios from 'axios';

const steam = axios.create({
  baseURL: 'http://api.steampowered.com',
  headers: { 'Access-Control-Allow-Origin': '*'}
});

export {
 steam
};