import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectors from 'src/modules/superadmin/user/userSelectors';
import actions from 'src/modules/superadmin/user/userActions';
import { i18n } from 'src/i18n';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import UserStatusView from 'src/view/superadmin/user/UserStatusView';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import superadminSelectors from 'src/modules/superadmin/superadminSelectors';

function UserTable() {
  const dispatch = useDispatch();
  const [
    recordIdToUpdate,
    setRecordIdToUpdate,
  ] = useState(null);

  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);

  const hasPermissionToUpdateUser = useSelector(
    superadminSelectors.selectPermissionToUpdateUser,
  );

  const doUpdate = (id) => {
    setRecordIdToUpdate(null);
    dispatch(actions.doUpdate(id));
  };

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

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  return (
    <>
      <TableWrapper>
        <div className="table-responsive">
          <table className="table table-striped mt-2">
            <thead className="thead">
              <tr>
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'email'}
                  label={i18n('user.fields.email')}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'fullName'}
                  label={i18n('user.fields.fullName')}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'active'}
                  label={i18n('user.fields.status')}
                />
                <TableColumnHeader className="th-actions" />
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={100}>
                    <Spinner />
                  </td>
                </tr>
              )}
              {!loading && !hasRows && (
                <tr>
                  <td colSpan={100}>
                    <div className="d-flex justify-content-center">
                      {i18n('table.noData')}
                    </div>
                  </td>
                </tr>
              )}
              {!loading &&
                rows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.email}</td>
                    <td>{row.fullName}</td>
                    <td>
                      <UserStatusView value={row.active} />
                    </td>
                    <td className="td-actions">
                      {hasPermissionToUpdateUser && (
                        <button
                          className="btn btn-link"
                          onClick={() =>
                            setRecordIdToUpdate(row.id)
                          }
                        >
                          {row.active && i18n('user.freeze')}
                          {!row.active && i18n('user.activate')}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <Pagination
          onChange={doChangePagination}
          disabled={loading}
          pagination={pagination}
        />
      </TableWrapper>

      {recordIdToUpdate && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doUpdate(recordIdToUpdate)}
          onClose={() => setRecordIdToUpdate(null)}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </>
  );
}

export default UserTable;
