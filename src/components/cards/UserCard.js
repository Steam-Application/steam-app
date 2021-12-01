import React from 'react';
import { Box, Grid, Avatar, Button, Typography, Stack } from '@mui/material';
import { timestampToDate } from '../../util/conveters';

const UserCard = ({ user }) => {
  console.log('user', user);

  return (
    <Box sx={{ display: 'flex', p: '1rem' }}>
      <Grid item xs={10} sx={{ display: 'flex' }}>
        <Avatar variant='square' src={user.avatarfull} sx={{ height: '10rem', width: 'auto' }} />
        <Box ml='1rem'>
          <Typography variant='h2' color='white'>
            {user.personaname}
          </Typography>
          <Typography variant='subtitle1' ml='0.25rem' color='white' mb='2rem'>
            {user.steamid}
            </Typography>
          <Typography variant='subtitle1' ml='0.25rem' color='white'>
            Created: {timestampToDate(user.timecreated)}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2} align='right'>
        <Stack spacing={8}>
          <Button color='secondary' variant='contained' sx={{ width: '100%' }}>
            View Profile
          </Button>
          {user.gameextrainfo && (
            <Box sx={{ width: '100%' }}>
              <Typography align='center' color='white' sx={{ textDecoration: 'underline' }}> Currently In Game </Typography>
              <Typography align='center' color='white'> {user.gameextrainfo} </Typography>
            </Box>
          )}
        </Stack>
      </Grid>
    </Box>
  );
};

export default UserCard;