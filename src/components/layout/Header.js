import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_HOME } from '../../config/routes.js';
import { AppBar, Toolbar, MenuItem, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position='static' sx={{ mb: '1.5rem', height: '4rem' }}>
      <Toolbar>
        <MenuItem component={Link} to={ROUTE_HOME}>
          <Typography variant='h5'>
            Steam App Title
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Header;