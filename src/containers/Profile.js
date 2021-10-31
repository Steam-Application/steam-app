import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Paper, Box, Grid, Avatar, Typography } from '@mui/material';
import { timestampToDate } from '../util/conveters';
import { searchUser } from '../api/profile';

const Profile = () => {
  const { steamId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (steamId) {
      const getUserData = async () => {
        setData(await searchUser(steamId));
      };
      
      getUserData();
    } else {
      // Error
    }
  }, [steamId]);

  console.log(data);

  // User Data Values
  // primaryclanid
  // loccountrycode
  // gameid - Id currently played game 

  return (
    <>
      <Paper sx={{ height: '25%', mb: '2rem', bgcolor: '#1e2020' }}>
        {data && (
          <Box sx={{ display: 'flex', p: '1rem' }}>
            <Grid item xs={6} sx={{ display: 'flex' }}>
              <Avatar variant='square' src={data.avatarfull} sx={{ height: '10rem', width: 'auto' }} />
              <Box ml='1rem'>
                <Typography variant='h2' color='white'> {data.personaname} </Typography>
                <Typography variant='subtitle1' ml='0.25rem' color='white' mb='2rem'> {data.steamid} </Typography>
                <Typography variant='subtitle1' ml='0.25rem' color='white'> Created: {timestampToDate(data.timecreated)} </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} align='right'>
              {data.gameextrainfo && <Typography color='white'> Playing: {data.gameextrainfo} </Typography>}
            </Grid>
          </Box>
        )}
      </Paper>
      <Paper sx={{ height: '70%', bgcolor: '#1e2020' }}>
        {data && (
          <div />
        )}
      </Paper>
    </>
  );
};

export default Profile;