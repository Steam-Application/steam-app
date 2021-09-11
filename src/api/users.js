import steamApi from './api';

// https://partner.steamgames.com/doc/webapi/ISteamUser#:~:text=SteamID%20of%20user-,ResolveVanityURL,-GET%20https%3A//api
export const getUser = async url => {
  let userId;
  const parsedUrl = url.split('/');

  const params = {
    key: process.env.STEAM_API_KEY,
    url_type: 1
  }

  steamApi.get({ url: 'ISteamUser/ResolveVanityURL/v1/', params });
};