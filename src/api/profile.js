import { steam } from './api';

const idCheck = /^\d{17}$/

export const searchUser = async (searchTerm) => {
  const split = searchTerm.split('/').filter(x => x);
  const username = split[split.length - 1];
  let data = null;

  if (!username.match(idCheck)) {
    const result = await steam.get('/profile/resolveId', { params: { username }});
    data = result.data.response;

    if (data.success !== 1) {
      return 'No User'
    }
  }

  const steamid = data ? data.steamid : username;
  const user = await steam.get('/profile/userSummary', { params: { steamid }});
  
  return user.data.response.players[0];
};

export const getUserProfile = async (steamid) => {
  const result = await steam.get('/profile/userProfile', { params: { steamid }});

  console.log(result.data);

  return result.data;
}