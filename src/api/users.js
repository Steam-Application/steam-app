import { steam } from './api';

export const getUser = async url => {
  const id = url;

  const a = await steam.get('/users/', { params: { id } });

  console.log(a);
};