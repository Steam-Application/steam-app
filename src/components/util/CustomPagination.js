import React from 'react';
import { Box, TablePagination } from '@mui/material';
import { useGridApiContext, useGridState } from '@mui/x-data-grid';

const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const [state] = useGridState(apiRef);

  return (
    <Box sx={{ display: '', float: 'right' }}> 
      <TablePagination
        count={state.pagination.rowCount}
        page={state.pagination.page}
        onPageChange={(e, v) => apiRef.current.setPage(v)}
        rowsPerPage={100}
        rowsPerPageOptions={[]}
        sx={{ border: 0 }}
      />
    </Box>
  );
}

export default CustomPagination;