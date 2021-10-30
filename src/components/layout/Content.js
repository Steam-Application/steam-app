import React from 'react';
import { Container } from '@mui/material';

const Content = ({ children }) => {
  return (
    <Container maxWidth='false' sx={{ height: 'calc(100% - 6rem)' }}>
      {children}
    </Container>
  );
};

export default Content;