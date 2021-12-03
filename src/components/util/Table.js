import React, { useState, useEffect } from 'react';
import { } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ headers, getData, params, defaultSort, onRowClick }) => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(defaultSort);

  useEffect(() => {
    const getTableData = async () => {
      setData(await getData(params));
    };

    getTableData();
    // eslint-disable-next-line
  }, [params]);

  console.log(data);

  return (
    <DataGrid
      columns={headers}
      rows={data}
      getRowId={row => row.appid}
      onRowClick={onRowClick}
      sortModel={sort}
      onSortModelChange={model => setSort(model)}
      disableColumnMenu
    />
  );
};

Table.defaultProps = {
  headers: [],
  getData: () => [],
  defaultSort: [],
  onRowClick: () => null
};

export default Table;