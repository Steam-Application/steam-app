import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Paper, TextField, InputAdornment, CircularProgress } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchIcon = () => {
  return (
    <InputAdornment position='start'>
      <Search fontSize='small' />
    </InputAdornment>
  );
};

const Spinner = ({ loading }) => {
  return (
    <InputAdornment position='end'>
      {loading && <CircularProgress size={20} />}
    </InputAdornment>
  )
}

const SearchBox = ({ search, ...props }) => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(async () =>{
      setLoading(true);
      await search(searchTerm);
      setLoading(false);
    }, 750);

    return () => clearTimeout(delay);
  }, [searchTerm]);

  return (
    <Paper>
      <TextField
        size='small'
        placeholder='Search...'
        InputProps={{
          startAdornment: <SearchIcon />,
          endAdornment: <Spinner loading={loading}/>
        }}
        onChange={e => setSearchTerm(e.target.value)}
        sx={{ width: '100%' }}
        {...props}
      />
    </Paper>
  );
};

SearchBox.propTypes = {
  search: PropTypes.func.isRequired
};

SearchBox.defaultProps = {
  search: () => null
};

export default SearchBox;