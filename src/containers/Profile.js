import React, { useEffect, useState } from 'react';
import { Paper, Box, Typography } from '@mui/material';
import { getUser } from '../api/profile';

const Profile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      //const user = await getUser('Boebi_G');
      //setData(user);
    };
    
    getUserData();
  }, []);

  return (
    <Paper sx={{ ml: '0.5rem', minHeight: '100%', width: '99%' }}>
      <Box sx={{ display: 'flex', p: '1rem' }}>
        <img src={data?.avatarfull} alt='' />
        <Typography variant='h3'> {data?.personaname} </Typography>
      </Box>
    </Paper>
  );
};

export default Profile;