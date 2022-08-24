import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/superadmin/tenant/list/tenantListActions';
import selectors from 'src/modules/superadmin/tenant/list/tenantListSelectors';
import destroySelectors from 'src/modules/superadmin/tenant/destroy/tenantDestroySelectors';
import destroyActions from 'src/modules/superadmin/tenant/destroy/tenantDestroyActions';
import { useSelector, useDispatch } from 'react-redux';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import Pagination from 'src/view/shared/table/Pagination';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import Plans from 'src/security/plans';
import config from 'src/config';
import { tenantSubdomain } from 'src/modules/tenant/tenantSubdomain';

function TenantListTable() {
  const dispatch = useDispatch();

  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);

  const [
    recordIdToCancelSubscription,
    setRecordIdToCancelSubscription,
  ] = useState(null);

  const listLoading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  
  const loading =
    listLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  
  const tenantSubscribed = (tenant) => {
    if (tenant.plan === Plans.values.free || tenant.planStatus === 'cancel_at_period_end') return false;
    return true;
  }

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

  const doDestroy = (id) => {
    setRecordIdToDestroy(null);
    dispatch(destroyActions.doDestroy(id));
  };

  const doCancelSubscription = (id) => {
    setRecordIdToCancelSubscription(null);
    dispatch(actions.doCancelSubscription(id));
  }

  return (
    <TableWrapper>
      <div className="table-responsive">
        <table className="table table-striped mt-2">
          <thead className="thead">
            <tr>
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'name'}
                label={i18n('tenant.fields.name')}
              />
              {tenantSubdomain.isEnabled && (
                <TableColumnHeader
                  label={i18n('tenant.fields.url')}
                />
              )}
              {config.isPlanEnabled && (
                <TableColumnHeader
                  label={i18n('tenant.fields.plan')}
                />
              )}
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
                  <td>
                    {row.name}
                  </td>
                  {tenantSubdomain.isEnabled && (
                    <td>{`${row.url}.${config.frontendUrl.host}`}</td>
                  )}
                  {config.isPlanEnabled && (
                    <td>
                      <span
                        className={`badge ${
                          row.plan === Plans.values.free
                            ? 'badge-secondary'
                            : 'badge-warning'
                        }`}
                      >
                        {i18n(`plan.${row.plan}.label`)}
                      </span>
                    </td>
                  )}
                  <td className="td-actions">
                    {tenantSubscribed(row) && (
                      <button
                      className="btn btn-primary"
                      style={{ marginRight: '8px' }}
                      onClick={() =>
                        setRecordIdToCancelSubscription(row.id)
                      }
                      >
                      {i18n('common.cancelPlan')}
                      </button>
                    )}

                    <button
                    className="btn btn-link"
                    type="button"
                    onClick={() =>
                      setRecordIdToDestroy(row.id)
                    }
                    >
                    {i18n('common.destroy')}
                    </button>
                    
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

      {recordIdToCancelSubscription && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doCancelSubscription(recordIdToCancelSubscription)}
          onClose={() => setRecordIdToCancelSubscription(null)}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => setRecordIdToDestroy(null)}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </TableWrapper>
  );
}

export default TenantListTable;
