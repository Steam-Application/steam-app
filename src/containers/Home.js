import React from 'react';
import { Grid, Paper } from '@mui/material';

const Home = () => {
  return (
    <>
      <Grid container spacing={5} sx={{ mb: '3rem', flexGrow: 1, height: '25rem' }}>
        <Grid item xs={4}>
          <Paper sx={{ height: '100%'}}>
            
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ height: '100%'}}>
            
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ height: '100%'}}>
            
          </Paper>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ height: '20rem' }}>
        <Paper sx={{ height: '100%'}}>
          
        </Paper>
      </Grid>
    </>
  );
};

export default Home;