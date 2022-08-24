import React, { useEffect, useState, useRef } from 'react';
import { ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/algorand/overview/overviewSelectors';
import { CHART_TYPES } from 'src/modules/algorand/constants';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import TradingViewChart from 'src/view/algorand/components/TradingViewChart';
import {
  FlexContainer,
  ChartWindowWrapper,
} from 'src/view/algorand/styled';
import Spinner from 'src/view/shared/Spinner';


function ShowcaseChart() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [width3, setWidth3] = useState(0);

  const showcase = useSelector(selectors.selectShowcase);
  const dailyData = useSelector(selectors.selectDailyData);

  useEffect(() => {
    if (ref1.current) {
      const current: any = ref1.current;
      setWidth1(Math.max(current.clientWidth, 400));
    }
    if (ref2.current) {
      const current: any = ref2.current;
      setWidth2(Math.max(current.clientWidth, 400));
    }
    if (ref3.current) {
      const current: any = ref3.current;
      setWidth3(Math.max(current.clientWidth, 400));
    }
  }, [ref1, ref2, ref3])

  return (
    <FlexContainer gap="20px" className="showcase-row">
      <div className="showcase-row-1">
      <ContentWrapper gap="10px" className=" w-50 w-100 card bg-box rounded
      card-hover m-0">
        <ResponsiveContainer aspect={40 / 28} ref={ref1}>
          <TradingViewChart
            data={dailyData}
            base={0}
            title={`<a href="/algorand/assets/${showcase.assetId}">${showcase.unitName || ''}</a> Liquidity`}
            field="liquidity"
            width={width1}
            type='area'
            utc={true}
            timeField='date'
          />
        </ResponsiveContainer>
      </ContentWrapper>

      <ChartWindowWrapper gap="10px" className="w-50 w-100 card bg-box rounded card-hover m-0">
        <ResponsiveContainer aspect={40 / 28} ref={ref2}>
          <TradingViewChart
            data={dailyData}
            base={0}
            title={`<a href="/algorand/assets/${showcase.assetId}">${showcase.unitName || ''}</a> Volume (24hr)`}
            field={'lastDayVolume'}
            width={width2}
            type={CHART_TYPES.BAR}
            timeField='date'
            useWeekly={false}
            utc={true}
          />
        </ResponsiveContainer>
      </ChartWindowWrapper>
      </div>
      <div className="showcase-row-2">
     <ChartWindowWrapper className=" card bg-box rounded  card-hover m-0">
     <ResponsiveContainer aspect={110 / 50} ref={ref3}>
       <TradingViewChart
         data={dailyData}
         base={0}
         title={`<a href="/algorand/assets/${showcase.assetId}">${showcase.unitName || ''}</a> Market Cap`}
         field={'marketCap'}
         width={width3}
         type={CHART_TYPES.AREA}
         timeField='date'
         useWeekly={false}
         utc={true}
       />
     </ResponsiveContainer>
   </ChartWindowWrapper>
   </div>
    </FlexContainer>
  )
}

export default ShowcaseChart;
