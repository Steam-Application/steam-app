import React from 'react';
import { Content, Header } from '../layout/Layout.js';
import { Route as MyRoute } from 'react-router-dom';

const Route = ({ children, ...props }) => {
  return (
    <MyRoute {...props}>
      <Header />
      <Content>
        {children}
      </Content>
    </MyRoute>
  );
};

export default Route;