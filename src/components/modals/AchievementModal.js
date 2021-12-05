import React, { useState, useEffect } from 'react';
import { Modal, Box, Tab, Grid, LinearProgress } from '@mui/material';
import { TabList, TabPanel, TabContext } from '@mui/lab';
import { Table, GameInfo } from '../util/';
import { AchievementHeaders } from '../../config/tableHeaders';
import { AchievementModalStyle as style } from './modalStyles';
import { getGame } from '../../api/games';
import { getAchievements } from '../../api/achievements';

const AchievementModal = ({ steamid, gameid, handleClose }) => {
  const [gameData, setGameData] = useState(null);
  const [achievementData, setAchievementData] = useState(null);
  const [tab, setTab] = useState(1);

  useEffect(() => {
    setTab(1);
    setGameData(null);
    setAchievementData(null);

    if (steamid && gameid) {
      const getData = async () => {
        setGameData(await getGame({ steamid, gameid }));
        setAchievementData(await getAchievements({ steamid, gameid }));
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

  console.log(achievementData?.percent);

  return (
    <Modal open={gameid} onClose={handleClose} onBackdropClick={handleClose}>
      <Box sx={style}>
        <TabContext value={tab}>

          {/* Tabs */}
          <Box sx={{ display: 'flex' }}>
            <TabList onChange={(e, v) => setTab(v)}>
              <Tab value={1} label='Game' />
              <Tab value={2} label='Achieved' />
              <Tab value={3} label='Locked' />
            </TabList>
            {/* Updates Weirdly */}
            <LinearProgress
              value={achievementData?.percent}
              variant='determinate'
              color='secondary'
              sx={{ position: 'absolute', height: '0.75rem', width: '15%', right: '32px', mt: '1rem' }}
            />
          </Box>

          {/* Game Info */}
          <TabPanel value={1} sx={{ p: 0, height: '95%' }}>
            <GameInfo info={gameData} />
          </TabPanel>

          {/* Achieved Achievements */}
          <TabPanel value={2} sx={{ p: 0, height: '95%' }}>
            <Table
              id={'apiname'}
              customData={achievementData?.achieved}
              headers={AchievementHeaders}
              defaultSort={[{ field: 'percent', sort: 'desc' }]}
            />
          </TabPanel>

          {/* Locked Achievements */}
          <TabPanel value={3} sx={{ p: 0, height: '95%' }}>
            <Table
              id={'apiname'}
              customData={achievementData?.locked}
              headers={AchievementHeaders}
              defaultSort={[{ field: 'percent', sort: 'desc' }]}
            />
          </TabPanel>

        </TabContext>
      </Box>
    </Modal>
  );
};

export default AchievementModal;