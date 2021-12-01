import React from 'react';
import { Grid, CircularProgress } from '@mui/material';

const Loading = ({ color }) => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{ height: '100%', width: '100%' }}
    >
      <CircularProgress style={{ color }} />
    </Grid>
  );
};

export default Loading;