import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import selectors from 'src/modules/algorand/favorite/favoriteSelectors';
import actions from 'src/modules/algorand/favorite/favoriteActions';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import FavoriteListTable from 'src/view/algorand/pages/favorite/FavoriteListTable';


const FavoriteListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.doReset());
    dispatch(actions.doFetch());
  }, [dispatch])

  const favorites = useSelector(selectors.selectFavorites);
  
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('algorand.menu'), '/algorand'],
          ['Favorites']
        ]}
      />

      <ContentWrapper className="card-hover">
        <PageTitle>Favorites</PageTitle>
        <FavoriteListTable assets={favorites} />
      </ContentWrapper>
    </>
  )
}

export default FavoriteListPage;
