import React from 'react';
import { Avatar } from '@mui/material';
import { minToHourMin } from '../util/conveters';

export const GameLibraryHeaders = [
  { 
    field: 'logo',
    headerName: 'Logo',
    flex: 1, 
    sortable: false,
    renderCell: (params) => (
      <Avatar variant='square' src={`https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/${params.row.appid}/${params.row.img_logo_url}.jpg`} sx={{ width: 'auto' }}/>
    )
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1
  },
  {
    field: 'appid',
    headerName: 'AppId',
    flex: 1
  },
  {
    field: 'playtime_forever',
    headerName: 'Playtime',
    flex: 1,
    renderCell: (params) => minToHourMin(params.row.playtime_forever),
    sortComparator: (v1, v2) => v1 - v2
  }
];
