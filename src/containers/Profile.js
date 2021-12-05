import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Paper, Grid, Typography, Stack, Tab } from '@mui/material';
import { TabList, TabPanel, TabContext } from '@mui/lab';
import { UserCard, GameCard, getEmptyGameCards } from '../components/cards';
import { AchievementModal } from '../components/modals';
import { Table, Loading } from '../components/util'
import { GameLibraryHeaders } from '../config/tableHeaders';
import { searchUser } from '../api/profile';
import { getRecentGames, getOwnedGames } from '../api/games';

const Profile = () => {
  const { steamId } = useParams();
  const [tab, setTab] = useState(1);

  // API Data
  const [userData, setUserData] = useState(null);
  const [recentGames, setRecentGames] = useState([]);

  // Modals
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (steamId) {
      const getUserData = async () => {
        setUserData(await searchUser(steamId));
        setRecentGames(await getRecentGames(steamId));
      };
      
      getUserData();
    } else {
      // Handle Error
    }
    // eslint-disable-next-line
  }, [steamId]);

  return (
    <>
      {/* Achievement Modal? */}
      <AchievementModal steamid={steamId} gameid={game} handleClose={() => setGame(null)} />

      {/* User Profile Box */}
      <Paper sx={{ height: '25%', mb: '1rem', bgcolor: '#1e2020' }}>
        {userData ? <UserCard user={userData} /> : <Loading color='white' />}
      </Paper>
      
      {/* Bottom Portion of Profile */}
      <Paper sx={{ p: '1rem', height: '125%', bgcolor: '#1e2020' }}>
          <Paper sx={{ height: '100%' }}>
            <Grid container xs={12} sx={{ height: '100%' }}>

              {/* Recent Games */}
              <Grid align='center' xs={2.5} sx={{ p: '0.75rem' }}>
                {recentGames && (
                  <>
                    <Typography variant='h5'> Recently Played </Typography>
                    <Stack spacing={2} sx={{ height: '100%' }}>
                      {recentGames?.map(game => <GameCard game={game} />)}
                      {recentGames?.length < 5 ? getEmptyGameCards(5-recentGames?.length) : null}
                    </Stack>
                  </>
                )}
              </Grid>

              {/* Tables */}
              <Grid xs={9.5} sx={{ height: '100%', borderLeft: 1, borderRight: 1, p: '1rem' }}>
                <TabContext value={tab}>
                  <TabList onChange={(e, v) => setTab(v)}>
                    <Tab label='Game Library' value={1} />
                    <Tab label="Temp" value={2} />
                  </TabList>
                  <TabPanel value={1} sx={{ p: 0, boxShadow: 0, height: '90%' }}>
                    <Table
                      id={'appid'}
                      headers={GameLibraryHeaders}
                      getData={getOwnedGames}
                      params={{ steamid: steamId }}
                      defaultSort={[{ field: 'playtime_forever', sort: 'desc' }]}
                      onRowClick={setGame}
                    />
                  </TabPanel>
                  <TabPanel value={2}>
                    <p> Hi </p>
                  </TabPanel>
                </TabContext>
              </Grid>
            </Grid>
          </Paper>
      </Paper>
    </>
  );
};

export default Profile;