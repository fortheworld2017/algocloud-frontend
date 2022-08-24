import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import Content from 'src/view/auth/styles/Content';
import Logo from 'src/view/auth/styles/Logo';
import OtherActions from 'src/view/auth/styles/OtherActions';
import Wrapper from 'src/view/auth/styles/Wrapper';
import I18nFlags from 'src/view/layout/I18nFlags';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SocialButtons from 'src/view/auth/styles/SocialButtons';
import config from 'src/config';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Message from 'src/view/shared/message';
import 'src/app.css';

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n('user.fields.email'), {
    required: true,
  }),
  password: yupFormSchemas.string(
    i18n('user.fields.password'),
    {
      required: true,
    },
  ),
  rememberMe: yupFormSchemas.boolean(
    i18n('user.fields.rememberMe'),
  ),
});

const videoSource = "/assets/video.mp4";
function SigninPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);

  const { socialErrorCode } = queryString.parse(
    location.search,
  );

  const externalErrorMessage = useSelector(
    selectors.selectErrorMessage,
  );

  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  useEffect(() => {
    if (socialErrorCode) {
      if (socialErrorCode === 'generic') {
        Message.error(i18n('errors.defaultErrorMessage'));
      } else {
        Message.error(
          i18n(`auth.social.errors.${socialErrorCode}`),
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [initialValues] = useState({
    email: '',
    password: '',
    rememberMe: true,
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(
      actions.doSigninWithEmailAndPassword(
        email,
        password,
        rememberMe,
      ),
    );
  };

  return (
    <Wrapper className="main signin">
            <div className="center-container-2" ><a href="/" className="logo nuxt-link-active" ><img src="/_nuxt/img/logo-purple.cb95760.svg" alt="" data-v-80e842dc=""/></a> <div className="login" data-v-9f658a16="" data-v-80e842dc=""><span className="subtitle" >AlgoCloud Dashboard</span> <h1 className="title">Sign in to your Cloud Account</h1> <div className="container-2" ><p >
            A comprehensive Analytics and DeFi POS platform on the Algorand blockchain. Customizable, extendable, and 100% powered by the $HDL token.
			<a href="https://twitter.com/headline_crypto"> Learn More</a></p>  <p className="note" >
			Don't have an account?
			<a href="/auth/signup"  className=""> Register for Free</a>. Must hold min. 500 HDL tokens to access AlgoCloud.</p></div></div></div>
      <Content className="">
            <div className="card">
            <div className="card-header bg-circle-shape bg-shape text-center p-2">
            <Logo style={{ marginBottom: '1rem', marginTop: '1rem' }}>
             <a className="font-sans-serif fw-bolder fs-4 z-index-1 position-relative link-light light" href="."></a>
          {logoUrl ? (
            <img
              src={logoUrl}
              width="240px"
              alt={i18n('app.title')}
            />
          ) : (
            <h1 className="algocloud-brand-login">algocloud</h1>
          )}
        </Logo>
            </div>
            <div className="card-body p-4">
              <div className="row flex-between-center">
                <div className="col-auto">
                  <h3>Login</h3>
                </div>
                <div className="col-auto fs--1 text-600"><span className="mb-0 fw-semi-bold">New User?</span> <span className="col-auto fs--1 text-600">            <OtherActions>
              <Link
                
                to="/auth/signup"
              >
                {i18n('auth.createAnAccount')}
              </Link>
            </OtherActions></span></div>
              </div>
              <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="mb-3"><label className="form-label">Email address</label>            
                <InputFormItem 
              name="email"
              placeholder={i18n('user.fields.email')}
              autoComplete="email"
              autoFocus
              externalErrorMessage={externalErrorMessage}
            /></div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between"><label className="form-label" >Password</label></div>            <InputFormItem
              name="password"
              placeholder={i18n('user.fields.password')}
              autoComplete="password"
              type="password"
            />
                </div>
                <div className="row flex-between-center">
                  <div className="col-auto">
                    <div className="form-check mb-0">                
                    <input
                  className=""

                  type="checkbox"
                  id={'rememberMe'}
                  name={'rememberMe'}
                  ref={form.register}
                />                <label
                className="form-check-label mb-0"
                htmlFor={'rememberMe'}
                style={{ paddingLeft: '0px !important' }}
              >
                {i18n('user.fields.rememberMe')}
              </label></div>
                  </div>
                  <div className="col-auto">               
                  <Link
                  className="fs--1"
                  style={{ paddingLeft: '0px' }}
                  to="/auth/forgot-password"
                >
                  {i18n('auth.forgotPassword')}
                </Link></div>
                </div>
                <div className="mb-3">            <button
              className="btn btn-primary d-block w-100 mt-3"
              type="submit"
              disabled={loading}
            >
              <ButtonIcon loading={loading} />{' '}
              {i18n('auth.signin')}
            </button></div>
              </form>
              <div className="position-relative mt-4">
                <hr className="bg-300"/>
                <div className="divider-content-center">or log in with</div>
              </div>
          <form >
        <SocialButtons className="row g-2 mt-2">
        <div className="row g-2 mt-2">
        <div className="col-sm-6">
              <a className="btn btn-outline-facebook btn-sm d-block w-100"
                href={`${config.backendUrl}/auth/social/facebook`}
              >
<svg className="svg-inline--fa fa-facebook-square fa-w-14 me-2" data-fa-transform="grow-8" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" ><g transform="translate(224 256)"><g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" transform="translate(-224 -256)"></path></g></g></svg>
facebook
              </a>
              </div>
              <div className="col-sm-6">
              <a className="btn btn-outline-google-plus btn-sm d-block w-100"
                href={`${config.backendUrl}/auth/social/google`}
              >
<svg className="svg-inline--fa fa-google-plus-g fa-w-20 me-2" data-fa-transform="grow-8" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-plus-g" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><g transform="translate(320 256)"><g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)"><path fill="currentColor" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" transform="translate(-320 -256)"></path></g></g></svg>
google
              </a>
              </div>
              </div>
            </SocialButtons>



          </form>
            <div className=""><I18nFlags className="built-by-flags"/></div>
          
        </FormProvider>
              

            </div>
        </div>
        <div className="">
        <div className="">
        </div>
      </div>
      </Content>
    </Wrapper>
    
  );
}

export default SigninPage;
