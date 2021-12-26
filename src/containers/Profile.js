import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Paper, Grid, Stack, Tab } from '@mui/material';
import { TabList, TabPanel, TabContext } from '@mui/lab';
import { UserCard, GameCard, getEmptyGameCards } from '../components/cards';
import { GameModal } from '../components/modals';
import { Loading, Table, Text } from '../components/util';
import { GameLibraryHeaders, FriendListHeaders } from '../config/tableHeaders';
import { searchUser, getFriendList } from '../api/profile';
import { getRecentGames, getOwnedGames } from '../api/games';

const Profile = () => {
  const { steamId } = useParams();
  const [userData, setUserData] = useState(null);
  const [recentGames, setRecentGames] = useState([]);
  const [tab, setTab] = useState('Library');
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (steamId) {
      const getUserData = async () => {
        setUserData(await searchUser(steamId));
        setRecentGames(await getRecentGames(steamId));
      };
      
      getUserData();
    }
    // eslint-disable-next-line
  }, [steamId]);

  return (
    <>
      {/* Game / Achievement Modal */}
      <GameModal steamid={steamId} gameid={game} handleClose={() => setGame(null)} />

      {/* User Profile Box */}
      <Paper sx={{ height: '25%', mb: '1rem', bgcolor: '#1e2020' }}>
        {userData ? <UserCard user={userData} /> : <Loading color='white' />}
      </Paper>
      
      {/* Bottom Portion of Profile */}
      <Paper sx={{ p: '1rem', height: '125%', bgcolor: '#1e2020' }}>
          <Paper sx={{ height: '100%' }}>
            <Grid container sx={{ height: '100%' }}>

              {/* Recent Games */}
              <Grid item xs={2} align='center' sx={{ p: '0.75rem' }}>
                {recentGames && (
                  <>
                    <Text variant='h5'> Recently Played </Text>
                    <Stack spacing={2} sx={{ height: '100%' }}>
                      {recentGames?.map(game => (
                        <GameCard key={game.appid} game={game} />
                      ))}
                      {recentGames?.length < 5
                        ? getEmptyGameCards(5-recentGames?.length)
                        : null
                      }
                    </Stack>
                  </>
                )}
              </Grid>

              {/* Tables */}
              <Grid item xs={10} sx={{ height: '100%', borderLeft: 1, borderRight: 1, p: '1rem' }}>
                <TabContext value={tab}>
                  <TabList onChange={(e, v) => setTab(v)}>
                    <Tab label='Game Library' value={'Library'} />
                    <Tab label='Friend List' value={'FriendList'} />
                  </TabList>
                  <TabPanel value={'Library'} sx={{ p: 0, boxShadow: 0, height: '90%' }}>
                    <Table
                      id={'appid'}
                      headers={GameLibraryHeaders}
                      getData={getOwnedGames}
                      params={{ steamid: steamId }}
                      defaultSort={[{ field: 'playtime_forever', sort: 'desc' }]}
                      onRowClick={setGame}
                    />
                  </TabPanel>
                  <TabPanel value={'FriendList'} sx={{ p: 0, boxShadow: 0, height: '90%' }}>
                    <Table
                      id={'steamid'}
                      headers={FriendListHeaders}
                      getData={getFriendList}
                      defaultSort={[{ field: 'friend_since', sort: 'asc' }]}
                      params={{ steamid: steamId }}
                    />
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