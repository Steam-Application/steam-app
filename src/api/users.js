import { steam } from './api';

// https://partner.steamgames.com/doc/webapi/ISteamUser#:~:text=SteamID%20of%20user-,ResolveVanityURL,-GET%20https%3A//api
export const getUser = async url => {
  const parsedUrl = url.split('/');

  console.log(parsedUrl);
  console.log(process.env.REACT_APP_STEAM_KEY);

  const params = {
    key: process.env.REACT_APP_STEAM_KEY,
    vanityurl: url,
    url_type: 1
  }
  
  const a = await steam.get("/ISteamUser/ResolveVanityURL/v1/", { params });

  console.log(a);
};