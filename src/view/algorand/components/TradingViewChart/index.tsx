import React, { useState, useEffect, useRef } from 'react';
import { BusinessDay, createChart, IChartApi, Time } from 'lightweight-charts';
import { usePrevious } from 'react-use';
import { Play } from 'react-feather';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { formattedNum } from 'src/modules/algorand/utils';
import { ASSET_CHART_VIEW_DURATION, CHART_TYPES } from 'src/modules/algorand/constants';
import { GraphWrapper, IconWrapper } from 'src/view/algorand/styled';
import moment from 'moment';
import Spinner from 'src/view/shared/Spinner';

dayjs.extend(utc);

const HEIGHT = 300;

export const toLocalTime = (time: number) => {
  let utcDate = new Date(time * 1000).toString();
  let arr = utcDate.split('GMT');
  utcDate = arr[0] + 'UTC'
  let localDate = new Date(utcDate).getTime() / 1000;
  return localDate
}

const TradingViewChart = ({
  type = CHART_TYPES.BAR,
  data,
  base,
  field,
  title = '',
  assetId=null,
  fixed = false,
  width,
  height = 300,
  utc = false,
  timeField = 'createdDate',
  useWeekly = false,
  duration = ASSET_CHART_VIEW_DURATION.WEEK
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [chartCreated, setChartCreated] = useState<IChartApi | null>(null);
  const dataPrev = usePrevious(data);
  const durationPrev = usePrevious(duration);

  const formattedData = data?.map(entry => {
    let utcTime = toLocalTime(entry[timeField]);
    return {
      time: utc ? utcTime : entry[timeField],
      value: parseFloat(entry[field])
    };
  });

  const topScale = type === CHART_TYPES.AREA ? 0.32 : 0.2;
  let rootb = document.getElementById("root")!;
  let styleb = window.getComputedStyle(rootb);
  let textColor = styleb.getPropertyValue('--algocloud-headings-color');

  useEffect(() => {
    if (data !== dataPrev && chartCreated) {
      let tooltip = document.getElementById('tooltip-id' + type + '-' + assetId);
      let node = document.getElementById('tradchart-id' + type + '-' + assetId);
      if (node && tooltip) {
        node.removeChild(tooltip);
      }
      chartCreated.resize(0, 0);
      setChartCreated(null);
    }
  }, [chartCreated, data, dataPrev, type]);

  useEffect(() => {
    if (duration !== durationPrev && chartCreated) {
      let tooltip = document.getElementById('tooltip-id' + type + '-' + assetId);
      let node = document.getElementById('tradchart-id' + type + '-' + assetId);
      if (node && tooltip) {
        node.removeChild(tooltip);
      }
      chartCreated.resize(0, 0);
      setChartCreated(null);
    }
  }, [chartCreated, duration, durationPrev, type]);

  useEffect(() => {
    if (!chartCreated && formattedData) {
      if (!ref.current) return;

      var chart = createChart(ref.current, {
        width: width,
        height: HEIGHT,
        layout: {
          backgroundColor: 'transparent',
          textColor: textColor
        },
        rightPriceScale: {
          scaleMargins: {
            top: topScale,
            bottom: 0
          },
          borderVisible: true
        },
        timeScale: {
          borderVisible: true,
          timeVisible: true
        },
        grid: {
          horzLines: {
            color: 'rgb(255 255 255 / 5%)',
            visible: false
          },
          vertLines: {
            color: 'rgb(255 255 255 / 5%)',
            visible: false
          }
        },
        crosshair: {
          horzLine: {
            visible: true,
            labelVisible: true
          },
          vertLine: {
            visible: true,
            labelVisible: true
          }
        },
        localization: {
          priceFormatter: val => formattedNum(val, true)
        }
      });

      var series =
        type === CHART_TYPES.BAR
          ? chart.addHistogramSeries({
            color: '#5855f3',
            priceFormat: {
              type: 'volume'
            },
            scaleMargins: {
              top: topScale,
              bottom: 0
            },
            // lineColor: '#687dfd',
            // lineWidth: 3
          }) :
          type === CHART_TYPES.AREA ?
            chart.addBaselineSeries({
              // topColor: '#d7829c',
              // bottomColor: 'rgba(112, 82, 64, 0)',
              // lineColor: '#d7829c',
              // lineWidth: 3
            }) :
            chart.addAreaSeries({
              topColor: 'rgb(123 120 255 / 40%)',
              bottomColor: 'rgb(88 85 243 / 10%)',
              lineColor: '#5855f3',
              lineWidth: 3
            });

      series.setData(formattedData);
      var toolTip = document.createElement('div');
      toolTip.setAttribute('id', 'tooltip-id' + type + '-' + assetId);
      toolTip.className = 'three-line-legend';
      if (ref.current)
        ref.current.appendChild(toolTip);
      toolTip.style.display = 'block';
      toolTip.style.fontWeight = '500';
      toolTip.style.left = -4 + 'px';
      toolTip.style.top = '-' + 8 + 'px';
      toolTip.style.position = 'absolute';
      toolTip.style.zIndex = '100';
      toolTip.style.backgroundColor = 'transparent';

      let price = base;
      let time: number;
      let date: string = '';
      if (formattedData && formattedData.length > 0) {
        price = formattedData[formattedData.length - 1].value;
        time = formattedData[formattedData.length - 1].time;
        date = useWeekly ? moment(time * 1000).format('MMMM D, YYYY')
          : moment(time * 1000).format('MMMM D, YYYY');
      }

      toolTip.innerHTML =
        `<div style="font-size: 16px; margin: 4px 0px; color: ${textColor};">${title}</div>` +
        `<div style="font-size: 22px; margin: 4px 0px; color:${textColor}" >` +
        formattedNum(price, true) +
        '</div>' +
        (date ?
          '<div>' +
          date +
          '</div>' 
          : '');

      chart.subscribeCrosshairMove(function (param) {
        if (
          param === undefined ||
          param.time === undefined ||
          param.point === undefined ||
          param.point.x < 0 ||
          param.point.x > width ||
          param.point.y < 0 ||
          param.point.y > HEIGHT
        ) {
          // setLastBarText()
        } else {
          const ts = param.time as number;
          let dateStr = useWeekly
            ? moment(ts * 1000)
              .startOf('week')
              .format('MMMM D, YYYY') +
            '-' +
            moment(ts * 1000)
              .endOf('week')
              .format('MMMM D, YYYY')
            : moment(ts * 1000).format('MMMM D, YYYY');
          var price = param.seriesPrices.get(series);

          toolTip.innerHTML =
            `<div style="font-size: 16px; margin: 4px 0px; color: ${textColor};">${title}</div>` +
            `<div style="font-size: 22px; margin: 4px 0px; color: ${textColor}">` +
            formattedNum(price, true) +
            '</div>' +
            '<div>' +
            dateStr +
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
  }, [
    base,
    chartCreated,
    data,
    formattedData,
    textColor,
    title,
    topScale,
    type,
    useWeekly,
    width,
    duration
  ]);

  useEffect(() => {
    if (width) {
      if (!fixed) chartCreated && chartCreated.resize(width, height);
      chartCreated && chartCreated.timeScale().scrollToPosition(0, true);
    }
  }, [chartCreated, height, width, fixed]);

  return (
    <GraphWrapper>
      <div ref={ref} className="var-color" id={'tradchart-id' + type + '-' + assetId} />
      {
        (formattedData && formattedData.length > 0) ? (
          ''
        ) : (
          <div style={{ position: 'absolute', top: '40%', left: '45%' }}>
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

export default TradingViewChart;
