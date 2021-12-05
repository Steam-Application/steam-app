import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ id, headers, customData, getData, params, defaultSort, onRowClick }) => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(defaultSort);

  useEffect(() => {
    const getTableData = async () => {
      setData(await getData(params));
    };

    getTableData();
    // eslint-disable-next-line
  }, [params]);

  return (
    <DataGrid
      columns={headers}
      rows={customData || data}
      getRowId={row => row[id]}
      onRowClick={row => onRowClick(row.id)}
      sortModel={sort}
      onSortModelChange={model => setSort(model)}
      disableColumnMenu
    />
  );
};

Table.defaultProps = {
  headers: [],
  customData: null,
  getData: () => [],
  defaultSort: [],
  onRowClick: () => null
};

export default Table;