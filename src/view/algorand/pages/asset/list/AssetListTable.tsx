import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/algorand/asset/list/assetListActions';
import selectors from 'src/modules/algorand/asset/list/assetListSelectors';
import algorandSelectors from 'src/modules/algorand/algorandSelectors';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import AssetTable from 'src/view/algorand/components/AssetTable';

function AssetListTable({ assets }) {

  const dispatch = useDispatch();

  const [assetIdToToggle, setAssetIdToToggle] = useState(null);
  const [assetIdToShowcase, setAssetIdToShowcase] = useState(null);

  const hasPermissionToToggle = useSelector(
    algorandSelectors.selectPermissionToToggle
  );

  const hasPermissionToShowcase = useSelector(
    algorandSelectors.selectPermissionToShowcase
  );
  
  const loading = useSelector(
    selectors.selectLoading,
  );

  const pagination = useSelector(
    selectors.selectPagination,
  );

  const favoriteIds = useSelector(
    selectors.selectFavoriteIds,
  );

  const showcaseId = useSelector(
    selectors.selectShowcaseId,
  );

  const hasRows = useSelector(
    selectors.selectHasRows,
  );

  const sorter = useSelector(
    selectors.selectSorter,
  );
  
  const toggleFavorite = (assetId) => {
    setAssetIdToToggle(null);
    dispatch(actions.doFavorite(assetId));
  };

  const setShowcase = (assetId) => {
    setAssetIdToShowcase(null);
    dispatch(actions.doShowcase(assetId));
  };

  const setToogleId = (assetId) => {
    setAssetIdToToggle(assetId);
  };

  const setShowcaseId = (assetId) => {
    setAssetIdToShowcase(assetId);
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

  const doPagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };
  
  return (
    <div className="assets-table">
      <TableWrapper>
        <AssetTable
          loading={loading}
          assets={assets}
          favoriteIds={favoriteIds}
          showcaseId={showcaseId}
          hasRows={hasRows}
          sorter={sorter}
          togglePermission={hasPermissionToToggle}
          showcasePermission={hasPermissionToShowcase}
          setToogleId={setToogleId}
          setShowcaseId={setShowcaseId}
          doChangeSort={doChangeSort}
        />

        <Pagination
          onChange={doPagination}
          disabled={loading}
          pagination={pagination}
        />
      </TableWrapper>

      {(assetIdToToggle !== null) && (
        <ConfirmModal
          title={i18n('common.confirmAction')}
          onConfirm={() => toggleFavorite(assetIdToToggle)}
          onClose={() => setAssetIdToToggle(null)}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}

      {(assetIdToShowcase !== null) && (
        <ConfirmModal
          title={i18n('common.confirmAction')}
          onConfirm={() => setShowcase(assetIdToShowcase)}
          onClose={() => setAssetIdToShowcase(null)}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </div>
  )
}

export default AssetListTable;
