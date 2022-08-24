import React from 'react';
import TenantListFilter from 'src/view/superadmin/tenant/list/TenantListFilter';
import TenantListTable from 'src/view/superadmin/tenant/list/TenantListTable';
import TenantListToolbar from 'src/view/superadmin/tenant/list/TenantListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { i18n } from 'src/i18n';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function TenantListPage(props) {

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('tenant.list.menu')],
        ]}
      />
      <ContentWrapper>
        <PageTitle>{i18n('tenant.list.title')}</PageTitle>

        <TenantListToolbar />
        <TenantListFilter />
        <TenantListTable />
      </ContentWrapper>
    </>
  );
}

export default TenantListPage;
