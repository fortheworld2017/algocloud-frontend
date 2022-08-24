import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/algorand/overview/overviewActions';
import selectors from 'src/modules/algorand/overview/overviewSelectors';
import algorandSelectors from 'src/modules/algorand/algorandSelectors';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import AssetTable from 'src/view/algorand/components/AssetTable';

function FavoritesTable({ assets }) {

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

  const favoritePagination = useSelector(
    selectors.selectFavoritePagination,
  );

  const favoriteIds = useSelector(
    selectors.selectFavoriteIds,
  );

  const showcaseId = useSelector(
    selectors.selectShowcaseId,
  );

  const hasRows = useSelector(
    selectors.selectHasFavoriteRows,
  );

  const sorter = useSelector(
    selectors.selectFavoriteSorter,
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
      actions.doChangeFavoriteSort({
        field,
        order,
      }),
    );
  };

  const doFavoritePagination = (pagination) => {
    dispatch(actions.doChangeFavoritePagination(pagination));
  };
  
  return (
    <div className="favorites-table">
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
          onChange={doFavoritePagination}
          disabled={loading}
          pagination={favoritePagination}
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

export default FavoritesTable;
