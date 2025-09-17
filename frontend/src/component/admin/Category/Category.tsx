import React from 'react'

import { Link } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'

type Props = {}

const Category = (props: Props) => {
  return (
    <div>
          <div className="page-wrapper compact-wrapper" id="pageWrapper">
  <div className="page-header">
    <div className="header-wrapper row m-0">
      <div className="header-logo-wrapper col-auto p-0">
        <div className="logo-wrapper"><a href="index.html"> <img className="img-fluid for-light" src="../assets/images/logo/logo.png" /><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png"  /></a></div>
        <div className="toggle-sidebar">
          <svg className="sidebar-toggle"> 
            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-animation" />
          </svg>
        </div>
      </div>
      <form className="col-sm-4 form-inline search-full d-none d-xl-block" action="#" method="get">
        <div className="form-group">
          <div className="Typeahead Typeahead--twitterUsers">
            <div className="u-posRelative">
              <input className="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder="Type to Search .." name="q"  />
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
            <div className="d-flex align-items-center profile-media"><img className="b-r-25" src="../assets/images/dashboard/profile.png"  />
              <div className="flex-grow-1 user"><span>Helen Walter</span>
                <p className="mb-0 font-nunito">Admin 
                  <svg>
                    <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#header-arrow-down" />
                  </svg>
                </p>
              </div>
            </div>
            <ul className="profile-dropdown onhover-show-div">
              <li><a href="user-profile.html"><i data-feather="user" /><span>Account </span></a></li>
              <li><a href="letter-box.html"><i data-feather="mail" /><span>Inbox</span></a></li>
              <li><a href="task.html"><i data-feather="file-text" /><span>Taskboard</span></a></li>
              <li><a href="edit-profile.html"><i data-feather="settings" /><span>Settings</span></a></li>
              <li><a href="login.html"> <i data-feather="log-in" /><span>Log Out</span></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="page-body-wrapper"> 

    <div className="sidebar-wrapper" data-layout="stroke-svg">
      <div>
        <div className="logo-wrapper"><a href="index.html"> <img className="img-fluid for-light" src="../assets/images/logo/logo.png" /><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png"  /></a>
          <div className="toggle-sidebar">
            <svg className="sidebar-toggle"> 
              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#toggle-icon" />
            </svg>
          </div>
        </div>
        <div className="logo-icon-wrapper"><a href="index.html"><img className="img-fluid" src="../assets/images/logo/logo-icon.png" /></a></div>
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
              <h3>Danh sách tầng</h3>
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
                  <div> 
                    
                    <Link to={`/add-category`}><a className="btn btn-primary" href=""><i className="fa fa-plus" />Thêm tầng</a></Link>
                  </div>
                  <div className="collapse" id="collapseProduct">
                    <div className="card card-body list-product-body">
                      <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 g-3"> 
                        <div className="col"> 
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Choose Product</option>
                            <option value={1}>Apple iphone 13 Pro</option>
                            <option value={2}>Wood Chair</option>
                            <option value={3}>M185 Compact Wireless Mouse</option>
                          </select>
                        </div>
                        <div className="col"> 
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Choose Category</option>
                            <option value={1}>Furniture</option>
                            <option value={2}>Smart Gadgets</option>
                            <option value={3}>Electrics</option>
                          </select>
                        </div>
                        <div className="col"> 
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Choose Sub Category</option>
                            <option value={1}>Smart Phones</option>
                            <option value={2}>Smart Watches</option>
                            <option value={3}>Wireless headphone</option>
                          </select>
                        </div>
                        <div className="col"> 
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Status</option>
                            <option value={1}>Sold Out </option>
                            <option value={2}>In Stock</option>
                            <option value={3}>Pre Order</option>
                            <option value={4}>Limited Stock </option>
                          </select>
                        </div>
                        <div className="col"> 
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Price</option>
                            <option value={1}>56000.00</option>
                            <option value={2}>19000.00</option>
                            <option value={3}>10000.00</option>
                            <option value={3}>15000.00</option>
                            <option value={3}>99000.00</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-product">
                  <table className="table" id="project-status">
                    <thead> 
                      <tr> 
                        <th>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </th>
                        <th> <span className="f-light f-w-600">Product Name</span></th>
                        <th> <span className="f-light f-w-600">SKU</span></th>
                        <th> <span className="f-light f-w-600">Category</span></th>
                        <th> <span className="f-light f-w-600">Price</span></th>
                        <th> <span className="f-light f-w-600">Qty</span></th>
                        <th> <span className="f-light f-w-600">Status</span></th>
                        <th> <span className="f-light f-w-600">Rating</span></th>
                        <th> <span className="f-light f-w-600">Action</span></th>
                      </tr>
                    </thead>
                    <tbody> 
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/laptop.png" alt="laptop" /></div>
                            <p>Apple Desktop 2024</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">02145YK796</p>
                        </td>
                        <td> 
                          <p className="f-light">Laptops</p>
                        </td>
                        <td> 
                          <p className="f-light">56000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">13</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/phone.png" alt="phone" /></div>
                            <p>Apple iphone 13 Pro</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">56379FG3AW</p>
                        </td>
                        <td> 
                          <p className="f-light">Smart Phones  </p>
                        </td>
                        <td> 
                          <p className="f-light">19000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">48</p>
                        </td>
                        <td> <span className="badge badge-light-primary">In Stock</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/headphone.png" alt="headphones" /></div>
                            <p>Headphones</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">33KR5689B1</p>
                        </td>
                        <td> 
                          <p className="f-light">Smart Headphones     </p>
                        </td>
                        <td> 
                          <p className="f-light">10000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">5</p>
                        </td>
                        <td> 
                          <div className="badge badge-light-primary">In Stock</div>
                        </td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/wireless-headphone.png" alt="wireless headphone" /></div>
                            <p>wireless-headphone</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">AD6789HEY0</p>
                        </td>
                        <td> 
                          <p className="f-light">Smart Headphones       </p>
                        </td>
                        <td> 
                          <p className="f-light">15000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">4</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-2/product/1.png" alt="chair" /></div>
                            <p>Wood Chair</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">456DF78DFQ</p>
                        </td>
                        <td> 
                          <p className="f-light">Furniture       </p>
                        </td>
                        <td> 
                          <p className="f-light">99000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">2</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/email-template/3.png" alt="chairs" /></div>
                            <p>Wood Chair</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">5633GD3K54</p>
                        </td>
                        <td> 
                          <p className="f-light">Furniture     </p>
                        </td>
                        <td> 
                          <p className="f-light">1000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">8</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/ipad.png" alt="mac laptop" /></div>
                            <p>MacBook Air 13.3-inch</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">589KO8PPQ8</p>
                        </td>
                        <td> 
                          <p className="f-light">Laptops       </p>
                        </td>
                        <td> 
                          <p className="f-light">45000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">10</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/mouse.png" alt="mouse" /></div>
                            <p>M185 Compact Wireless Mouse</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">02145YK796</p>
                        </td>
                        <td> 
                          <p className="f-light">E-Commerce       </p>
                        </td>
                        <td> 
                          <p className="f-light">56000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">13</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /><i className="fa fa-star f-light" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/other-images/cart-img.jpg" alt="chairs" /></div>
                            <p>Wood chairs</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">568GH3LLQ2</p>
                        </td>
                        <td> 
                          <p className="f-light">Furniture </p>
                        </td>
                        <td> 
                          <p className="f-light">78000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">50</p>
                        </td>
                        <td> 
                          <div className="badge badge-light-primary">In Stock</div>
                        </td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/watch.png" alt="watch" /></div>
                            <p>Smart watch</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">58FR7K34F6</p>
                        </td>
                        <td> 
                          <p className="f-light">Electric       </p>
                        </td>
                        <td> 
                          <p className="f-light">25000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">48</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/dvd.png" alt="DVD" /></div>
                            <p>DVD</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">HG5667DFQ1</p>
                        </td>
                        <td> 
                          <p className="f-light">Electric    </p>
                        </td>
                        <td> 
                          <p className="f-light">5600.00</p>
                        </td>
                        <td> 
                          <p className="f-light">10</p>
                        </td>
                        <td> <span className="badge badge-light-primary">In Stock</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/speaker.png" alt="speakers" /></div>
                            <p>Speakers</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">02145YK796</p>
                        </td>
                        <td> 
                          <p className="f-light">Electric</p>
                        </td>
                        <td> 
                          <p className="f-light">12200.00</p>
                        </td>
                        <td> 
                          <p className="f-light">50</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/phone.png" alt="phone" /></div>
                            <p>Apple iphone 13 Pro</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">56379FG3AW</p>
                        </td>
                        <td> 
                          <p className="f-light">Smart Phones  </p>
                        </td>
                        <td> 
                          <p className="f-light">19000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">48</p>
                        </td>
                        <td> <span className="badge badge-light-primary">In Stock</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/headphone.png" alt="headphones" /></div>
                            <p>Headphones</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">33KR5689B1</p>
                        </td>
                        <td> 
                          <p className="f-light">Smart Headphones     </p>
                        </td>
                        <td> 
                          <p className="f-light">10000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">5</p>
                        </td>
                        <td> <span className="badge badge-light-primary">In Stock</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/other-images/cart-img.jpg" alt="chairs" /></div>
                            <p>Wood chairs</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">568GH3LLQ2</p>
                        </td>
                        <td> 
                          <p className="f-light">Furniture </p>
                        </td>
                        <td> 
                          <p className="f-light">78000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">50</p>
                        </td>
                        <td> <span className="badge badge-light-primary">In Stock</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/watch.png" alt="watch" /></div>
                            <p>Smart watch</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">58FR7K34F6</p>
                        </td>
                        <td> 
                          <p className="f-light">Electric       </p>
                        </td>
                        <td> 
                          <p className="f-light">25000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">48</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/phone.png" alt="phone" /></div>
                            <p>Apple iphone 13 Pro</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">56379FG3AW</p>
                        </td>
                        <td> 
                          <p className="f-light">Smart Phones  </p>
                        </td>
                        <td> 
                          <p className="f-light">19000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">48</p>
                        </td>
                        <td> <span className="badge badge-light-primary">In Stock</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/headphone.png" alt="headphones" /></div>
                            <p>Headphones</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">33KR5689B1</p>
                        </td>
                        <td> 
                          <p className="f-light">Smart Headphones     </p>
                        </td>
                        <td> 
                          <p className="f-light">10000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">5</p>
                        </td>
                        <td> <span className="badge badge-light-primary">In Stock</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/wireless-headphone.png" alt="wireless headphone" /></div>
                            <p>wireless-headphone</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">AD6789HEY0</p>
                        </td>
                        <td> 
                          <p className="f-light">Smart Headphones       </p>
                        </td>
                        <td> 
                          <p className="f-light">15000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">4</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-2/product/1.png" alt="chair" /></div>
                            <p>Wood Chair</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">456DF78DFQ</p>
                        </td>
                        <td> 
                          <p className="f-light">Furniture       </p>
                        </td>
                        <td> 
                          <p className="f-light">99000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">2</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/email-template/3.png" alt="chairs" /></div>
                            <p>Wood Chair</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">5633GD3K54</p>
                        </td>
                        <td> 
                          <p className="f-light">Furniture     </p>
                        </td>
                        <td> 
                          <p className="f-light">1000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">8</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/laptop.png" alt="laptop" /></div>
                            <p>Apple Desktop 2024</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">02145YK796</p>
                        </td>
                        <td> 
                          <p className="f-light">Laptops</p>
                        </td>
                        <td> 
                          <p className="f-light">56000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">13</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/phone.png" alt="phone" /></div>
                            <p>Apple iphone 13 Pro</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">56379FG3AW</p>
                        </td>
                        <td> 
                          <p className="f-light">Smart Phones  </p>
                        </td>
                        <td> 
                          <p className="f-light">19000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">48</p>
                        </td>
                        <td> <span className="badge badge-light-primary">In Stock</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/headphone.png" alt="headphones" /></div>
                            <p>Headphones</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">33KR5689B1</p>
                        </td>
                        <td> 
                          <p className="f-light">Smart Headphones     </p>
                        </td>
                        <td> 
                          <p className="f-light">10000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">5</p>
                        </td>
                        <td> <span className="badge badge-light-primary">In Stock</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-8/product-categories/wireless-headphone.png" alt="wireless headphone" /></div>
                            <p>wireless-headphone</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">AD6789HEY0</p>
                        </td>
                        <td> 
                          <p className="f-light">Smart Headphones       </p>
                        </td>
                        <td> 
                          <p className="f-light">15000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">4</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out </span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                      <tr className="product-removes">
                        <td>
                          <div className="form-check"> 
                            <input className="form-check-input checkbox-primary" type="checkbox" />
                          </div>
                        </td>
                        <td> 
                          <div className="product-names">
                            <div className="light-product-box"><img className="img-fluid" src="../assets/images/dashboard-2/product/1.png" alt="chair" /></div>
                            <p>Wood Chair</p>
                          </div>
                        </td>
                        <td> 
                          <p className="f-light">456DF78DFQ</p>
                        </td>
                        <td> 
                          <p className="f-light">Furniture       </p>
                        </td>
                        <td> 
                          <p className="f-light">99000.00</p>
                        </td>
                        <td> 
                          <p className="f-light">2</p>
                        </td>
                        <td> <span className="badge badge-light-secondary">Sold Out</span></td>
                        <td> 
                          <div className="rating"><i className="fa fa-star txt-warning" /><i className="fa fa-star txt-warning" /><i className="fa fa-star f-light" /><i className="fa fa-star f-light" /><i className="fa fa-star f-light" /></div>
                        </td>
                        <td> 
                          <div className="product-action"><a href="add-products.html"> 
                              <svg>    
                                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#edit-content" />
                              </svg></a>
                            <svg>
                              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#trash1" />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Container-fluid Ends*/}
    </div>
    {/* footer start*/}
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0 footer-copyright">
            <p className="mb-0">Copyright 2024 © Zono theme by pixelstrap.</p>
          </div>
          <div className="col-md-6 p-0">
            <p className="heart mb-0">Hand crafted &amp; made with
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
  )
}

export default Category