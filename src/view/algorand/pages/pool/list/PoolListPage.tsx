import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/algorand/pool/list/poolListActions';
import selectors from 'src/modules/algorand/pool/list/poolListSelectors';
import PoolListTable from 'src/view/algorand/pages/pool/list/PoolListTable';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';


const PoolListPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actions.doReset());
    dispatch(actions.doFetch());
  }, [dispatch]);

  const pools = useSelector(selectors.selectPools);
  
  return (
    <>
    <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('algorand.menu'), '/algorand'],
          ['Pools']
        ]}
      />

      <ContentWrapper className="card-hover">
        <PageTitle className="table-header">Pools</PageTitle>
        <PoolListTable pools={pools} />
      </ContentWrapper>
    </>
  )
}

export default PoolListPage;
