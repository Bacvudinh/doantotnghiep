import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";



type Props = {};
type Order = {
  id: string;
  user: string;
  quantity: number;
  total: number;
  payment: "COD" | "ZaloPay";
  paymentStatus: string;
  status: "Chờ xác nhận" | "Đang kiểm tra" | "Thành công" | "Thất bại";
};

const ordersData: Order[] = [
  {
    id: "ZAC55UKUW67Q",
    user: "Duy Trọng Bùi",
    quantity: 1,
    total: 467555,
    payment: "COD",
    paymentStatus: "Thanh toán khi nhận",
    status: "Chờ xác nhận",
  },
  {
    id: "VMYEUEMBS9H",
    user: "Duy Trọng Bùi",
    quantity: 1,
    total: 913110,
    payment: "ZaloPay",
    paymentStatus: "Chờ thanh toán",
    status: "Thất bại",
  },
  {
    id: "L8BSL00GYUNA",
    user: "Duy Trọng Bùi",
    quantity: 1,
    total: 1022000,
    payment: "COD",
    paymentStatus: "Thanh toán khi nhận",
    status: "Chờ xác nhận",
  },
];

const statusOptions: Order["status"][] = [
  "Chờ xác nhận",
  "Đang kiểm tra",
  "Thành công",
  "Thất bại",
];

const OrderList = (props: Props) => {
  const [orders, setOrders] = useState<Order[]>(ordersData);

  const handleStatusChange = (id: string, newStatus: Order["status"]) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };
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
                    <h3>Danh sách đơn hàng</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="list-product-header">
                        <div className="collapse" id="collapseProduct">
                          <div className="card card-body list-product-body">
                            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="left-header main-sub-header p-0 ">
                        <div className="left-menu-header">
                          <ul className="header-left">
                            <li>
                              {" "}
                              <span className="f-w-700">Trạng thái </span>
                            </li>
                            <li>
                              {" "}
                              <span className="f-w-700">Khiếu nại </span>
                            </li>
                            <li>
                              {" "}
                              <span className="f-w-700">Hoàn tiền </span>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                      <div className="list-product">
                        <div className="left-header main-sub-header pt-4">
                          <div className="left-menu-header">
                            <ul className="header-left">
                              <li>
                                {" "}
                                <span className="f-w-700">Tất cả </span>
                              </li>
                              <li>
                                {" "}
                                <span className="f-w-700">Đang chờ duyệt </span>
                              </li>
                              <li>
                                {" "}
                                <span className="f-w-700">Thành Công </span>
                              </li>
                              <li>
                                {" "}
                                <span className="f-w-700">Hủy </span>
                              </li>
                            
                            </ul>
                          </div>
                        </div>
                        <table className="table" id="project-status">
                          <thead>
                            <tr>
                              <th>
                                {" "}
                                <span className="f-light f-w-600">
                                  Mã đơn hàng
                                </span>
                              </th>
                              <th>
                                {" "}
                                <span className="f-light f-w-600">
                                  Tên người dùng
                                </span>
                              </th>
                              <th>
                                {" "}
                                <span className="f-light f-w-600">
                                  Số sản phẩm
                                </span>
                              </th>
                              <th>
                                {" "}
                                <span className="f-light f-w-600">
                                  Tổng tiền (đ)
                                </span>
                              </th>
                              <th>
                                {" "}
                                <span className="f-light f-w-600">
                                  Thanh toán
                                </span>
                              </th>
                              <th>
                                {" "}
                                <span className="f-light f-w-600">
                                  Trạng thái thanh toán
                                </span>
                              </th>
                              <th>
                                {" "}
                                <span className="f-light f-w-600">
                                  Trạng thái
                                </span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map((order) => (
                              <tr key={order.id} className="border-t">
                                <td className="p-3">{order.id}</td>
                                <td>
                                  <div className="product-names">
                                    <div className="light-product-box"></div>
                                    <p>{order.user}</p>
                                  </div>
                                </td>
                                <td className="f-light">{order.quantity}</td>
                                <td className="f-light">
                                  {order.total.toLocaleString("vi-VN")} đ
                                </td>
                                <td className="f-light">
                                  {order.payment === "COD" ? (
                                    <span className="text-green-600 font-semibold">
                                      COD
                                    </span>
                                  ) : (
                                    <span className="text-blue-500 font-semibold">
                                      ZaloPay
                                    </span>
                                  )}
                                </td>
                                <td className="f-light">
                                  {order.paymentStatus}
                                </td>
                                <td className="f-light">
                                  <select
                                    value={order.status}
                                    onChange={(e) =>
                                      handleStatusChange(
                                        order.id,
                                        e.target.value as Order["status"]
                                      )
                                    }
                                    className="border rounded px-2 py-1 f-light"
                                  >
                                    {statusOptions.map((status) => (
                                      <option key={status} value={status}>
                                        {status}
                                      </option>
                                    ))}
                                  </select>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 p-0 footer-copyright">
                  <p className="mb-0">
                    Copyright 2024 © Zono theme by pixelstrap.
                  </p>
                </div>
                <div className="col-md-6 p-0">
                  <p className="heart mb-0">
                    Hand crafted &amp; made with
                    <svg className="footer-icon">
                      <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#heart" />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
