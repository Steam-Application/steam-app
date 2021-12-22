import React from 'react';
import { Grid, Box, CircularProgress, Typography } from '@mui/material';

const PercentCircle = ({ title, percent, size }) => {
  return (
    <Grid container alignItems='center' justifyContent='center'>
      <Typography variant='h4' align='center' width='100%' mb='1rem'>
        {title}
      </Typography>
      <Box sx={{ position: 'relative', display: 'inline-flex'}}>
        <CircularProgress size={size} variant="determinate" value={100} sx={{ color: 'mediumpurple', position: 'absolute' }} />
        <CircularProgress size={size} variant="determinate" value={percent < 0 ? 0 : percent} color='secondary' />
        <Box
          sx={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant="subtitle1">
            {percent === -1 ? 'No Achievements' : `${percent}%`}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

PercentCircle.defaultProps = {
  title: null,
  percent: 0,
  size: 200
}

export default PercentCircle;