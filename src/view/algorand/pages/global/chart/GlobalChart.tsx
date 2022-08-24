import React, { useEffect, useState, useRef } from 'react';
import { ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { formattedNum } from 'src/modules/algorand/utils';
import actions from 'src/modules/algorand/global/globalActions';
import selectors from 'src/modules/algorand/global/globalSelctors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import TradingViewChart from 'src/view/algorand/components/TradingViewChart';
import CandleStickChart from 'src/view/algorand/components/CandleStickChart';
import { FlexContainer } from 'src/view/algorand/styled';

function GlobalChart() {
  const dispatch = useDispatch();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);

  const marketCapData = useSelector(selectors.selectMarketCapData)
  const algoPriceData = useSelector(selectors.selectAlgoPriceData)

  useEffect(() => {
    if (ref1.current) {
      const current: any = ref1.current;
      setWidth1(current.clientWidth);
    }
    if (ref2.current) {
      const current: any = ref2.current;
      setWidth2(current.clientWidth);
    }
  }, [ref1, ref2])

  useEffect(() => {
    dispatch(actions.doFetch());
  }, [dispatch])

  function valueFormatter(val) {
    return (
      `<div style="font-size: 16px; margin: 4px 0px; color: var(--algocloud-body-bg-2);">ALGO / USD </div>` +
      formattedNum(val)
    )
  }
  return (
    <FlexContainer gap="20px">
      <ContentWrapper className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 w-50">
        {marketCapData &&
          <ResponsiveContainer aspect={60 / 30} ref={ref1}>
            <TradingViewChart
              data={marketCapData}
              base={0}
              title="MarketCap"
              field="market-cap"
              timeField='time-start'
              width={width1}
              type='area'
              utc={true}
            />
          </ResponsiveContainer>}
      </ContentWrapper>
      <ContentWrapper className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 w-50">
        {algoPriceData &&
          <ResponsiveContainer aspect={60 / 30} ref={ref2}>
            <CandleStickChart
              data={algoPriceData}
              base={0}
              margin={false}
              width={width2}
              valueFormatter={valueFormatter}
              fixed={true}
            />
          </ResponsiveContainer>}
      </ContentWrapper>
    </FlexContainer>
  )
}

export default GlobalChart;
