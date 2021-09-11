import axios from 'axios';

const steamApi = axios.create({
  baseUrl: 'http://api.steampowered.com/'
});

export {
 steamApi
};