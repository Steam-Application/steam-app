import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Paper, Grid, Typography, Stack } from '@mui/material';
import { getUserProfile, searchUser } from '../api/profile';
import GameCard from '../components/cards/GameCard';
import UserCard from '../components/cards/UserCard';
import Loading from '../components/util/Loading';
import getEmptyGameCards from '../components/cards/EmptyGameCard';

const Profile = () => {
  const { steamId } = useParams();
  const [userData, setUserData] = useState(null);
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    if (steamId) {
      const getUserData = async () => {
        setUserData(await searchUser(steamId));
        
        await getUserProfile(steamId).then(info => {
          setGameData(info.RecentGames);
        })
      };
      
      getUserData();
    } else {
      // Error
    }
  }, [steamId]);

  // User Data Values
  // primaryclanid
  // loccountrycode
  // gameid - Id currently played game 
  console.log(gameData);

  return (
    <>
      {/* User Profile Box */}
      <Paper sx={{ height: '25%', mb: '1rem', bgcolor: '#1e2020' }}>
        {userData ? <UserCard user={userData} /> : <Loading color='white' />}
      </Paper>
      
      {/* Bottom Portion of Profile */}
      <Paper sx={{ p: '1rem', height: '125%', bgcolor: '#1e2020' }}>
        {gameData && (
          <Paper sx={{ height: '100%' }}>
            <Grid container xs={12} sx={{ height: '100%' }}>

              {/* Recent Games */}
              <Grid align='center' xs={2.5} sx={{ p: '0.75rem' }}>
                <Typography variant='h5'> Recent Games </Typography>
                <Stack spacing={2} sx={{ height: '100%' }}>
                  {gameData?.map(game => <GameCard game={game} />)}
                  {gameData?.length < 5 && getEmptyGameCards(5 - gameData.length)}
                </Stack>
              </Grid>

              {/* Idk Yet */}
              <Grid xs={9.5} sx={{ borderLeft: 1, borderRight: 1, p: '1rem' }}>
                <p> hi </p>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Paper>
    </>
  );
};

export default Profile;