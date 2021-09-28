import React from 'react';
import { Paper } from '@mui/material';

const Content = ({ children }) => {
  return (
    <Paper sx={{ h: '100%', ml: '2rem', mr: '2rem' }}>
      {children}
    </Paper>
  );
};

export default Content;