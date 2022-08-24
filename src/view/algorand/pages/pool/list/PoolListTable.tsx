import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'src/modules/algorand/pool/list/poolListActions';
import selectors from 'src/modules/algorand/pool/list/poolListSelectors';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import PoolTable from 'src/view/algorand/components/PoolTable';

function PoolListTable({ pools }) {

  const dispatch = useDispatch();

  const loading = useSelector(
    selectors.selectLoading,
  );

  const pagination = useSelector(
    selectors.selectPagination,
  );

  const hasRows = useSelector(
    selectors.selectHasRows,
  );

  const sorter = useSelector(
    selectors.selectSorter,
  );
  
  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doPagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };
  
  return (
    <div className="pools-table">
      <TableWrapper>
        <PoolTable
          loading={loading}
          pools={pools}
          hasRows={hasRows}
          sorter={sorter}
          doChangeSort={doChangeSort}
        />
        <Pagination
          onChange={doPagination}
          disabled={loading}
          pagination={pagination}
        />
      </TableWrapper>
    </div>
  )
}

export default PoolListTable;
