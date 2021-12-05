import React from 'react';
import { Box, Grid, Avatar, Button, Stack } from '@mui/material';
import { OverflowText, Text } from '../util';
import { timestampToDate } from '../../util/conveters';

const UserCard = ({ user }) => {
  const onViewProfileClick = () => {
    setTimeout(() => {
      window.open(`https://steamcommunity.com/profiles/${user.steamid}`)
    }, 200);
  }

  return (
    <Box sx={{ display: 'flex', p: '1rem' }}>
      <Grid item xs={10} sx={{ display: 'flex' }}>
        <Avatar variant='square' src={user.avatarfull} sx={{ height: '10rem', width: 'auto' }} />
        <Box ml='1rem'>
          <Text variant='h2' color='white'>
            {user.personaname}
          </Text>
          <Text variant='subtitle1' ml='0.25rem' color='white' mb='2rem'>
            {user.steamid}
            </Text>
          <Text variant='subtitle1' ml='0.25rem' color='white'>
            Created: {timestampToDate(user.timecreated)}
          </Text>
        </Box>
      </Grid>
      <Grid item xs={2} align='right'>
        <Stack spacing={8}>
          <Button color='secondary' variant='contained' sx={{ width: '100%' }} onClick={onViewProfileClick}>
            View Profile
          </Button>
          {user.gameextrainfo && (
            <Box sx={{ width: '100%' }}>
              <Text align='center' color='white' sx={{ textDecoration: 'underline' }}>
                Currently In Game
              </Text>
              <OverflowText align='center' color='white'>
                {user.gameextrainfo}
              </OverflowText>
            </Box>
          )}
        </Stack>
      </Grid>
    </Box>
  );
};

export default UserCard;