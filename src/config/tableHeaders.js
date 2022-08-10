import React from 'react';
import { Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { OverflowText } from '../components/util';
import { minToHourMin, timestampToDate } from '../util/conveters';

export const GameLibraryHeaders = [
  { 
    field: 'logo',
    headerName: 'Logo',
    width: 125, 
    sortable: false,
    renderCell: (params) => (
      <Avatar
        variant='square'
        src={`https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/${params.row.appid}/${params.row.img_icon_url}.jpg`}
        sx={{ width: 'auto' }}
      />
    )
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 2
  },
  {
    field: 'appid',
    headerName: 'AppId',
    flex: 0.5
  },
  {
    field: 'playtime_forever',
    headerName: 'Playtime',
    flex: 0.5,
    renderCell: (params) => minToHourMin(params.row.playtime_forever),
    sortComparator: (v1, v2) => v1 - v2
  }
];

export const FriendListHeaders = [
  {
    field: 'avatar',
    headerName: 'Avatar',
    headerAlign: 'center',
    align: 'center',
    flex: 0.25,
    sortable: false,
    renderCell: (params) => (
      <Avatar
        variant='square'
        src={params.row.avatar}
        sx={{ width: 'auto' }}
      />
    )
  },
  {
    field: 'personaname',
    headerName: 'Name',
    flex: 2
  },
  {
    field: 'friend_since',
    headerName: 'Friend Since',
    flex: 2,
    renderCell: (params) => timestampToDate(params.row.friend_since)
  },
  {
    field: 'visible',
    headerName: 'Visible?',
    flex: 0.25,
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    renderCell: (params) => params.row.communityvisibilitystate === 3
      ? (<CheckCircleIcon sx={{ color: 'green' }} />)
      : (<CancelIcon sx={{ color: 'red' }} />)
  },
]

export const AchievementHeaders = [
  {
    field: 'icon',
    headerName: 'Icon',
    headerAlign: 'center',
    align: 'center',
    flex: 0.1,
    renderCell: (params) => (
      <Avatar
        variant='square'
        src={params.row.achieved ? params.row.icon : params.row.icongray}
        sx={{ width: 'auto' }}
      />
    )
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1.5,
    renderCell: (params) => (
      <OverflowText> {params.row.name} </OverflowText>
    )
  },
  {
    field: 'description',
    headerName: 'Description',
    flex: 4,
    renderCell: (params) => (
      <OverflowText sx={{ width: '95%' }}> {params.row.description} </OverflowText>
    )
  },
  {
    field: 'percent',
    headerName: '%',
    headerAlign: 'center',
    align: 'right',
    flex: 0.1,
    renderCell: (params) => `${params.row.percent.toFixed(1)} %`
  },
];