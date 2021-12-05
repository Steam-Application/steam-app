import React from 'react';
import { Avatar, Tooltip, Typography } from '@mui/material';
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

export const AchievementHeaders = [
  {
    field: 'icon',
    headerName: 'Icon',
    headerAlign: 'center',
    align: 'center',
    width: 60,
    renderCell: (params) => (
      <Avatar variant='square' src={params.row.achieved ? params.row.icon : params.row.icongray} sx={{ width: 'auto' }} />
    )
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
  },
  {
    field: 'description',
    headerName: 'Description',
    flex: 1,
    renderCell: (params) => (
      <Tooltip arrow title={params.row.description} placement='left'>
        <Typography noWrap sx={{ width: '90%' }}> {params.row.description} </Typography>
      </Tooltip>
    )
  },
  {
    field: 'percent',
    headerName: 'Global Percent',
    headerAlign: 'center',
    align: 'right',
    width: 150,
    renderCell: (params) => `${params.row.percent.toFixed(1)} %`
  },
];
