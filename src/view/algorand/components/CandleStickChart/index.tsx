import React, { useState, useEffect, useRef } from 'react';
import { BarPrices, createChart, CrosshairMode, IChartApi, Time, UTCTimestamp } from 'lightweight-charts';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { formattedNum } from 'src/modules/algorand/utils';
import { usePrevious } from 'react-use';
import { Play } from 'react-feather';
import {
  IconWrapper,
  GraphWrapper,
} from 'src/view/algorand/styled';
import Spinner from 'src/view/shared/Spinner';
import { ASSET_CHART_VIEW_DURATION } from 'src/modules/algorand/constants';
import { toLocalTime } from 'src/view/algorand/components/TradingViewChart';

const HEIGHT = 300;

const CandleStickChart = ({
  data,
  width,
  base,
  title = null,
  height = 300,
  fixed = false,
  paddingTop = '',
  margin = true,
  valueFormatter = val => formattedNum(val, true),
  duration = ASSET_CHART_VIEW_DURATION.THREEDAY
}) => {
  dayjs.extend(utc);

  const ref = useRef<HTMLDivElement>(null);

  const formattedData = data?.map(entry => {    
    let utcTime = typeof entry.timestamp === 'number' ? toLocalTime(entry.timestamp) : entry.timestamp;
    return {
      time: utcTime,
      open: entry.open * 1,
      low: entry.low * 1,
      close: entry.close * 1,
      high: entry.high * 1
    };
  });

  // pointer to the chart object
  const [chartCreated, setChartCreated] = useState<IChartApi | null>(null);
  const dataPrev = usePrevious(data);
  const durationPrev = usePrevious(duration);

  let rootb = document.getElementById("root")!;
  let styleb = window.getComputedStyle(rootb);
  let textColor = styleb.getPropertyValue('--algocloud-body-bg-2');

  useEffect(() => {
    if (data !== dataPrev && chartCreated) {
      // remove the tooltip element
      let tooltip = document.getElementById('tooltip-id-' + title);
      let node = document.getElementById('candlechart-id-' + title);
      if (node && tooltip)
        node.removeChild(tooltip);
      chartCreated.resize(0, 0);
      setChartCreated(null);
    }
  }, [chartCreated, data, dataPrev]);

  useEffect(() => {
    if (duration !== durationPrev && chartCreated) {
      // remove the tooltip element
      let tooltip = document.getElementById('tooltip-id-' + title);
      let node = document.getElementById('candlechart-id-' + title);
      if (node && tooltip)
        node.removeChild(tooltip);
      chartCreated.resize(0, 0);
      setChartCreated(null);
    }
  }, [chartCreated, duration, durationPrev]);

  // if no chart created yet, create one with options and add to DOM manually
  useEffect(() => {
    if (!chartCreated) {
      if (!ref.current) return;

      const chart = createChart(ref.current, {
        width: width,
        height: fixed ? HEIGHT : height,
        layout: {
          backgroundColor: 'transparent',
          textColor: textColor
        },
        grid: {
          vertLines: {
            color: 'rgba(197, 203, 206, 0.5)'
          },
          horzLines: {
            color: 'rgba(197, 203, 206, 0.5)'
          }
        },
        crosshair: {
          mode: CrosshairMode.Normal
        },
        rightPriceScale: {
          borderColor: 'rgba(197, 203, 206, 0.8)',
          visible: true
        },
        timeScale: {
          borderColor: 'rgba(197, 203, 206, 0.8)',
          visible: true,
          timeVisible: true,
        },
        localization: {
          priceFormatter: val => formattedNum(val)
        }
      });

      var candleSeries = chart.addCandlestickSeries({
        upColor: 'green',
        downColor: 'red',
        borderDownColor: 'red',
        borderUpColor: 'green',
        wickDownColor: 'red',
        wickUpColor: 'green'
      });

      candleSeries.setData(formattedData);

      var toolTip = document.createElement('div');
      toolTip.setAttribute('id', 'tooltip-id-' + title);
      toolTip.className = 'three-line-legend';
      ref.current.appendChild(toolTip);
      toolTip.style.display = 'block';
      toolTip.style.left = (margin ? 16 : 10) + 'px';
      toolTip.style.top = 5 + 'px';
      toolTip.style.backgroundColor = 'transparent';
      toolTip.style.position = 'absolute';

      let price = base;
      let time: UTCTimestamp;
      let date: string = '';
      if (formattedData && formattedData.length > 0) {
        price = formattedData[formattedData.length - 1].close;
        time = formattedData[formattedData.length - 1].time;
        date = dayjs.unix(time).format('MM/DD h:mm A');
      }
      // get the title of the chart
      toolTip.innerHTML = price
        ? `<div style="font-size: 18px; margin: 4px 0px; color: ${textColor}">` + valueFormatter(price) + '</div>'
        : `<div style="font-size: 18px; margin: 4px 0px; color: ${textColor}">` + valueFormatter(0) + '</div>';

      // update the title when hovering on the chart
      chart.subscribeCrosshairMove(function (param) {
        if (
          param === undefined ||
          param.time === undefined ||
          param.point === undefined ||
          param.point.x < 0 ||
          param.point.x > width ||
          param.point.y < 0 ||
          param.point.y > height
        ) {
          // toolTip.innerHTML = base
          //   ? `<div style="font-size: 18px; margin: 4px 0px; color: ${textColor}">` + valueFormatter(base) + '</div>'
          //   : ''
        } else {
          if (param === undefined || param.seriesPrices === undefined) return;
          if (candleSeries === undefined) return;

          const ts = param.time as UTCTimestamp;
          var price = (param.seriesPrices.get(candleSeries) as BarPrices).close;
          const time = dayjs.unix(ts).format('MM/DD h:mm A');
          toolTip.innerHTML =
            `<div style="font-size: 18px; margin: 4px 0px; color: ${textColor}">` +
            valueFormatter(price) +
            `<span style="font-size: 12px; margin: 4px 6px; color: ${textColor}>` +
            time +
            ' UTC' +
            '</span>' +
            '</div>';
        }
      });

      if (duration === ASSET_CHART_VIEW_DURATION.ALL) {
        chart.timeScale().fitContent();
      } else {
        var from = new Date();
        if (duration === ASSET_CHART_VIEW_DURATION.THREEDAY)
          from.setDate(from.getDate() - 3);
        if (duration === ASSET_CHART_VIEW_DURATION.WEEK)
          from.setDate(from.getDate() - 7);
        if (duration === ASSET_CHART_VIEW_DURATION.MONTH)
          from.setMonth(from.getMonth() - 1);
        var to = new Date();
        if (formattedData && formattedData.length > 0) {
          chart.timeScale().setVisibleRange({ from: from.getTime() / 1000 as Time, to: to.getTime() / 1000 as Time });
        }
      }

      setChartCreated(chart);
    }
  }, [chartCreated, formattedData, width, height, valueFormatter, base, margin, textColor, fixed, duration]);

  // responsiveness
  useEffect(() => {
    if (width) {
      if (!fixed) chartCreated && chartCreated.resize(width, height);
      chartCreated && chartCreated.timeScale().scrollToPosition(0, true);
    }
  }, [chartCreated, height, width, fixed]);

  return (
    <GraphWrapper pt={paddingTop}>
      <div ref={ref} id={'candlechart-id-' + title} />
      {
        (formattedData && formattedData.length > 0) ? (
          ''
        ) : (
          <div style={{position: 'absolute', top: '40%', left: '45%'}}>
            <Spinner />
          </div>
        )
      }
      <IconWrapper>
        <Play
          onClick={() => {
            chartCreated && chartCreated.timeScale().fitContent()
          }}
        />
      </IconWrapper>
    </GraphWrapper>
  );
}

export default CandleStickChart;
