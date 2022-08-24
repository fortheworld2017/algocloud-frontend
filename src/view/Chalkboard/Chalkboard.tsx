import React from 'react';

const DashboardPage = (props) => { 
  return (
    <>
    <div className="row">
  <div className="col-lg-6">
    <div className="kanban-items-container border bg-white dark__bg-1000 rounded-2 py-3 mb-3" 
    style={{maxHeight: "none"}}>
      <div className="card mb-3 kanban-item shadow-sm dark__bg-1100">
        <div className="card-body">
          <p className="fs--1 fw-medium font-sans-serif mb-0">Add a cookie notice which will be shown in the bottom of the page and have a link of &quot;Privacy Policy&quot;</p>
        </div>
      </div>
      <div className="card mb-3 kanban-item shadow-sm dark__bg-1100">
        <div className="card-body">
          <p className="fs--1 fw-medium font-sans-serif mb-0">Add a pdf file that describes all the symptoms of COVID-19</p>
        </div>
      </div>
      <div className="card mb-3 kanban-item shadow-sm dark__bg-1100">
        <div className="card-body">
          <p className="fs--1 fw-medium font-sans-serif mb-0">Make a Registration form that include Name, Email and a Password input field</p>
        </div>
      </div>
      <div className="card mb-3 kanban-item shadow-sm dark__bg-1100">
        <div className="card-body">
          <p className="fs--1 fw-medium font-sans-serif mb-0">Update profile page layout with cover image and user setting menu</p>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="kanban-items-container border bg-white dark__bg-1000 rounded-2 py-3 mb-3"
    style={{maxHeight: "none"}}>
      <div className="card mb-3 kanban-item shadow-sm dark__bg-1100">
        <div className="card-body">
          <p className="fs--1 fw-medium font-sans-serif mb-0">Update all the npm packages and also remove the outdated plugins</p>
        </div>
      </div>
      <div className="card mb-3 kanban-item shadow-sm dark__bg-1100">
        <div className="card-body">
          <p className="fs--1 fw-medium font-sans-serif mb-0">Add a getting started page that allows users to see the starting process</p>
        </div>
      </div>
      <div className="card mb-3 kanban-item shadow-sm dark__bg-1100">
        <div className="card-body">
          <p className="fs--1 fw-medium font-sans-serif mb-0">Review and test all the task and deploy to the server</p>
        </div>
      </div>
      <div className="card mb-3 kanban-item shadow-sm dark__bg-1100">
        <div className="card-body">
          <p className="fs--1 fw-medium font-sans-serif mb-0">Get all the data by API call and show them to the landing page by adding a new section</p>
        </div>
      </div>
    </div>
  </div>
</div>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    <div className="alert alert-success border-2 d-flex align-items-center" role="alert">
  <div className="bg-success me-3 icon-item"><span className="fas fa-check-circle text-white fs-3"></span></div>
  <p className="mb-0 flex-1">A simple success alert—check it out!</p><button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div className="alert alert-info border-2 d-flex align-items-center" role="alert">
  <div className="bg-info me-3 icon-item"><span className="fas fa-info-circle text-white fs-3"></span></div>
  <p className="mb-0 flex-1">A simple info alert—check it out!</p><button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div className="alert alert-warning border-2 d-flex align-items-center" role="alert">
  <div className="bg-warning me-3 icon-item"><span className="fas fa-exclamation-circle text-white fs-3"></span></div>
  <p className="mb-0 flex-1">A simple warning alert—check it out!</p><button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div className="alert alert-danger border-2 d-flex align-items-center" role="alert">
  <div className="bg-danger me-3 icon-item"><span className="fas fa-times-circle text-white fs-3"></span></div>
  <p className="mb-0 flex-1">A simple danger alert—check it out!</p><button className="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    <div className="crayons-snackbar__item flex" data-testid="snackbar">
  <div className="crayons-snackbar__body" role="alert">
    File uploaded successfully
  </div>
  <div className="crayons-snackbar__actions"></div>
</div> 
<div className="crayons-snackbar__item flex " data-testid="snackbar">
  <div className="crayons-snackbar__body" role="alert">Changes saved</div>
  <div className="crayons-snackbar__actions">
    <button
      className="crayons-btn crayons-btn--ghost-success crayons-btn--inverted"
      type="button"
    >
      Dismiss
    </button>
  </div>
</div>
<div className="crayons-notice crayons-notice--success"> 
  This is Success Notice content.
</div>
      <div
        style={{
          padding: 0,
        }}
      >
          <div className="mb-3 card"><div className="bg-holder bg-card"></div><div className="position-relative card-body"><div className="row"><div className="col-lg-8"><h6 className="text-600">Free for 30 days</h6><h2 className="mb-0">For teams of all sizes, in the cloud</h2><p className="mt-2">Get the power, control, and customization you need to manage your</p> <p className="d-none.d-md-block"> team’s and organization’s projects.</p><a className="btn btn-sm btn-link ps-0" href="/pricing/pricing-default#!">Have questions? Chat with us</a><button
  className="c-pill crayons-tooltip__activator"
  type="button"
  aria-disabled="false"
>
  Hello world
  <span data-testid="tooltip" className="crayons-tooltip__content">
    Tooltip content...
  </span>
</button></div></div></div></div>
          <div className="bg-light my-3 card"><div className="p-3 card-body"><p className="fs--1 mb-0"><a href="/dashboard/saas#!">          
          <svg className="svg-inline--fa fa-exchange-alt fa-w-16 me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exchange-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><g transform="translate(256 256)"><g transform="translate(0, 0)  scale(1, 1)  rotate(90 0 0)"><path fill="currentColor" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z" transform="translate(-256 -256)"></path></g></g></svg>               A payout for <strong>$921.42 </strong> was deposited 13 days ago.</a> Your next deposit is expected on <strong>Tuesday, March 13.</strong></p></div></div> 
        <div className="row no-gutters">
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className=""
          >
              <div className="g-3 mb-3 row"><div className="col-md-4 col-sm-6"><div className="overflow-hidden card" ><div className="bg-holder bg-card"></div><div className="position-relative card-body"><h6>Customers<div className="ms-2 badge badge-soft-warning rounded-pill">-0.23%</div></h6><div className="text-warning display-4 fs-4 mb-2 fw-normal font-sans-serif"><span>58.39k</span></div><a className="fw-semi-bold fs--1 text-nowrap" href="/e-commerce/customers">See all
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8 ms-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" ><g transform="translate(128 256)"><g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" transform="translate(-128 -256)"></path></g></g></svg></a></div></div></div><div className="col-md-4 col-sm-6"><div className="overflow-hidden card" ><div className="bg-holder bg-card"></div> <div className="position-relative card-body"><h6>Orders<div className="ms-2 badge badge-soft-info rounded-pill">0.0%</div></h6><div className="text-info display-4 fs-4 mb-2 fw-normal font-sans-serif"><span>23.43k</span></div><a className="fw-semi-bold fs--1 text-nowrap" href="/e-commerce/orders/order-list">All orders<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8 ms-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" ><g transform="translate(128 256)"><g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" transform="translate(-128 -256)"></path></g></g></svg>
          </a></div></div></div><div className="col-md-4 col-sm-12"><div className="overflow-hidden card" ><div className="bg-holder bg-card" ></div><div className="position-relative card-body"><h6>Revenue<div className="ms-2 badge badge-soft-success rounded-pill">9.54%</div></h6><div className="display-4 fs-4 mb-2 fw-normal font-sans-serif"><span>$43,594</span></div><a className="fw-semi-bold fs--1 text-nowrap" href="/">Statistics
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8 ms-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" ><g transform="translate(128 256)"><g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" transform="translate(-128 -256)"></path></g></g></svg>
          </a></div></div></div></div>

          <div className="row g-3 mb-3">
            <div className="col-xxl-6 col-lg-12">
              <div className="card h-100">
                <div className="bg-holder bg-card" ></div>
                <div className="card-header z-index-1">
                  <h5 className="text-primary">Welcome to AlgoCloud! </h5>
                  <h6 className="text-600">Here are some quick links for you to start </h6>
                </div>
                <div className="card-body z-index-1">
                  <div className="row g-2 h-100 align-items-end">
                    <div className="col-sm-6 col-md-5">
                      <div className="d-flex position-relative">
                        <div className="icon-item icon-item-sm border rounded-3 shadow-none me-2">
                          <svg className="svg-inline--fa fa-chess-rook fa-w-12 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chess-rook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M368 32h-56a16 16 0 0 0-16 16v48h-48V48a16 16 0 0 0-16-16h-80a16 16 0 0 0-16 16v48H88.1V48a16 16 0 0 0-16-16H16A16 16 0 0 0 0 48v176l64 32c0 48.33-1.54 95-13.21 160h282.42C321.54 351 320 303.72 320 256l64-32V48a16 16 0 0 0-16-16zM224 320h-64v-64a32 32 0 0 1 64 0zm144 128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
                          </div>
                        <div className="flex-1"><a className="stretched-link" href="#!">
                            <h6 className="text-800 mb-0">General</h6>
                          </a>
                          <p className="mb-0 fs--2 text-500">Customize with a few clicks</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-5">
                      <div className="d-flex position-relative">
                        <div className="icon-item icon-item-sm border rounded-3 shadow-none me-2">
                       
                          <svg className="svg-inline--fa fa-crown fa-w-20 text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path></svg>
                          </div>
                        <div className="flex-1"><a className="stretched-link" href="#!">
                            <h6 className="text-800 mb-0">Upgrade to pro</h6>
                          </a>
                          <p className="mb-0 fs--2 text-500">Try Pro for 14 days free! </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-5">
                      <div className="d-flex position-relative">
                        <div className="icon-item icon-item-sm border rounded-3 shadow-none me-2">
                          <svg className="svg-inline--fa fa-video fa-w-18 text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path></svg>
                          </div>
                        <div className="flex-1"><a className="stretched-link" href="#!">
                            <h6 className="text-800 mb-0">Create a meeting</h6>
                          </a>
                          <p className="mb-0 fs--2 text-500">Manage and update your meetings</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-5">
                      <div className="d-flex position-relative">
                        <div className="icon-item icon-item-sm border rounded-3 shadow-none me-2">
                          <svg className="svg-inline--fa fa-user fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                          </div>
                        <div className="flex-1"><a className="stretched-link" href="#!">
                            <h6 className="text-800 mb-0">Members activity</h6>
                          </a>
                          <p className="mb-0 fs--2 text-500">Monitor activity and supervise</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="card h-100">
                <div className="card-header d-flex flex-between-center">
                  <h5 className="mb-0">Team Progress</h5><a className="btn btn-link btn-sm px-0" href="#!">Report
                  
                  <svg className="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                  
                  </a>
                </div>
                
                <div className="card-body">
                  <p className="fs--1 text-600">See team members' time worked, activity levels, and progress</p>
                  <div className="progress mb-3 rounded-pill" >
<div className="progress-bar bg-progress-gradient rounded-pill" role="progressbar" ></div>
                  </div>
                  <p className="mb-0 text-primary">75% completed</p>
                  <p className="mb-0 fs--2 text-500">Jan 1st to 30th</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="card h-100">
                <div className="card-header pb-0">
                  <div className="row">
                    <div className="col">
                      <p className="mb-1 fs--2 text-500">Upcoming schedule</p>
                      <h5 className="text-primary fs-0">AlgoCloud discussion</h5>
                    </div>
                    <div className="col-auto">
                    <div
            style={{
              width: '60px',
              height: '60px',
            }}>
                      <div className="bg-soft-primary px-3 py-3 rounded-circle text-center">
                        <h5 className="text-primary mb-0 d-flex flex-column mt-n1"><span>09</span><small className="text-primary fs--2 lh-1">MAR</small></h5>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body d-flex align-items-end">
                  <div className="row g-3 justify-content-between">
                    <div className="col-10 mt-0">
                      <p className="fs--1 text-600 mb-0">The very first general meeting for planning AlgoCloud’s design and development roadmap</p>
                    </div>
                    <div className="col-auto"><button className="btn btn-success w-100 fs--1" type="button">

                      <svg className="svg-inline--fa fa-video fa-w-18 me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path></svg>
                      Join meeting</button></div>
                    <div className="col-auto ps-0">
                      <div className="avatar-group avatar-group-dense">
                        <div className="avatar avatar-xl border border-3 border-light rounded-circle">
                        </div>
                        <div className="avatar avatar-xl border border-3 border-light rounded-circle">
                        </div>
                        <div className="avatar avatar-xl border border-3 border-light rounded-circle">
                        </div>
                        <div className="avatar avatar-xl border border-3 border-light rounded-circle">
                          <div className="avatar-name rounded-circle "><span>+50</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            
            
          <div className="card">
                <div className="bg-holder bg-card"></div>
                <div className="card-body position-relative">
                  <div className="row g-2 align-items-sm-center">
                    <div className="col-auto"><img alt="" height="55"/></div>
                    <div className="col">
                      <div className="row align-items-center">
                        <div className="col col-lg-8">
                          <h5 className="fs-0 mb-3 mb-sm-0 text-primary">Connect your domain to your website and get things done faster with AlgoCloud</h5>
                        </div>
                        <div className="col-12 col-sm-auto ms-auto"><button className="btn btn-algocloud-primary" type="button">Connect</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-md-6 col-xxl-4">
              <div className="card h-100">
                <div className="card-header">
                  <div className="d-flex align-items-center"><img className="me-2"  alt="" height="35"/>
                    <h5 className="fs-0 fw-normal text-800 mb-0">Ask AlgoCloud Intelligence</h5>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="scrollbar-overlay pt-0 px-card ask-analytics os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
                    <div className="os-resize-observer-host observed"><div className="os-resize-observer"></div></div><div className="os-size-auto-observer observed" ><div className="os-resize-observer"></div></div><div className="os-content-glue" ></div><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible"><div className="os-content">
                    <div className="border border-1 border-300 rounded-2 p-3 ask-analytics-item position-relative mb-3">
                      <div className="d-flex align-items-center mb-3"><svg className="svg-inline--fa fa-code-branch fa-w-12 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code-branch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path></svg><a className="stretched-link text-decoration-none" href="#!">
                          <h5 className="fs--1 text-600 mb-0 ps-3">Content Analysis</h5>
                        </a></div>
                      <h5 className="fs--1 text-800">Which landing pages with over 10 sessions have the worst bounce rates?</h5>
                    </div>
                    <div className="border border-1 border-300 rounded-2 p-3 ask-analytics-item position-relative mb-3">
                      <div className="d-flex align-items-center mb-3"><svg className="svg-inline--fa fa-bug fa-w-16 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"></path></svg><a className="stretched-link text-decoration-none" href="#!">
                          <h5 className="fs--1 text-600 mb-0 ps-3">Technical performance</h5>
                        </a></div>
                      <h5 className="fs--1 text-800">Show me a trend of my average page load time over the last 3 months</h5>
                    </div>
                    <div className="border border-1 border-300 rounded-2 p-3 ask-analytics-item position-relative mb-3">
                      <div className="d-flex align-items-center mb-3"><svg className="svg-inline--fa fa-project-diagram fa-w-20 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="project-diagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path></svg><a className="stretched-link text-decoration-none" href="#!">
                          <h5 className="fs--1 text-600 mb-0 ps-3">Technical performance</h5>
                        </a></div>
                      <h5 className="fs--1 text-800">What are my top default channel groupings by user?</h5>
                    </div>
                    <div className="border border-1 border-300 rounded-2 p-3 ask-analytics-item position-relative mb-3">
                      <div className="d-flex align-items-center mb-3"><svg className="svg-inline--fa fa-map-marker-alt fa-w-12 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg><a className="stretched-link text-decoration-none" href="#!">
                          <h5 className="fs--1 text-600 mb-0 ps-3">Geographic Analysis</h5>
                        </a></div>
                      <h5 className="fs--1 text-800">What pages do people from California go to the most?</h5>
                    </div>
                  </div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" ></div></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle"></div></div></div><div className="os-scrollbar-corner"></div></div>
                </div>
                <div className="card-footer bg-light text-end me-1 py-2"><a className="btn btn-link btn-sm px-0 fw-medium" href="#!">More Insights<svg className="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></a></div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4">
              <div className="card h-100">
                <div className="card-header">
                  <div className="d-flex align-items-center"><img className="me-2"  alt="" height="35"/>
                    <h5 className="fs-0 fw-normal text-800 mb-0">Ask AlgoCloud Intelligence</h5>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="scrollbar-overlay pt-0 px-card ask-analytics os-host os-theme-dark os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
                    <div className="os-resize-observer-host observed"><div className="os-resize-observer"></div></div><div className="os-size-auto-observer observed" ><div className="os-resize-observer"></div></div><div className="os-content-glue" ></div><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible"><div className="os-content">
                    <div className="border border-1 border-300 rounded-2 p-3 ask-analytics-item position-relative mb-3">
                      <div className="d-flex align-items-center mb-3"><svg className="svg-inline--fa fa-code-branch fa-w-12 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code-branch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path></svg><a className="stretched-link text-decoration-none" href="#!">
                          <h5 className="fs--1 text-600 mb-0 ps-3">Content Analysis</h5>
                        </a></div>
                      <h5 className="fs--1 text-800">Which landing pages with over 10 sessions have the worst bounce rates?</h5>
                    </div>
                    <div className="border border-1 border-300 rounded-2 p-3 ask-analytics-item position-relative mb-3">
                      <div className="d-flex align-items-center mb-3"><svg className="svg-inline--fa fa-bug fa-w-16 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"></path></svg><a className="stretched-link text-decoration-none" href="#!">
                          <h5 className="fs--1 text-600 mb-0 ps-3">Technical performance</h5>
                        </a></div>
                      <h5 className="fs--1 text-800">Show me a trend of my average page load time over the last 3 months</h5>
                    </div>
                    <div className="border border-1 border-300 rounded-2 p-3 ask-analytics-item position-relative mb-3">
                      <div className="d-flex align-items-center mb-3"><svg className="svg-inline--fa fa-project-diagram fa-w-20 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="project-diagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path></svg><a className="stretched-link text-decoration-none" href="#!">
                          <h5 className="fs--1 text-600 mb-0 ps-3">Technical performance</h5>
                        </a></div>
                      <h5 className="fs--1 text-800">What are my top default channel groupings by user?</h5>
                    </div>
                    <div className="border border-1 border-300 rounded-2 p-3 ask-analytics-item position-relative mb-3">
                      <div className="d-flex align-items-center mb-3"><svg className="svg-inline--fa fa-map-marker-alt fa-w-12 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg><a className="stretched-link text-decoration-none" href="#!">
                          <h5 className="fs--1 text-600 mb-0 ps-3">Geographic Analysis</h5>
                        </a></div>
                      <h5 className="fs--1 text-800">What pages do people from California go to the most?</h5>
                    </div>
                  </div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" ></div></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle"></div></div></div><div className="os-scrollbar-corner"></div></div>
                </div>
                <div className="card-footer bg-light text-end me-1 py-2"><a className="btn btn-link btn-sm px-0 fw-medium" href="#!">More Insights<svg className="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs--2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></a></div>
              </div>
            </div>
            </div>
      </div>
    </>
  );
};

export default DashboardPage;
