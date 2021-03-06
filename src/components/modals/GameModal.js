import React, { useState, useEffect } from 'react';
import { Modal, Box, Tab, TableFooter} from '@mui/material';
import { TabList, TabPanel, TabContext } from '@mui/lab';
import { GameInfo } from '../boxes';
import { CustomPagination, Table, Loading, useNotification } from '../util';
import { AchievementHeaders } from '../../config/tableHeaders';
import { AchievementModalStyle as style } from './modalStyles';
import { getGame } from '../../api/games';
import { getAchievements } from '../../api/achievements';

const AchievementFooter = () => {
  return (
    <TableFooter sx={{ pl: '0.5rem', pr: '0.5rem', display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
      <CustomPagination />
    </TableFooter>
  )
}

const GameModal = ({ steamid, gameid, handleClose }) => {
  const [sendNotificaiton] = useNotification();
  const [gameData, setGameData] = useState(null);
  const [achievementData, setAchievementData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('Game');

  useEffect(() => {
    setTab('Game');
    setGameData(null);
    setAchievementData(null);

    if (steamid && gameid) {
      const getData = async () => {
        setLoading(true);

        try {
          setGameData(await getGame({ steamid, gameid }));
        } catch (error) {
          sendNotificaiton({ message: 'Failed to retrieve game data', variant: 'error' });
          handleClose();
        }

        try {
          setAchievementData(await getAchievements({ steamid, gameid }));
        } catch (error) {
          if (gameData) {
            sendNotificaiton({ message: 'Failed to retrieve achievement data', variant: 'error' })
          }
        }

        setLoading(false);
      };

      getData();
    }
    // eslint-disable-next-line
  }, [steamid, gameid]);
  
  useEffect(() => {
    document.addEventListener("keydown", (e) => e.keyCode === 27 ? handleClose() : null, false);
    return () => { document.removeEventListener("keydown", (e) => e.keyCode === 27 ? handleClose() : null, false) }
    // eslint-disable-next-line
  }, []);

  return (
    <Modal open={gameid ? true : false} onClose={handleClose} onBackdropClick={handleClose}>
      <Box sx={style}>
        <TabContext value={tab}>

          {/* Tabs */}
          <Box sx={{ display: 'flex' }}>
            <TabList onChange={(e, v) => setTab(v)}>
              <Tab value={'Game'} label='Game' disabled={loading} />
              <Tab value={'Achieved'} label='Achieved' disabled={loading} />
              <Tab value={'Locked'} label='Locked' disabled={loading} />
            </TabList>
          </Box>

          {/* Game Info */}
          <TabPanel value={'Game'} sx={{ p: 0, height: '95%' }}>
            {!loading ? (
              <GameInfo info={gameData} percent={achievementData?.percent} />
            ) : (
              <Loading size={50} />
            )}
          </TabPanel>

          {/* Achieved Achievements */}
          <TabPanel value={'Achieved'} sx={{ p: 0, height: '95%' }}>
            {!loading ? (
              <Table
                id={'apiname'}
                customData={achievementData?.achieved}
                headers={AchievementHeaders}
                defaultSort={[{ field: 'percent', sort: 'desc' }]}
                customFooter={AchievementFooter}
              />
            ) : (
              <Loading size={50} />
            )}
          </TabPanel>

          {/* Locked Achievements */}
          <TabPanel value={'Locked'} sx={{ p: 0, height: '95%' }}>
            {!loading ? (
              <Table
                id={'apiname'}
                customData={achievementData?.locked}
                headers={AchievementHeaders}
                defaultSort={[{ field: 'percent', sort: 'desc' }]}
                customFooter={AchievementFooter}
              />
            ) : (
              <Loading size={50} />
            )}
          </TabPanel>

        </TabContext>
      </Box>
    </Modal>
  );
};

export default GameModal;