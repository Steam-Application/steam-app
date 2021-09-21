import axios from 'axios';

const steam = axios.create({ baseURL: process.env.REACT_APP_API });

export {
 steam
};