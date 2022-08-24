import React from 'react';
import { i18n } from 'src/i18n';
import DashboardBarChart from 'src/view/dashboard/DashboardBarChart';
import DashboardChart from 'src/view/dashboard/DashboardChart';
import DashboardDoughnutChart from 'src/view/dashboard/DashboardDoughnutChart';
import DashboardHorizontalBarChart from 'src/view/dashboard/DashboardHorizontalBarChart';
import DashboardLineChart from 'src/view/dashboard/DashboardLineChart';
import DashboardMixChartOne from 'src/view/dashboard/DashboardMixChartOne';
import DashboardMixChartTwo from 'src/view/dashboard/DashboardMixChartTwo';
import DashboardPolarChart from 'src/view/dashboard/DashboardPolarChart';
import DashboardRadarChart from 'src/view/dashboard/DashboardRadarChart';
import defaultTokens from 'src/view/dashboard/DefaultTokens';

const DashboardPage = (props) => {  
  return (
    <>
      <div
        style={{
          padding: 0,
        }}
      >
        <div className="row no-gutters">
          <div
            style={{
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className=" bg-box p-2 rounded">
              <DashboardChart asset={defaultTokens[0]} />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-box p-2 rounded">
              <DashboardChart asset={defaultTokens[1]} />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-box p-2 rounded">
              <DashboardChart asset={defaultTokens[2]} />
            </div>
          </div>

          <div
            style={{
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-box p-2 rounded">
              <DashboardChart asset={defaultTokens[3]} />
            </div>
          </div>

          <div
            style={{
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-box p-2 rounded">
              <DashboardChart asset={defaultTokens[4]} />
            </div>
          </div>

          <div
            style={{
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="  bg-box p-2 rounded">
              <DashboardChart asset={defaultTokens[5]} />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className="bg-box p-2 rounded">
              <DashboardChart asset={defaultTokens[6]} />
            </div>
          </div>
          <div
            style={{
              paddingLeft: '6px',
              paddingRight: '6px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
          >
            <div className=" bg-box p-2 rounded">
              <DashboardChart asset={defaultTokens[7]} />
            </div>
          </div>
          <footer className="footer">
            <div className="algocloud-f1 i18-mobile-1 row g-0 justify-content-between fs--1 mt-4 ">
              <div className="col-12 col-sm-auto ">
                <p className="mb-0 text-600"><div className="i18-mobile">{i18n('dashboard.message')} <div className="i18-mobile-2">{i18n('dashboard.rights')}</div></div></p>
              </div>
              <div className="algocloud-footer">
                <p className="mb-0 text-600">v1.0.0</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
