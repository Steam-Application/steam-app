import React from 'react';
import { Container, Header } from 'semantic-ui-react'

const SearchUser = () => {
  return (
    <Container style={{ marginTop: '10rem' }}>
      <Header as="h3"> Enter the Profile Url or the Steam Id of the User </Header>
    </Container>
  );
};

export default SearchUser;