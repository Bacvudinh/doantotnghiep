import React from 'react'
import SideBar from '../SideBar/SideBar'


type Props = {}

const AddCategory = (props: Props) => {
  return (
    <div>
       <div className="page-wrapper compact-wrapper" id="pageWrapper">
  <div className="page-header">
    <div className="header-wrapper row m-0">
      <div className="header-logo-wrapper col-auto p-0">
        <div className="logo-wrapper"><a href="index.html"> <img className="img-fluid for-light" src="../assets/images/logo/logo.png"  /><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt /></a></div>
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
          <li className="onhover-dropdown"> 
            <div className="notification-box">
              <svg> 
                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Bell" />
              </svg>
            </div>
            <div className="onhover-show-div notification-dropdown"> 
              <h6 className="f-18 mb-0 dropdown-title">Notifications</h6>
              <div className="notification-card">
                <ul>
                  <li>
                    <div className="user-notification">
                      <div><img src="../assets/images/avtar/2.jpg" alt="avatar" /></div>
                      <div className="user-description"><a href="letter-box.html">
                          <h4>You have new finical page design.</h4></a><span>Today 11:45pm</span></div>
                    </div>
                    <div className="notification-btn">
                      <button className="btn btn-pill btn-primary" type="button" title="btn btn-pill btn-primary">Accpet</button>
                      <button className="btn btn-pill btn-secondary" type="button" title="btn btn-pill btn-primary">Decline</button>
                    </div>
                    <div className="show-btn"><a href="index.html"> <span>Show</span></a></div>
                  </li>
                  <li>
                    <div className="user-notification">
                      <div><img src="../assets/images/avtar/17.jpg" alt="avatar" /></div>
                      <div className="user-description"><a href="letter-box.html">
                          <h4>Congrats! you all task for today.</h4></a><span>Today 01:05pm</span></div>
                    </div>
                    <div className="notification-btn">
                      <button className="btn btn-pill btn-primary" type="button" title="btn btn-pill btn-primary">Accpet</button>
                      <button className="btn btn-pill btn-secondary" type="button" title="btn btn-pill btn-primary">Decline</button>
                    </div>
                    <div className="show-btn"><a href="index.html"> <span>Show</span></a></div>
                  </li>
                  <li> 
                    <div className="user-notification">
                      <div> <img src="../assets/images/avtar/18.jpg" alt="avatar" /></div>
                      <div className="user-description"><a href="letter-box.html">
                          <h4>You have new in landing page design.</h4></a><span>Today 06:55pm</span></div>
                    </div>
                    <div className="notification-btn">
                      <button className="btn btn-pill btn-primary" type="button" title="btn btn-pill btn-primary">Accpet</button>
                      <button className="btn btn-pill btn-secondary" type="button" title="btn btn-pill btn-primary">Decline</button>
                    </div>
                    <div className="show-btn"><a href="index.html"> <span>Show</span></a></div>
                  </li>
                  <li>
                    <div className="user-notification">
                      <div><img src="../assets/images/avtar/19.jpg" alt="avatar" /></div>
                      <div className="user-description"><a href="letter-box.html">
                          <h4>Congrats! you all task for today.</h4></a><span>Today 06:55pm</span></div>
                    </div>
                    <div className="notification-btn">
                      <button className="btn btn-pill btn-primary" type="button" title="btn btn-pill btn-primary">Accpet</button>
                      <button className="btn btn-pill btn-secondary" type="button" title="btn btn-pill btn-primary">Decline</button>
                    </div>
                    <div className="show-btn"> <a href="index.html"> <span>Show</span></a></div>
                  </li>
                  <li> <a className="f-w-700" href="letter-box.html">Check all </a></li>
                </ul>
              </div>
            </div>
          </li>
          <li className="onhover-dropdown">
            <svg>
              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Bookmark" />
            </svg>
            <div className="onhover-show-div bookmark-flip">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="front">
                    <h6 className="f-18 mb-0 dropdown-title">Bookmark</h6>
                    <ul className="bookmark-dropdown">
                      <li>
                        <div className="row">
                          <div className="col-4 text-center"><a href="form-validation.html">
                              <div className="bookmark-content">
                                <div className="bookmark-icon bg-light-primary"><i data-feather="file-text" /></div><span>Forms</span>
                              </div></a></div>
                          <div className="col-4 text-center"><a href="user-profile.html">
                              <div className="bookmark-content"> 
                                <div className="bookmark-icon bg-light-secondary"><i data-feather="user" /></div><span>Profile</span>
                              </div></a></div>
                          <div className="col-4 text-center"><a href="bootstrap-basic-table.html">
                              <div className="bookmark-content">
                                <div className="bookmark-icon bg-light-warning"> <i data-feather="server"> </i></div><span>Tables </span>
                              </div></a></div>
                        </div>
                      </li>
                      <li className="text-centermedia-body"> <a className="flip-btn f-w-700" id="flip-btn" href="javascript:void(0)">Add New Bookmark</a></li>
                    </ul>
                  </div>
                  <div className="back">
                    <ul>
                      <li>
                        <div className="bookmark-dropdown flip-back-content">
                          <input type="text" placeholder="search..." />
                        </div>
                      </li>
                      <li><a className="f-w-700 d-block flip-back" id="flip-back" href="javascript:void(0)">Back</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="onhover-dropdown"> 
            <div className="message position-relative">
              <svg>
                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Message" />
              </svg><span className="rounded-pill badge-danger" />
            </div>
            <div className="onhover-show-div message-dropdown">
              <h6 className="f-18 mb-0 dropdown-title">Message                             </h6>
              <ul>
                <li>
                  <div className="d-flex align-items-start">
                    <div className="message-img bg-light-primary"><img src="../assets/images/user/3.jpg"  /></div>
                    <div className="flex-grow-1">
                      <h5><a href="letter-box.html">Emay Walter</a></h5>
                      <p>Do you want to go see movie?</p>
                    </div>
                    <div className="notification-right"><i data-feather="x" /></div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-start">
                    <div className="message-img bg-light-primary"><img src="../assets/images/user/6.jpg"  /></div>
                    <div className="flex-grow-1">
                      <h5> <a href="letter-box.html">Jason Borne</a></h5>
                      <p>Thank you for rating us.</p>
                    </div>
                    <div className="notification-right"><i data-feather="x" /></div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-start"> 
                    <div className="message-img bg-light-primary"><img src="../assets/images/user/10.jpg"  /></div>
                    <div className="flex-grow-1">
                      <h5> <a href="letter-box.html">Sarah Loren</a></h5>
                      <p>What`s the project report update?</p>
                    </div>
                    <div className="notification-right"><i data-feather="x" /></div>
                  </div>
                </li>
                <li> <a className="f-w-700" href="private-chat.html">Check all</a></li>
              </ul>
            </div>
          </li>
          <li className="cart-nav onhover-dropdown">
            <div className="cart-box"> 
              <svg>
                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Buy" />
              </svg>
            </div>
            <div className="cart-dropdown onhover-show-div">
              <h6 className="f-18 mb-0 dropdown-title">Cart</h6>
              <ul>
                <li>
                  <div className="d-flex"><img className="img-fluid b-r-5 img-50" src="../assets/images/ecommerce/05.jpg"  />
                    <div className="flex-grow-1"> <span>Women's Track Suit</span>
                      <h6 className="font-primary">8 x $65.00</h6>
                    </div>
                    <div className="close-circle"><a className="bg-primary" href="#"><i data-feather="x" /></a></div>
                  </div>
                </li>
                <li>
                  <div className="d-flex"><img className="img-fluid b-r-5 img-50" src="../assets/images/ecommerce/02.jpg"  />
                    <div className="flex-grow-1"><span>Men's Jacket</span>
                      <h6 className="font-primary">10 x $50.00</h6>
                    </div>
                    <div className="close-circle"><a className="bg-primary" href="#"><i data-feather="x" /></a></div>
                  </div>
                </li>
                <li className="total">
                  <h6 className="mb-0">Order Total :<span className="f-right">$1020.00</span></h6>
                </li>
                <li className="text-center"> <a href="cart.html">
                    <button className="btn btn-outline-primary" type="button">View Cart</button></a><a className="btn btn-primary view-checkout" href="checkout.html">Checkout</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div className="mode">
              <svg className="for-dark">
                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#moon" />
              </svg>
              <svg className="for-light">
                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#Sun" />
              </svg>
            </div>
          </li>
          <li className="language-nav">
            <div className="translate_wrapper">
              <div className="current_lang">
                <div className="lang"><i className="flag-icon flag-icon-gb" /><span className="lang-txt box-col-none">EN          </span></div>
              </div>
              <div className="more_lang">
                <div className="lang selected" data-value="en"><i className="flag-icon flag-icon-us" /><span className="lang-txt">English<span> (US)</span></span></div>
                <div className="lang" data-value="de"><i className="flag-icon flag-icon-de" /><span className="lang-txt">Deutsch</span></div>
                <div className="lang" data-value="es"><i className="flag-icon flag-icon-es" /><span className="lang-txt">Español</span></div>
                <div className="lang" data-value="fr"><i className="flag-icon flag-icon-fr" /><span className="lang-txt">Français</span></div>
                <div className="lang" data-value="pt"><i className="flag-icon flag-icon-pt" /><span className="lang-txt">Português<span> (BR)</span></span></div>
                <div className="lang" data-value="cn"><i className="flag-icon flag-icon-cn" /><span className="lang-txt">简体中文</span></div>
                <div className="lang" data-value="ae"><i className="flag-icon flag-icon-ae" /><span className="lang-txt">لعربية <span> (ae)</span></span></div>
              </div>
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
              <h3>Thêm tầng</h3>
            </div>
            <div className="col-5 d-none d-xl-block">
              {/* Page Sub Header Start*/}
              <div className="left-header main-sub-header p-0">
                <div className="left-menu-header">
                  <ul className="header-left"> 
                    <li className="onhover-dropdown"> <span className="f-w-700">General </span>
                      <ul className="onhover-show-div left-dropdown">
                        <li className="flyout-right"><a href="#">Dashboards</a><i className="fa fa-angle-right" />
                          <ul>
                            <li> <a href="index.html">Default</a></li>
                            <li> <a href="dashboard-02.html">Ecommerce</a></li>
                          </ul>
                        </li>
                        <li className="flyout-right"><a href="#">Widgets</a><i className="fa fa-angle-right" />
                          <ul>
                            <li><a href="general-widget.html">General</a></li>
                            <li> <a href="chart-widget.html">chart</a></li>
                          </ul>
                        </li>
                        <li className="flyout-right"> <a href="#">Page layout</a><i className="fa fa-angle-right" />
                          <ul>
                            <li> <a href="box-layout.html">Boxed </a></li>
                            <li> <a href="layout-rtl.html">RTL</a></li>
                            <li> <a href="layout-dark.html">Dark Layout</a></li>
                            <li> <a href="footer-light.html">footer-light.html</a></li>
                            <li> <a href="footer-dark.html">footer-dark.html</a></li>
                            <li><a href="footer-fixed.html">footer-fixed.html</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="onhover-dropdown"><span className="f-w-700">Components</span>
                      <ul className="onhover-show-div left-dropdown">
                        <li className="flyout-right"><a href="#">Ui Kits</a>
                          <ul>
                            <li><a href="typography.html">Typography</a></li>
                            <li><a href="avatars.html">Avatars</a></li>
                            <li><a href="helper-classes.html">helper classes</a></li>
                            <li><a href="grid.html">Grid</a></li>
                            <li><a href="tag-pills.html">Tag &amp; pills</a></li>
                            <li><a href="progress-bar.html">Progress</a></li>
                            <li><a href="modal.html">Modal</a></li>
                            <li><a href="alert.html">Alert</a></li>
                            <li><a href="popover.html">Popover</a></li>
                            <li><a href="tooltip.html">Tooltip</a></li>
                            <li><a href="dropdown.html">Dropdown</a></li>
                            <li><a href="according.html">Accordion</a></li>
                            <li><a href="tab-bootstrap.html">Tabs</a></li>
                            <li><a href="list.html">Lists</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li className="flyout-right"><a href="#">Bonus Ui</a>
                          <ul>
                            <li><a href="scrollable.html">Scrollable</a></li>
                            <li><a href="tree.html">Tree view</a></li>
                            <li><a href="toasts.html">Toasts</a></li>
                            <li><a href="rating.html">Rating</a></li>
                            <li><a href="dropzone.html">dropzone</a></li>
                            <li><a href="tour.html">Tour</a></li>
                            <li><a href="sweet-alert2.html">SweetAlert2</a></li>
                            <li><a href="modal-animated.html">Animated Modal</a></li>
                            <li><a href="owl-carousel.html">Owl Carousel</a></li>
                            <li><a href="ribbons.html">Ribbons</a></li>
                            <li><a href="pagination.html">Pagination</a></li>
                            <li><a href="breadcrumb.html">Breadcrumb</a></li>
                            <li><a href="range-slider.html">Range Slider</a></li>
                            <li><a href="image-cropper.html">Image cropper</a></li>
                            <li><a href="basic-card.html">Basic Card</a></li>
                            <li><a href="creative-card.html">Creative Card</a></li>
                            <li><a href="dragable-card.html">Draggable Card</a></li>
                            <li><a href="timeline-v-1.html">Timeline </a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li className="flyout-right"><a href="#">Animation</a>
                          <ul>
                            <li><a href="animate.html">Animate</a></li>
                            <li><a href="scroll-reval.html">Scroll Reveal</a></li>
                            <li><a href="AOS.html">AOS animation</a></li>
                            <li><a href="tilt.html">Tilt Animation</a></li>
                            <li><a href="wow.html">Wow Animation</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li className="flyout-right"><a href="#">Icons</a>
                          <ul>
                            <li><a href="flag-icon.html">Flag icon</a></li>
                            <li><a href="font-awesome.html">Fontawesome Icon</a></li>
                            <li><a href="ico-icon.html">Ico Icon</a></li>
                            <li><a href="themify-icon.html">Themify Icon</a></li>
                            <li><a href="feather-icon.html">Feather icon</a></li>
                            <li><a href="whether-icon.html">Whether Icon</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li className="flyout-right"><a href="#">Buttons</a>
                          <ul>
                            <li><a href="buttons.html">Default Style</a></li>
                            <li><a href="button-group.html">Button Group</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li className="flyout-right"><a href="#">Charts</a>
                          <ul>
                            <li><a href="echarts.html">Echarts</a></li>
                            <li><a href="chart-apex.html">Apex Chart</a></li>
                            <li><a href="chart-google.html">Google Chart</a></li>
                            <li><a href="chart-sparkline.html">Sparkline chart</a></li>
                            <li><a href="chart-flot.html">Flot Chart </a></li>
                            <li><a href="chart-knob.html">Knob Chart</a></li>
                            <li><a href="chart-morris.html">Morris Chart</a></li>
                            <li><a href="chartjs.html">Chatjs Chart</a></li>
                            <li><a href="chartist.html">Chartist Chart</a></li>
                            <li><a href="chart-peity.html">Peity Chart</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                      </ul>
                    </li>
                    <li className="onhover-dropdown"> <span className="f-w-700">Applications</span>
                      <ul className="onhover-show-div left-dropdown">
                        <li className="flyout-right"><a href="#">Project</a>
                          <ul>
                            <li><a href="projects.html">Project List</a></li>
                            <li><a href="projectcreate.html">Create new</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li><a href="file-manager.html">File manager</a></li>
                        <li><a href="kanban.html">kanban Board </a></li>
                        <li className="flyout-right"> <a href="#">Ecommerce </a>
                          <ul>
                            <li><a href="add-products.html">Add Product</a></li>
                            <li><a href="product.html">Product</a></li>
                            <li><a href="product-page.html">Product page</a></li>
                            <li><a href="list-products.html">Product list</a></li>
                            <li><a href="payment-details.html">Payment Details</a></li>
                            <li><a href="order-history.html">Order History</a></li>
                            <li className="flyout-right"><a className="submenu-title" href="#">Invoices</a>
                              <ul>
                                <li><a href="invoice-1.html">Invoice-1</a></li>
                                <li><a href="invoice-2.html">Invoice-2</a></li>
                                <li><a href="invoice-3.html">Invoice-3</a></li>
                                <li><a href="invoice-4.html">Invoice-4</a></li>
                                <li><a href="invoice-5.html">Invoice-5</a></li>
                                <li><a href="invoice-template.html">Invoice-6</a></li>
                              </ul>
                            </li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="list-wish.html">Wishlist</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="pricing.html">Pricing</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li className="flyout-right"><a href="#">Email</a>
                          <ul>
                            <li><a href="letter-box.html">Email App</a></li>
                            <li><a href="email-compose.html">Email Compose</a></li>
                            <li><a href="letter-box.html">Letter Box</a></li>
                          </ul><i className="fa fa-angle-right"> </i>
                        </li>
                        <li className="flyout-right"> <a href="#">Chat</a>
                          <ul>
                            <li><a href="private-chat.html">Private Chat</a></li>
                            <li><a href="group-chat.html">Group Chat</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li className="flyout-right"><a href="#">User</a>
                          <ul>
                            <li><a href="user-profile.html">Users Profile</a></li>
                            <li><a href="edit-profile.html">Users Edit</a></li>
                            <li><a href="user-cards.html">Users Cards</a></li>
                          </ul><i className="fa fa-angle-right"> </i>
                        </li>
                        <li><a href="bookmark.html">Bookmarks</a></li>
                        <li><a href="contacts.html">Contacts</a></li>
                        <li><a href="task.html">Task</a></li>
                        <li><a href="calendar-basic.html">Calendar</a></li>
                        <li><a href="social-app.html">Social-app</a></li>
                        <li><a href="to-do.html">To-Do</a></li>
                        <li><a href="search.html">Search Result</a></li>
                      </ul>
                    </li>
                    <li className="onhover-dropdown"><span className="f-w-700">Pages</span>
                      <ul className="onhover-show-div left-dropdown">
                        <li><a href="blog.html">Landing page</a></li>
                        <li><a href="blog-single.html">Sample page</a></li>
                        <li><a href="add-post.html">Starter kit</a></li>
                        <li className="flyout-right"><a href="#">Others </a><i className="fa fa-angle-right" />
                          <ul>
                            <li className="flyout-right"><a href="#">Error Page</a>
                              <ul>
                                <li><a href="error-400.html">Error 400</a></li>
                                <li><a href="error-401.html">Error 401</a></li>
                                <li><a href="error-403.html">Error 403</a></li>
                                <li><a href="error-404.html">Error 404</a></li>
                                <li><a href="error-500.html">Error 500</a></li>
                                <li><a href="error-503.html">Error 503</a></li>
                              </ul><i className="fa fa-angle-right"> </i>
                            </li>
                            <li className="flyout-right"> <a href="#">Authentication</a>
                              <ul>
                                <li><a href="login.html" target="_blank">Login Simple</a></li>
                                <li><a href="login_one.html" target="_blank">Login with bg image</a></li>
                                <li><a href="login_two.html" target="_blank">Login with image two                    </a></li>
                                <li><a href="login-bs-validation.html" target="_blank">Login With validation</a></li>
                                <li><a href="login-bs-tt-validation.html" target="_blank">Login with tooltip</a></li>
                                <li><a href="login-sa-validation.html" target="_blank">Login with sweetalert</a></li>
                                <li><a href="sign-up.html" target="_blank">Register Simple</a></li>
                                <li><a href="sign-up-one.html" target="_blank">Register with Bg Image                            </a></li>
                                <li><a href="sign-up-two.html" target="_blank">Register with image two</a></li>
                                <li><a href="sign-up-wizard.html" target="_blank">Register wizard</a></li>
                                <li><a href="unlock.html">Unlock User</a></li>
                                <li><a href="forget-password.html">Forget Password</a></li>
                                <li><a href="reset-password.html">Reset Password</a></li>
                                <li><a href="maintenance.html">Maintenance</a></li>
                              </ul>
                            </li>
                            <li className="flyout-right"> <a href="#">Coming Soon</a>
                              <ul> 
                                <li><a href="comingsoon.html">Coming Simple</a></li>
                                <li><a href="comingsoon-bg-video.html">Coming with Bg video</a></li>
                                <li><a href="comingsoon-bg-img.html">Coming with Bg Image</a></li>
                              </ul><i className="fa fa-angle-right"> </i>
                            </li>
                            <li className="flyout-right"><a href="#">Email templates</a>
                              <ul>
                                <li><a href="basic-template.html">Basic Email</a></li>
                                <li><a href="email-header.html">Basic With Header</a></li>
                                <li><a href="template-email.html">Ecomerce Template</a></li>
                                <li><a href="template-email-2.html">Email Template 2</a></li>
                                <li><a href="ecommerce-templates.html">Ecommerce Email</a></li>
                                <li><a href="email-order-success.html">Order Success</a></li>
                              </ul><i className="fa fa-angle-right" />
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="onhover-dropdown p-0"><span className="f-w-700">Miscellaneous</span>
                      <ul className="onhover-show-div left-dropdown">
                        <li className="flyout-right"><a href="#">Gallery</a>
                          <ul> 
                            <li><a href="gallery.html">Gallery Grid</a></li>
                            <li><a href="gallery-with-description.html">gallery-with-description</a></li>
                            <li><a href="gallery-masonry.html">gallery-masonry</a></li>
                            <li><a href="masonry-gallery-with-disc.html">masonry-gallery-with-disc</a></li>
                            <li><a href="gallery-hover.html">gallery-hover</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li className="flyout-right"><a href="#">Blog</a>
                          <ul>
                            <li><a href="blog.html">blog</a></li>
                            <li><a href="blog-single.html">blog-single</a></li>
                            <li><a href="add-post.html">add-post</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li><a href="FAQ-2.html">FAQ</a></li>
                        <li className="flyout-right"><a href="#">Job Search</a>
                          <ul>
                            <li><a href="job-cards-view.html">job-cards-view</a></li>
                            <li><a href="job-list-view.html">job-list-view</a></li>
                            <li><a href="job-details.html">job-details</a></li>
                            <li><a href="job-apply.html">job-apply</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li className="flyout-right"><a href="#">Job Search</a>
                          <ul> 
                            <li><a href="job-cards-view.html">learning-list</a></li>
                            <li><a href="learning-detailed.html">learning-detailed</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li className="flyout-right"><a href="#">Maps</a>
                          <ul>
                            <li><a href="map-js.html">Map-js</a></li>
                            <li><a href="vector-map.html">Vector Maps</a></li>
                          </ul><i className="fa fa-angle-right" />
                        </li>
                        <li className="flyout-right"><a href="#">Editors </a>
                          <ul>
                            <li><a href="summernote.html">Summer Note</a></li>
                            <li><a href="CK%20editor.html">CK editor</a></li>
                            <li><a href="simple-MDE.html">MDE editor</a></li>
                            <li><a href="ace-code-editor.html">ACE code editor </a></li>
                          </ul><i className="fa fa-angle-right"> </i>
                        </li>
                        <li><a href="knowledgebase.html">Knowledgebase </a></li>
                        <li> <a href="support-ticket-2.html">Support Ticket</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Page Sub Header end
            */}
            </div>
            <div className="col-xl-3 col-sm-5 box-col-4"> 
              <ol className="breadcrumb"> 
                <li className="breadcrumb-item"><a href="index.html">
                    <svg className="stroke-icon">
                      <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-home" />
                    </svg></a></li>
                <li className="breadcrumb-item">ECommerce</li>
                <li className="breadcrumb-item active">Add-product</li>
              </ol>
            </div>
          </div>
        </div>
        {/* Container-fluid starts*/}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row g-xl-5 g-3">
                    <div className="col-xxl-9 col-xl-8 box-col-8 position-relative">
                      <div className="tab-content" id="add-product-pills-tabContent">
                        <div className="tab-pane fade show active" id="detail-product" role="tabpanel" aria-labelledby="detail-product-tab">
                          <div className="sidebar-body">
                            <form className="row g-2">
                              <label className="form-label col-12 m-0" htmlFor="productTitle1">Product Title <span className="txt-danger"> *</span></label>
                              <div className="col-12 custom-input">
                                <input className="form-control is-invalid" id="productTitle1" type="text" required />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">A product name is required and recommended to be unique.</div>
                              </div>
                               <div className="row g-3 custom-input">
                                      <div className="col-sm-6">
                                        <label className="form-label">Stock Availability</label>
                                        <select className="form-select" aria-label="Default select example">
                                          <option selected>In stock</option>
                                          <option value={1}>Out of stock</option>
                                          <option value={2}>Pre-order</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-6">
                                        <label className="form-label">Low Stock</label>
                                        <select className="form-select" aria-label="Default select example">
                                          <option selected>Low Stock (5 or less)</option>
                                          <option value={1}>Low Stock (10 or less)</option>
                                          <option value={2}>Low Stock (20 or less)</option>
                                          <option value={2}>Low Stock (25 or less)</option>
                                          <option value={2}>Low Stock (30 or less)</option>
                                        </select>
                                      </div>
                                      <div className="col-lg-3 col-sm-6">
                                        <label className="form-label" htmlFor="exampleFormControlInput1">SKU <span className="txt-danger">*</span></label>
                                        <input className="form-control" id="exampleFormControlInput1" type="text" />
                                      </div>
                                      <div className="col-lg-3 col-sm-6">
                                        <label className="form-label" htmlFor="exampleFormControlInputa">Stock Quantity <span className="txt-danger">*</span></label>
                                        <input className="form-control" id="exampleFormControlInputa" type="number" defaultValue={7} min={0} />
                                      </div>
                                      <div className="col-lg-3 col-sm-6"> 
                                        <label className="form-label" htmlFor="exampleFormControlInputb">Restock Date <span className="txt-danger">*</span></label>
                                        <input className="form-control" id="exampleFormControlInputb" type="number" />
                                      </div>
                                      <div className="col-lg-3 col-sm-6"> 
                                        <label className="form-label" htmlFor="exampleFormControlInputc">Pre-Order <span className="txt-danger">*</span></label>
                                        <input className="form-control" id="exampleFormControlInputc" type="number" />
                                      </div>
                                      <div className="col-12"> 
                                      </div>
                                    </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container-fluid Ends*/}
      </div>
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

export default AddCategory