import React, { useState, useEffect, useRef } from 'react';
import { Tooltip, Typography } from '@mui/material';

// Doesn't work well with MUI Tables
const OverflowText = ({ position, children, sx, ...rest }) => {
  const [isOverflow, setIsOverflow] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setIsOverflow(ref.current.scrollWidth > ref.current.clientWidth);
  }, [ref?.current?.clientWidth, ref?.current?.scrollWidth]);

  return (
    <Tooltip
      arrow
      position={position}
      title={children}
      disableHoverListener={!isOverflow}
    >
      <Typography
        ref={ref}
        sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', ...sx }}
        {...rest}
      >
        {children}
      </Typography>
    </Tooltip>
  );
}

OverflowText.defaultProps = {
  position: 'bottom'
};

export default OverflowText;