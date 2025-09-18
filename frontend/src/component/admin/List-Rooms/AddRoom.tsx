import SideBar from "../SideBar/SideBar"





const Add = () => {


 



  return (
    <div>
       <div className="page-wrapper compact-wrapper" id="pageWrapper">
  <div className="page-header">
    <div className="header-wrapper row m-0">
      <div className="header-logo-wrapper col-auto p-0">
        <div className="logo-wrapper"><a href="index.html"> <img className="img-fluid for-light" src="../assets/images/logo/logo.png" /><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" /></a></div>
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
              <input className="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder="Type to Search .." name="q" />
              <svg className="search-bg svg-color">
                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#search" />
              </svg>
            </div>
          </div>
        </div>
      </form>
      <div className="nav-right col-xl-8 col-lg-12 col-auto pull-right right-header p-0">
        <ul className="nav-menus">
        
          
         
          <li className="profile-nav onhover-dropdown pe-0 py-0">
            <div className="d-flex align-items-center profile-media"><img className="b-r-25" src="../assets/images/dashboard/profile.png" />
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
        <div className="logo-wrapper"><a href="index.html"> <img className="img-fluid for-light" src="../assets/images/logo/logo.png" /><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" /></a>
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
              <h3>Thêm Phòng</h3>
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
                              <label className="form-label col-12 m-0" htmlFor="productTitle1">Số phòng: <span className="txt-danger"> *</span></label>
                              <div className="col-12 custom-input">
                                <input className="form-control is-invalid" id="productTitle1" type="text" required />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">A product name is required and recommended to be unique.</div>
                              </div>
                                <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ảnh phòng:
        </label>
        
        <div
          className="relative flex flex-col items-center justify-center gap-2 
                     p-10 border-2 border-dashed rounded-md cursor-pointer 
                     bg-gray-100 hover:border-blue-400 transition"
        >
          {/* Icon */}
         
<input
            type="file"
            accept=".png,.jpg,.jpeg,.gif,.svg"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <p className="text-sm text-gray-600">
            Drag your image here, or{" "}
            <span className="text-blue-600 underline">browse</span>
          </p>
          <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>

          {/* Input file (ẩn) */}
          
        </div>
      </div>

      {/* Upload gallery */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Gallery
        </label>
        <div
          className="relative flex flex-col items-center justify-center gap-2 
                     p-10 border-2 border-dashed rounded-md cursor-pointer 
                     bg-gray-100 hover:border-blue-400 transition"
        >
          {/* Icon */}
         
 <input
            type="file"
            accept=".png,.jpg,.jpeg,.gif,.svg"
            multiple
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <p className="text-sm text-gray-600">Drag files here</p>
          <p className="text-xs text-gray-500">Add Product Gallery Images</p>

          {/* Input file multiple */}
         
        </div>
      </div>

      {/* Submit button */}
      {/* <div className="pt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Save Product
        </button>
      </div> */}
                               <div className="row g-3 custom-input">
                                      <div className="col-sm-6">
                                        <label className="form-label">Mã tòa nhà:</label>
                                        <select className="form-select" aria-label="Default select example">
                                          <option selected>A1</option>
                                          <option value={1}>A2</option>
                                          <option value={2}>A3</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-6">
                                        <label className="form-label">Mã tầng:</label>
                                        <select className="form-select" aria-label="Default select example">
                                          <option selected>A1.201</option>
                                          <option value={1}>A1.202</option>
                                          <option value={2}>A1.203</option>
                                        
                                        </select>
                                      </div>
                                      <div className="col-sm-6">
                                        <label className="form-label">Trạng thái:</label>
                                        <select className="form-select" aria-label="Default select example">
                                          <option selected>Trống</option>
                                          <option value={1}>Đã cho thuê</option>
                                          <option value={2}>Bảo trì</option>
                                        </select>
                                      </div>
                                      <div className="col-lg-3 col-sm-6">
                                        <label className="form-label" htmlFor="exampleFormControlInput1">Diện tích: <span className="txt-danger">*</span></label>
                                        <input className="form-control" id="exampleFormControlInput1" type="text" />
                                      </div>
                                      <div className="col-lg-3 col-sm-6">
                                        <label className="form-label" htmlFor="exampleFormControlInputa">Số người tối đa: <span className="txt-danger">*</span></label>
                                        <input className="form-control" id="exampleFormControlInputa" type="number" defaultValue={7} min={0} />
                                      </div>
                                      <div className="col-lg-3 col-sm-6"> 
                                        <label className="form-label" htmlFor="exampleFormControlInputb">Giá thuê: <span className="txt-danger">*</span></label>
                                        <input className="form-control" id="exampleFormControlInputb" type="number" />
                                      </div>
                                      <div className="col-lg-3 col-sm-6"> 
                                        <label className="form-label" htmlFor="exampleFormControlInputc">Tiện nghi: <span className="txt-danger">*</span></label>
                                        <input className="form-control" id="exampleFormControlInputc" type="number" />
                                      </div>
                                      <div className="col-12"> 
                                      </div>
                                    </div>
                                   <button className="btn btn-primary" >Thêm phòng</button>
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

export default Add