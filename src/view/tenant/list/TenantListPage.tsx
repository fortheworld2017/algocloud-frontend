import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import authSelectors from 'src/modules/auth/authSelectors';
import TenantListFilter from 'src/view/tenant/list/TenantListFilter';
import TenantListTable from 'src/view/tenant/list/TenantListTable';
import TenantListToolbar from 'src/view/tenant/list/TenantListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { i18n } from 'src/i18n';

function TenantListPage(props) {
  const currentUserIsSuperadmin = useSelector(
    authSelectors.selectCurrentUserSuperadmin,
  );

  if (currentUserIsSuperadmin) return <Redirect to="/403" />;

  return (
    <>
      <ContentWrapper style={{ marginTop: '0px' }}>
        <PageTitle>{i18n('tenant.list.title')}</PageTitle>

        <TenantListToolbar />
        <TenantListFilter />
        <TenantListTable />
      </ContentWrapper>
    </>
  );
}

export default TenantListPage;
