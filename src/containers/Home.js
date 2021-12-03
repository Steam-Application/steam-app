import React from 'react';
import { Grid, Paper } from '@mui/material';
import { SearchUser } from '../components/boxes';

const Home = () => {
  return (
    <>
      <Grid container spacing={5} sx={{ mb: '4rem', flexGrow: 1, height: 'calc(50% - 3rem)' }}>
        <Grid item xs={4}>
          <Paper sx={{ p: '1rem', height: '100%', bgcolor: '#1e2020'}}>
            <SearchUser />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ p: '1rem', height: '100%', bgcolor: '#1e2020'}}>
            
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ p: '1rem', height: '100%', bgcolor: '#1e2020'}}>
            
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ height: 'calc(50% - 3rem)' }}>
        <Paper sx={{ p: '1rem', height: '100%', bgcolor: '#1e2020'}}>
          
        </Paper>
      </Grid>
    </>
  );
};

export default Home;