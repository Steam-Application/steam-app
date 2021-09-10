import React from 'react';
import { Menu, Input, Image } from 'semantic-ui-react'
import icon from '../../assets/my-icon.png';

const Header = () => {
  return (
    <Menu inverted attached size='large'>
      <Menu.Item style={{ padding: '10px' }}>
        <img alt='' src={icon} />
      </Menu.Item>
      <Menu.Item
        name='menu-item'
        onClick={() => console.log('Hello')}
      >
        Home
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input size='small' icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;