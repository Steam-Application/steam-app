import React from 'react';
import { Content, Header } from '../layout/Layout.js';
import { Route as ARoute } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'


const Route = ({ children, ...props }) => {
  return (
    <ARoute {...props}>
      <Header />
      <Grid centered>
        <Grid.Row>
          <Content>
            {children}
          </Content>
        </Grid.Row>
      </Grid>
    </ARoute>
  );
};

export default Route;