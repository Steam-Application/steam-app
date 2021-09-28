import React from 'react';
import { Paper, TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchIcon = () => {
  return (
    <InputAdornment position='start'>
      <Search fontSize='small' />
    </InputAdornment>
  );
}

export const SearchBox = (props) => {
  return (
    <Paper>
      <TextField
        size='small'
        placeholder='Search...'
        InputProps={{ startAdornment: <SearchIcon /> }}
        {...props}
      />
    </Paper>
  );
}