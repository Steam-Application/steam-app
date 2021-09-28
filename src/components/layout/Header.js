import React, { useState } from 'react';
import { Menu, Form } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_SEARCH_USER } from '../config/routes.js';
import { getUser } from '../../api/users.js';
import icon from '../../assets/my-icon.png';

const Header = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  return (
    <Menu inverted attached size='large'>
      <Menu.Item id='header-icon'>
        <img alt='' src={icon} />
      </Menu.Item>
      <Menu.Item
        name='home'
        onClick={() => history.push(ROUTE_HOME)}
      >
        Home
      </Menu.Item>
      <Menu.Item
        name='search-user'
        onClick={() => history.push(ROUTE_SEARCH_USER)}
      >
        Search User
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Form onSubmit={async () => getUser(searchValue)}>
          <Form.Input 
            size='small'
            icon='search' 
            placeholder='Search User...'
            onChange={e => setSearchValue(e.target.value)}
          />
          </Form>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;