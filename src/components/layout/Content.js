import React from 'react';
import { Container } from 'semantic-ui-react'

const Content = ({ children }) => {
  return (
    <Container style={{ marginTop: '1rem' }}>
      {children}
    </Container>
  );
};

export default Content;