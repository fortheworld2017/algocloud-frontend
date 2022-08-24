import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import authActions from 'src/modules/auth/authActions';
import authSelectors from 'src/modules/auth/authSelectors';
import layoutActions from 'src/modules/layout/layoutActions';
import { getHistory } from 'src/modules/store';
import I18nSelect from 'src/view/layout/I18nSelect';
import HeaderWrapper from 'src/view/layout/styles/HeaderWrapper';
import Avatar from 'src/view/shared/Avatar';
import config from 'src/config';
import { Link } from 'react-router-dom';
import DarkMode from 'src/view/algorand/components/DarkMode/DarkMode';


function Header(props) {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const doToggleMenu = () => {
    let element1 = document.getElementById("main") || { style: { margin: "" } }
    let element2 = document.getElementById("menu-nav") || { style: { position: "", display: "block" } }
    let element3 = document.getElementById("body") || { style: { position: "" } }

    toggle ? setToggle(false) : setToggle(true)
    if  (window.innerWidth < 575)
    if (toggle) {
      element1.style["margin"] = ""
      element2.style["position"] = "fixed"
      element2.style["display"] = "block"
      element3.style["position"] = "relative"
    }
    else {
      element1.style["margin"] = "unset"
      element2.style["position"] = "fixed"
      element2.style["display"] = "block"
      element3.style["position"] = ""
    }
    dispatch(layoutActions.doToggleMenu());
  };

  const userText = useSelector(
    authSelectors.selectCurrentUserNameOrEmailPrefix,
  );
  const userAvatar = useSelector(
    authSelectors.selectCurrentUserAvatar,
  );
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );
  const currentUserIsSuperadmin = useSelector(
    authSelectors.selectCurrentUserSuperadmin,
  );

  const doSignout = () => {
    dispatch(authActions.doSignout());
  };

  const doNavigateToProfile = () => {
    getHistory().push('/plan');
    // window.location.href = "http://localhost:3000/profile"
  };

  const doNavigateToPasswordChange = () => {
    getHistory().push('/password-change');
  };

  const doNavigateToTenants = () => {
    getHistory().push('/tenant');
  };

  return (
    <HeaderWrapper id="stickyTop" >
      <div id="stickyTop-2" className="navbar sticky-top">
      <button
        type="button"
        onClick={doToggleMenu}
        className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
      >
        <i className="fas fa-bars" />
      </button>
      <a className="algocloud-navbar-brand" href="."><div className="algocloud-font ">AlgoCloud</div></a>


      <div className="last-child" style={{display: 'flex', alignItems: 'center'}}>
                <span className="i18n-select">
          <I18nSelect  />
        </span>  

<li className="nav-item dropdown">
                <button className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait user-dropdown" 
                id="navbarDropdownNotification" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-haspopup="true" 
                data-hide-on-body-scroll="data-hide-on-body-scroll"
                aria-expanded="true"
                data-toggle="dropdown"
                >
                  <svg className="svg-inline--fa fa-bell fa-w-14" data-fa-transform="shrink-6" 
                style={{ fontSize: '33px',transformOrigin: "0.4375em 0.5em" }} 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" fill="currentColor"><g transform="translate(224 256)"><g transform="translate(0, 0)  scale(0.625, 0.625)  rotate(0 0 0)"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" transform="translate(-224 -256)"></path></g></g></svg>
                </button>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-card dropdown-menu-notification" aria-labelledby="navbarDropdownNotification">
                  <div className="card card-notification shadow-none">
                    <div className="card-header">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                          <h6 className="card-header-title mb-0">Notifications</h6>
                        </div>
                        <div className="col-auto ps-0 ps-sm-3"><a className="card-link fw-normal" href="#">Mark all as read</a></div>
                      </div>
                    </div>
                    <div className="scrollbar-overlay os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition notification-body" 
                    style={{ maxHeight: "19rem" }} >
                      <div className="os-resize-observer-host observed">
                        <div className="os-resize-observer" 
                        style={{ left: "0px", right: "auto", maxHeight: "19rem" }} >
                          </div></div><div className="os-size-auto-observer observed" 
                          style={{ height: "calc(100% + 1px)", float: "left", maxHeight: "19rem" }} >
                            <div className="os-resize-observer"></div></div>
                            <div className="os-content-glue" 
                            style={{margin: "0px", minHeight: "250px", width: "317px"}}></div> 
                          <div className="os-padding">
                            <div className="os-viewport os-viewport-native-scrollbars-invisible">
                              <div className="os-content-2" 
                               style={{ padding: "0px", height: "100%", width: "100%" }} >
                      <div className="list-group list-group-flush fw-normal fs--1">
                        <div className="list-group-title border-bottom">NEW</div>
                        <div className="list-group-item">
                          <a className="notification notification-flush notification-unread" href="#!">
                            <div className="notification-avatar">
                              <div className="avatar avatar-2xl me-3">
                                <img className="rounded-circle" src="../../images/Astro-1.jpg" alt=""/>
                              </div>
                            </div>
                            <div className="notification-body">
                              <p className="mb-1"><strong>Astro Joe</strong> replied to your FORUM comment : "Hello world 😍"</p>
                              <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">💬</span>Just now</span>
                            </div>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a className="notification notification-flush notification-unread" href="#!">
                            <div className="notification-avatar">
                              <div className="avatar avatar-2xl me-3">
                                <div className="avatar-name rounded-circle"><span>AB</span></div>
                              </div>
                            </div>
                            <div className="notification-body">
                              <p className="mb-1"><strong>Antonio Banderas</strong> reacted to <strong>Mia Khalifa's</strong> status</p>
                              <span className="notification-time"><svg className="svg-inline--fa fa-gratipay fa-w-16 me-2 text-danger" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gratipay" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm114.6 226.4l-113 152.7-112.7-152.7c-8.7-11.9-19.1-50.4 13.6-72 28.1-18.1 54.6-4.2 68.5 11.9 15.9 17.9 46.6 16.9 61.7 0 13.9-16.1 40.4-30 68.1-11.9 32.9 21.6 22.6 60 13.8 72z"></path></svg><span className="me-2 fab fa-gratipay text-danger"></span>9hr</span>
                            </div>
                          </a>
                        </div>
                        <div className="list-group-title border-top border-bottom">EARLIER</div>
                        <div className="list-group-item">
                          <a className="notification notification-flush" href="#!">
                            <div className="notification-avatar">
                              <div className="avatar avatar-2xl me-3">
                                <img className="rounded-circle" src="../../images/promo-logo.png" alt=""/> 
                              </div>
                            </div>
                            <div className="notification-body">
                              <p className="mb-1">The forecast today shows a low of 20℃ in Cupertino, CA. See today's weather.</p>
                              <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">🌤️</span>1d</span>
                            </div>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a className="border-bottom-0 notification-unread  notification notification-flush" href="#!">
                            <div className="notification-avatar">
                              <div className="avatar avatar-xl me-3">
                                <img className="rounded-circle" src="../../images/Astro-3.jpg" alt=""/>
                              </div>
                            </div>
                            <div className="notification-body">
                              <p className="mb-1"><strong>University of Arizona</strong> created an event : "Brawndo: It has what plants crave."</p>
                              <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">✌️</span>1w</span>
                            </div>
                          </a>
                        </div>
                        <div className="list-group-item">
                          <a className="border-bottom-0 notification notification-flush" href="#!">
                            <div className="notification-avatar">
                              <div className="avatar avatar-xl me-3">
                                <img className="rounded-circle" src="../../images/Astro-2.jpg" alt=""/>
                              </div>
                            </div>
                            <div className="notification-body">
                              <p className="mb-1"><strong>Jim Cameron</strong> invited to join the group: Tres Comas Tequila for Prez</p>
                              <span className="notification-time"><span className="me-2" role="img" aria-label="Emoji">🙋&zwj;</span>2d</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" 
                     style={{ transform: "translate(0px, 0px)", float: "left", maxHeight: "19rem" }}>
                     </div></div></div>
                     <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
                       <div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" 
                       style={{ transform: "translate(0px, 0px)"}}>
                       </div></div></div><div className="os-scrollbar-corner"></div></div>
                    <div className="card-footer text-center border-top"><a className="card-link d-block" href="../../app/social/notifications.html">View all</a></div>
                  </div>
                </div>
        </li>
     <div className="dropdown app-dropdown">
       
          <button 
            className="app-dropdown user-dropdown"
            id="navbarDropdownMenu" role="button" data-hide-on-body-scroll="data-hide-on-body-scroll" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
            data-toggle="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="18" height="18" viewBox="0 0 276.167 276.167"><path d="M33.144 2.471C15.336 2.471.85 16.958.85 34.765s14.48 32.293 32.294 32.293 32.294-14.486 32.294-32.293S50.951 2.471 33.144 2.471zm104.519 0c-17.807 0-32.294 14.487-32.294 32.294s14.487 32.293 32.294 32.293 32.297-14.486 32.297-32.293-14.483-32.294-32.297-32.294zm106.21 64.588c17.804 0 32.294-14.486 32.294-32.293S261.689 2.471 243.873 2.471s-32.294 14.487-32.294 32.294 14.489 32.294 32.294 32.294zM32.3 170.539c17.807 0 32.297-14.483 32.297-32.293s-14.49-32.297-32.297-32.297S0 120.436 0 138.246s14.493 32.293 32.3 32.293zm104.519 0c17.804 0 32.294-14.483 32.294-32.293s-14.478-32.297-32.294-32.297-32.294 14.486-32.294 32.297 14.487 32.293 32.294 32.293zm106.219 0c17.811 0 32.294-14.483 32.294-32.293s-14.483-32.297-32.294-32.297-32.306 14.486-32.306 32.297 14.49 32.293 32.306 32.293zM33.039 209.108c-17.807 0-32.3 14.483-32.3 32.294 0 17.804 14.493 32.293 32.3 32.293s32.293-14.482 32.293-32.293-14.486-32.294-32.293-32.294zm104.525 0c-17.808 0-32.3 14.483-32.3 32.294 0 17.804 14.487 32.293 32.3 32.293 17.804 0 32.293-14.482 32.293-32.293s-14.489-32.294-32.293-32.294zm106.207 0c-17.804 0-32.294 14.483-32.294 32.294 0 17.804 14.49 32.293 32.294 32.293 17.811 0 32.294-14.482 32.294-32.293s-14.49-32.294-32.294-32.294z"/></svg>
</button> 
            <div id="app-dropdown" className="dropdown-menu dropdown-menu-end dropdown-menu-card" aria-labelledby="navbarDropdownMenu" data-bs-popper="none">
                  <div className="card shadow-none">
                    <div className="scrollbar-overlay navbar-dropdown-dots os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-overflow os-host-overflow-y" style={{overflow: 'scroll !important', overflowY: 'scroll'}}><div className="os-resize-observer-host observed"><div className="os-resize-observer" ></div></div><div className="os-size-auto-observer observed" ><div className="os-resize-observer"></div></div><div className="os-content-glue" ></div><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible" ><div className="os-content" >
                      <div className="card-body px-3">
                        <div className="row text-center gx-0 gy-0">
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="/profile" target="_blank">
                              <div className="avatar avatar-2xl"> <Avatar
                  size="large"
                  src={userAvatar || undefined}
                  alt="avatar"
                  className="rounded-circle"
                /></div>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Account</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="https://algorand.com/" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/algorand-logo.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Algorand</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="https://mailbluster.com/" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/mailbluster.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Mailbluster</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/google.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Google</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/spotify.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Spotify</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/steam.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Steam</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/github-light.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Github</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/discord.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Discord</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/xbox.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">xbox</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/trello.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Kanban</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/hp.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Hp</p>
                            </a></div>
                          <div className="col-12">
                            <hr className="my-3 mx-n3 bg-200"/>
                          </div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/linkedin.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Linkedin</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/twitter.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Twitter</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/facebook.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Facebook</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/instagram.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Instagram</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/pinterest.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Pinterest</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/slack.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Slack</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="#!" target="_blank"><img className="rounded" src="../../assets/img/nav-icons/deviantart.png" alt="" width="40" height="40"/>
                              <p className="mb-0 fw-medium  text-truncate fs--2 pt-1">Deviantart</p>
                            </a></div>
                          <div className="col-4"><a className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none" href="../../app/events/event-detail.html" target="_blank">
                              <div className="avatar avatar-2xl">
                                <div className="avatar-name rounded-circle bg-soft-primary text-primary"><span className="fs-2">E</span></div>
                              </div>
                              <p className="mb-0 fw-medium  text-truncate fs--2">Events</p>
                            </a></div>
                          <div className="col-12"><a className="btn btn-outline-primary btn-sm mt-4" href="#!">Show more</a></div>
                        </div>
                      </div>
                    </div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" ></div></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" ></div></div></div><div className="os-scrollbar-corner"></div></div>
                  </div>
            </div>
            </div>      
        <div className="avatar-dropdown dropdown">
          <span
            className="user-dropdown"
            data-toggle="dropdown"
          >
            <div className="user-dropdown-content">
              <span className="user-dropdown-avatar">
                <Avatar
                  size="medium"
                  src={userAvatar || undefined}
                  alt="avatar"
                />
              </span>
              <span className="user-dropdown-text">
                <span>{userText}</span>{' '}
                {!currentUserIsSuperadmin && ['multi', 'multi-with-subdomain'].includes(
                  config.tenantMode,
                ) && (
                    <span className="user-dropdown-text-tenant">
                      {currentTenant && currentTenant.name}
                    </span>
                  )}
                {currentUserIsSuperadmin && (
                  <span className="user-dropdown-text-superadmin">
                    {i18n('roles.superadmin.label')}
                  </span>
                )}
              </span>
            </div>
          </span>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="bg-white dark__bg-1000 rounded-2 py-2 m-25">
              <Link to='/profile'>
                <button
                  className="dropdown-item"
                  type="button"
                >
                  <i className="fas fa-user" />{' '}
                  {i18n('auth.profile.title')}
                </button>
              </Link>
              <Link to="/password-change">
                <button
                  className="dropdown-item"
                  type="button"
                >
                  <i className="fas fa-lock" />{' '}
                  {i18n('auth.passwordChange.title')}
                </button>
              </Link>
              {!currentUserIsSuperadmin && ['multi', 'multi-with-subdomain'].includes(
                config.tenantMode,
              ) && (
                  <Link to="/tenant">
                    <button
                      className="dropdown-item"
                      type="button"
                    >
                      <i className="fas fa-th-large" />{' '}
                      {i18n('auth.tenants')}
                    </button>
                  </Link>
                )}
              {config.apiDocumentationUrl && (
                <a
                  href={config.apiDocumentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button
                    className="dropdown-item"
                    type="button"
                  >
                    <i className="fas fa-code" />{' '}
                    {i18n('api.menu')}
                  </button>
                </a>
              )}
              <div className="dropdown-divider"></div>
              <DarkMode />
              <button
                onClick={doSignout}
                className="dropdown-item"
                type="button"
              >
                <i className="fas fa-sign-out-alt" />{' '}
                {i18n('auth.signout')}
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
