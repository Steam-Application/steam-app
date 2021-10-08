import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';
import { Header, Content } from '../layout/Layout.js';
import { Grid } from '@mui/material';

const Route = ({ children, ...props }) => {
  return (
    <ReactRoute {...props}>
      <Grid>
        <Header />
        <Content>
          {children}
        </Content>
      </Grid>
    </ReactRoute>
  );
};

export default Route;