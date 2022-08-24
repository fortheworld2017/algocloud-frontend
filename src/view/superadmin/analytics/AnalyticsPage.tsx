import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import actions from 'src/modules/superadmin/analytics/analyticsActions';
import AnalyticsCard from 'src/view/superadmin/analytics/AnalyticsCard';
import selectors from 'src/modules/superadmin/analytics/analyticsSelectors';

function AnalyticsPage() {
  const dispatch = useDispatch();

  const userCount = useSelector(
    selectors.selectUserCount
  );

  const tenantCount = useSelector(
    selectors.selectTenantCount
  );
  
  useEffect(() => {
    dispatch(actions.doFetch());
  }, [dispatch]);

  

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('analytics.menu')],
        ]}
      />
      <ContentWrapper>
        <PageTitle>{i18n('analytics.title')}</PageTitle>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-6">
            <AnalyticsCard>
              <div className="title">
                {i18n('user.title')}
              </div>
              <div className="pricing">
                { userCount }
              </div>
            </AnalyticsCard>
          </div>
          <div className="col-lg-6 col-md-6 col-6">
          <AnalyticsCard>
              <div className="title">
              {i18n('tenant.menu')}
              </div>
              <div className="pricing">
                { tenantCount }
              </div>
            </AnalyticsCard>
          </div>
        </div>
        
      </ContentWrapper>
    </>
  )
}

export default AnalyticsPage;