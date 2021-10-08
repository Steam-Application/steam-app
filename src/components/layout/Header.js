import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBox } from '../util/SearchBox.js';
import { Box, AppBar, Toolbar, MenuItem, Typography } from '@mui/material';
import { ROUTE_HOME } from '../../config/routes.js';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ mb: '1rem', height: '4rem' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <MenuItem component={Link} to={ROUTE_HOME} sx={{ display: 'inline-grid' }}>
              <Typography variant='h5'>
                Steam App Title
              </Typography>
            </MenuItem>
          </Box>
          <SearchBox />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;