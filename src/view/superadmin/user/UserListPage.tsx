import React from 'react';
import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import UserFilter from 'src/view/superadmin/user/UserFilter';
import UserTable from 'src/view/superadmin/user/UserTable';

function UserPage() {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('user.menu')],
        ]}
      />
      <ContentWrapper>
        <PageTitle>{i18n('user.title')}</PageTitle>

        <UserFilter />
        <UserTable />
      </ContentWrapper>
    </>
  )
}

export default UserPage;