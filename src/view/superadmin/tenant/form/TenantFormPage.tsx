import React from 'react';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import PageTitle from 'src/view/shared/styles/PageTitle';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import TenantForm from 'src/view/superadmin/tenant/form/TenantForm';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import actions from 'src/modules/superadmin/tenant/form/tenantFormActions';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import authSelectors from 'src/modules/auth/authSelectors';

function TenantFormPage() {
  const currentUserIsSuperadmin = useSelector(
    authSelectors.selectCurrentUserSuperadmin
  );

  const dispatch = useDispatch();

  const doSubmit = (data) => {
    dispatch(actions.doCreate(data));
  };

  if (!currentUserIsSuperadmin) return <Redirect to="/403" />;

  return (
    <>
      <Breadcrumb
        items={[[i18n('tenant.menu'), '/superadmin/tenant'], [i18n('tenant.new.title')]]}
      />

      <ContentWrapper>
        <PageTitle>{i18n('tenant.new.title')}</PageTitle>

        <TenantForm
        onSubmit={doSubmit}
        onCancel={() => getHistory().push('/superadmin/tenant')}
        />
        
      </ContentWrapper>
    </>
  );
}

export default TenantFormPage;
