import React from 'react';
import { Route as ReactRoute } from 'react-router-dom';
import { Header, Content } from '../layout/Layout.js';

const Route = ({ children, ...props }) => {
  return (
    <ReactRoute {...props}>
      <Header />
      <Content>
        {children}
      </Content>
    </ReactRoute>
  );
};

export default Route;