import React from 'react';
import { Typography } from '@mui/material';

const OverflowText = ({ lines, children, sx, ...rest }) => {
  return (
      <Typography
        sx={{ display: '-webkit-box', overflow: 'hidden', WebkitBoxOrient: 'vertical', WebkitLineClamp: lines, ...sx }}
        {...rest}
      >
        {children}
      </Typography>
  );
}

OverflowText.defaultProps = {
  lines: '1'
};

export default OverflowText;