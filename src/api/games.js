import { steam } from './api';

export const getRecentGames = async (steamid) => {
  const result = await steam.get('/games/recentGames', { params: { steamid }});

  return result.data;
};

export const getOwnedGames = async ({ steamid }) => {
  const result = await steam.get('/games/ownedGames', { params: { steamid }});

  return result.data.games;
};

export const getGame = async({ steamid, gameid }) => {
  const result = await steam.get('/games/game', { params: { steamid, gameid }})

  return result.data;
}