import { steam } from './api';

export const getAchievements = async ({ steamid, gameid }) => {
  const result = await steam.get('/achievements/getAchievements', { params: { steamid, gameid }});

  return result.data;
}