import React, { useState, useEffect } from 'react';
import { GridOverlay, DataGrid } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';
import { compareObjects } from '../../util/compare';

const CustomLoadingOverlay = () => {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}

const Table = ({ id, headers, customData, getData, params, defaultSort, onRowClick, onError }) => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(defaultSort);
  const [loading, setLoading] = useState(false);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    if (!compareObjects(params, prev)) {
      const getTableData = async () => {
        setLoading(true);

        try {
          setData(await getData(params));
        } catch (error) {
          onError();
        }

        setPrev(params);
        setLoading(false);
      };

      getTableData();
    }
    // eslint-disable-next-line
  }, [params]);

  return (
    <DataGrid
      components={{ LoadingOverlay: CustomLoadingOverlay }}
      columns={headers}
      rows={customData || data || []}
      getRowId={row => row[id]}
      onRowClick={row => onRowClick(row.id)}
      loading={loading}
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