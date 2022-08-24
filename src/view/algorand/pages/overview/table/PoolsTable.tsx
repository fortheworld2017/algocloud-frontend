import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'src/modules/algorand/overview/overviewActions';
import selectors from 'src/modules/algorand/overview/overviewSelectors';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import PoolTable from 'src/view/algorand/components/PoolTable';
import Pagination from 'src/view/shared/table/Pagination';

function PoolsTable({ pools }) {
  const dispatch = useDispatch();

  const loading = useSelector(
    selectors.selectLoading,
  );

  const poolPagination = useSelector(
    selectors.selectPoolPagination,
  );

  const hasRows = useSelector(
    selectors.selectHasPoolRows,
  );

  const sorter = useSelector(
    selectors.selectPoolSorter,
  );

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangePoolSort({
        field,
        order,
      }),
    );
  };

  const doPoolPagination = (pagination) => {
    dispatch(actions.doChangePoolPagination(pagination));
  };

  return (
    <div className=" top-assets-table">
      <TableWrapper >
        <PoolTable
          loading={loading}
          pools={pools}
          hasRows={hasRows}
          sorter={sorter}
          doChangeSort={doChangeSort}
        />
      </TableWrapper>
      <Pagination
        onChange={doPoolPagination}
        disabled={loading}
        pagination={poolPagination}
      />
    </div>
  )
}

export default PoolsTable;
