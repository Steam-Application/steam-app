import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { Tooltip, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Cancel';
import HelpIcon from '@mui/icons-material/Help';

/*
Message -> Message to Display
Variant -> default, info, success, error, warning
*/
const useNotification = () => {
  const [info, setInfo] = useState({});
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (info?.message) {
      const variant = info.variant || 'info'

      enqueueSnackbar(
        <>
          {info.message}
          {info.secondary && (
            <Tooltip arrow title={info.secondary} placement='right'>
              <HelpIcon fontSize='string' sx={{ ml: '0.25rem' }} />
            </Tooltip>
          )}
        </>, 
        {
          key: info.message,
          variant: variant,
          autoHideDuration: 5000,
          action: key => (
            <IconButton onClick={() => closeSnackbar(key)}>
              <CloseIcon fontSize='small' />
            </IconButton>
          )
        }
      );
    } 
    // eslint-disable-next-line
  }, [info]);

  return [setInfo]
}

export default useNotification;