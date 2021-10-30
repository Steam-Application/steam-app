import { steam } from './api';

const idCheck = /^\d{17}$/

export const searchUser = async (searchTerm) => {
  const split = searchTerm.split('/').filter(x => x);
  const username = split[split.length - 1];
  let data = null;

  if (!username.match(idCheck)) {
    const result = await steam.get('/profile/resolveId', { params: { username }});
    data = result.data.response;

    if (data.success != 1) {
      return 'No User'
    }
  }

  const id = data ? data.steamid : username;
  const user = await steam.get('/profile/userSummary', { params: { id }});
  
  return user.data.response.players[0];
};