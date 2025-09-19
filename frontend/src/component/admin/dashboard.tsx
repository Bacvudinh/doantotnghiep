import React from "react";

import Footer from "./Footer/Footer";


import Charts from "./Charts/Charts";
import OrderTable from "./OrdersTable/OrderTable";
import SideBar from "./SideBar/SideBar";


const Dashboard = () => {
  return (
    <div>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <div className="page-header">
          <div className="header-wrapper row m-0">
            <div className="header-logo-wrapper col-auto p-0">
              <div className="logo-wrapper">
                <a href="index.html">
                  {" "}
                  <img
                    className="img-fluid for-light"
                    src="../assets/images/logo/logo.png"
                  />
                  <img
                    className="img-fluid for-dark"
                    src="../assets/images/logo/logo_dark.png"
                  />
                </a>
              </div>
              <div className="toggle-sidebar">
                <svg className="sidebar-toggle">
                  <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-animation" />
                </svg>
              </div>
            </div>
            <form
              className="col-sm-4 form-inline search-full d-none d-xl-block"
              action="#"
              method="get"
            >
              <div className="form-group">
                <div className="Typeahead Typeahead--twitterUsers">
                  <div className="u-posRelative">
                    <input
                      className="demo-input Typeahead-input form-control-plaintext w-100"
                      type="text"
                      placeholder="Type to Search .."
                      name="q"
                    />
                    <svg className="search-bg svg-color">
                      <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#search" />
                    </svg>
                  </div>
                </div>
              </div>
            </form>
            <div className="nav-right col-xl-8 col-lg-12 col-auto pull-right right-header p-0">
              <ul className="nav-menus">
                <li className="serchinput">
                  <div className="serchbox">
                    <svg>
                      <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#search" />
                    </svg>
                  </div>
                  <div className="form-group search-form">
                    <input type="text" placeholder="Search here..." />
                  </div>
                </li>
                
                <li className="profile-nav onhover-dropdown pe-0 py-0">
                  <div className="d-flex align-items-center profile-media">
                    <img
                      className="b-r-25"
                      src="../assets/images/dashboard/profile.png"
                    />
                    <div className="flex-grow-1 user">
                      <span>Helen Walter</span>
                      <p className="mb-0 font-nunito">
                        Admin
                        <svg>
                          <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#header-arrow-down" />
                        </svg>
                      </p>
                    </div>
                  </div>
                  <ul className="profile-dropdown onhover-show-div">
                    <li>
                      <a href="user-profile.html">
                        <i data-feather="user" />
                        <span>Account </span>
                      </a>
                    </li>
                    <li>
                      <a href="letter-box.html">
                        <i data-feather="mail" />
                        <span>Inbox</span>
                      </a>
                    </li>
                    <li>
                      <a href="task.html">
                        <i data-feather="file-text" />
                        <span>Taskboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="edit-profile.html">
                        <i data-feather="settings" />
                        <span>Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="login.html">
                        {" "}
                        <i data-feather="log-in" />
                        <span>Log Out</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="page-body-wrapper">
          <div className="sidebar-wrapper" data-layout="stroke-svg">
            <div>
              <div className="logo-wrapper">
                <a href="index.html">
                  {" "}
                  <img
                    className="img-fluid for-light"
                    src="../assets/images/logo/logo.png"
                  />
                  <img
                    className="img-fluid for-dark"
                    src="../assets/images/logo/logo_dark.png"
                  />
                </a>
                <div className="toggle-sidebar">
                  <svg className="sidebar-toggle">
                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#toggle-icon" />
                  </svg>
                </div>
              </div>
              <div className="logo-icon-wrapper">
                <a href="index.html">
                  <img
                    className="img-fluid"
                    src="../assets/images/logo/logo-icon.png"
                  />
                </a>
              </div>
              <div className="sidebar">
                <SideBar></SideBar>
              </div>
            </div>
          </div>
          <div className="page-body">
            <div className="container-fluid">
              <div className="page-title">
                <div className="row">
                  <div className="col-xl-4 col-sm-7 box-col-3">
                    <h3>Thống kê </h3>
                  </div>
                  <div className="col-5 d-none d-xl-block">
                   
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="container-fluid default-dashboard">
              <div className="row">
                <div className="">
                  <div className="card latest-sales">
                  
                    <div className="card-body">
                      <div id="lastOrdersChart" />
                      {/* <SalesChart></SalesChart> */}
                      <div className="header">
                        <div>
                          <select>
                            <option>Tháng này</option>
                            <option>Tháng trước</option>
                          </select>
                          {/* Đơn giao hàng */}
                          <h3>Trạng thái</h3>
                          <div className="grid grid-5">
                            <div className="card">
                              <span className="value blue">0</span>
                              <span className="label">Đang chờ thanh toán</span>
                            </div>
                            <div className="card">
                              <span className="value blue">2</span>
                              <span className="label">Đang chờ xử lý</span>
                            </div>
                            <div className="card">
                              <span className="value blue">0</span>
                              <span className="label">Đang vận chuyển</span>
                            </div>
                            <div className="card">
                              <span className="value blue">0</span>
                              <span className="label">
                                Giao hàng thành công
                              </span>
                            </div>
                            <div className="card">
                              <span className="value blue">0</span>
                              <span className="label">Hoàn thành đơn hàng</span>
                            </div>
                            <div className="card">
                              <span className="value blue">1</span>
                              <span className="label">Đơn bị hủy</span>
                            </div>
                          </div>
                          {/* Khiếu nại */}
                          <h3>Khiếu nại</h3>
                          <div className="grid grid-4">
                            <div className="card">
                              <span className="value red">0</span>
                              <span className="label">Khiếu nại chờ xử lý</span>
                            </div>
                            <div className="card">
                              <span className="value red">0</span>
                              <span className="label">Đang hoàn trả hàng</span>
                            </div>
                            <div className="card">
                              <span className="value red">0</span>
                              <span className="label">
                                Hoàn trả hàng thành công
                              </span>
                            </div>
                            <div className="card">
                              <span className="value red">0</span>
                              <span className="label">Đang đổi trả hàng</span>
                            </div>
                            <div className="card">
                              <span className="value red">0</span>
                              <span className="label">
                                Đổi trả hàng thành công
                              </span>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      
                      <Charts></Charts>
                      <OrderTable></OrderTable>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
