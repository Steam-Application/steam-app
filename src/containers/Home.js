import React from 'react';
import { Grid, Paper } from '@mui/material';
import { SearchUser } from '../components/boxes';

const Home = () => {
  return (
    <Grid
      container
      justifyContent='center'
      spacing={5}
      sx={{ mb: '4rem', flexGrow: 1, height: '100%', width: '100%' }}
    >
      <Grid item md={8} lg={4} xl={4} sx={{ mt: '5rem', height: '16rem' }}>
        <Paper sx={{ p: '1rem', height: '100%', bgcolor: '#1e2020'}}>
          <SearchUser />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;