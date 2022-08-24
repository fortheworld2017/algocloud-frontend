import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n, i18nHtml } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import Content from 'src/view/auth/styles/Content';
import Wrapper from 'src/view/auth/styles/Wrapper';
import Logo from 'src/view/auth/styles/Logo';
import OtherActions from 'src/view/auth/styles/OtherActions';

function InactiveUserPage() {
  const dispatch = useDispatch();

  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  const doSignout = () => {
    dispatch(actions.doSignout());
  };

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${
          backgroundImageUrl ||
          '/images/signin-3.svg'
        })`,
      }}
    >
      <Content>
        <Logo>
          {logoUrl ? (
            <img
              src={logoUrl}
              width="240px"
              alt={i18n('app.title')}
            />
          ) : (
            <h1>{i18n('app.title')}</h1>
          )}
        </Logo>

        <h5 style={{ textAlign: 'center', color: 'red' }}>
          {i18nHtml('auth.inactiveUser.message')}
        </h5>

        <OtherActions>
          <button
            className="btn btn-sm btn-link"
            type="button"
            onClick={doSignout}
          >
            {i18n('auth.signinWithAnotherAccount')}
          </button>
        </OtherActions>
      </Content>
    </Wrapper>
  );
}

export default InactiveUserPage;
