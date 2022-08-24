import React from 'react';
import { i18n } from 'src/i18n';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import GlobalChart from 'src/view/algorand/pages/global/chart/GlobalChart';

function AlgoExplorerPage() {

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('algorand.menu'), '/algorand'],
          ['Global'],
        ]}
      />
      <GlobalChart />
      <div className="mb-3 card"><div className="bg-holder bg-card"></div><div className="position-relative card-body"><div className="row"><div className="col-lg-8"><h6 className="text-600">Global Algorand analytics</h6><h2 className="mb-0">For teams of all sizes, in the cloud</h2><p className="mt-2">Get the power, control, and customization you need to manage your</p> <p className="d-none.d-md-block"> team’s and organization’s projects.</p><a className="btn btn-sm btn-link ps-0" href="/pricing/pricing-default#!">Have questions? Chat with us</a></div></div></div></div>
    </>
  )
}

export default AlgoExplorerPage;
