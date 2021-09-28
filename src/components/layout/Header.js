import React from 'react';
import { SearchBox } from '../util/SearchBox.js';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Box } from '@mui/system';

const Header = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar >
          <IconButton color='inherit' sx={{ ml: -1.5, mr: 2 }}>
            <Menu />
          </IconButton>
          <Typography variant='h5' style={{ flex: 1 }}>
            Title
          </Typography>
          <SearchBox />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;