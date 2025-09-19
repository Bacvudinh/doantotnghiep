import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>

       <div className="header-wrapper row m-0">
      <div className="header-logo-wrapper col-auto p-0">
        <div className="logo-wrapper"><a href="index.html"> <img className="img-fluid for-light" src="../assets/images/logo/logo.png"  /><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt /></a></div>
        <div className="toggle-sidebar">
          <svg className="sidebar-toggle"> 
            <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#stroke-animation" />
          </svg>
        </div>
      </div>
     
      <div className="nav-right col-xl-8 col-lg-12 col-auto pull-right right-header p-0">
        <ul className="nav-menus">
        
          
         
          <li className="profile-nav onhover-dropdown pe-0 py-0">
            <div className="d-flex align-items-center profile-media"><img className="b-r-25" src="../assets/images/dashboard/profile.png" alt />
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

      <div>
        <Outlet />
      </div>
    
        
     


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
  );
}
