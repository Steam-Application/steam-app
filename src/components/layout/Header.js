import React from 'react';
import { Menu, Input, Grid } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_SEARCH_USER } from '../config/routes.js';
import icon from '../../assets/my-icon.png';

const Header = () => {
  const history = useHistory();

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
          <Input size='small' icon='search' placeholder='Search User...' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;