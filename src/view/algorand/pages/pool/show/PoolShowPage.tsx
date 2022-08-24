import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import { formattedNum } from 'src/modules/algorand/utils';
import actions from 'src/modules/algorand/pool/show/poolShowActions';
import selectors from 'src/modules/algorand/pool/show/poolShowSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PoolChart from 'src/view/algorand/components/PoolChart';

const PoolShowPage = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const address = match.params.address;
  
  useEffect(() => {
    dispatch(actions.doFetch(address));
  }, [dispatch, address]);
  
  const loading = useSelector(selectors.selectLoading);
  const pool = useSelector(selectors.selectPool);
  const poolName = useSelector(selectors.selectPoolName);
  const chartData = useSelector(selectors.selectDailyPoolData);
  const rateOneData = useSelector(selectors.selectHourlyOneRates);
  const rateTwoData = useSelector(selectors.selectHourlyTwoRates);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('algorand.menu'), '/algorand'],
          ['Pools', '/algorand/pools'],
          [`Pool (${poolName})`]
        ]}
      />

      {/* <ContentWrapper className="card-hover">
        <PageTitle>
          {loading && 'Pool'}
          {!loading && `Pool (${pool['assetOneUnitName']}-${pool['assetTwoUnitName']})`}
        </PageTitle>
      </ContentWrapper> */}

      <div className='row'>
        <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-between">
          <ContentWrapper style={{flex: 1}} className="card-hover">
            <h6 className="grow">Liqudity</h6>
            <h5 className='text-info'>{formattedNum(pool['liquidity'], true)}</h5>
          </ContentWrapper>
          <ContentWrapper style={{flex: 1}} className="card-hover">
            <h6 className="grow">Volume (24hrs)</h6>
            <h5 className='text-info'>{formattedNum(pool['lastDayVolume'], true)}</h5>
          </ContentWrapper>
          <ContentWrapper style={{flex: 1}} className="card-hover">
            <h6 className="grow">Volume (7days)</h6>
            <h5 className='text-info'>{formattedNum(pool['lastWeekVolume'], true)}</h5>
          </ContentWrapper>
          {/* <ContentWrapper style={{flex: 1}}>
            <h6>{`${pool['assetOneReserves']} ${pool['assetOneUnitName']}`}</h6>
            <h6>{`${pool['assetTwoReserves']} ${pool['assetTwoUnitName']}`}</h6>
          </ContentWrapper> */}
        </div>
        <div className="col-lg-8 col-sm-12">
        <PoolChart
          color='#687dfd'
          loading={loading}
          pool={pool}
          chartData={chartData}
          rateOneData={rateOneData}
          rateTwoData={rateTwoData}
        />
        </div>
      </div>
    </>
  );
}

export default PoolShowPage;
