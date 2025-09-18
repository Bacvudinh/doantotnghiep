import React from 'react'
import SideBar from '../SideBar/SideBar'



const AddCategory = () => {
 

  
  return (
    <div>
       <div className="page-wrapper compact-wrapper" id="pageWrapper">
  <div className="page-header">
   
  </div>
  <div className="page-body-wrapper"> 

    <div className="sidebar-wrapper" data-layout="stroke-svg">
      <div>
        <div className="logo-wrapper"><a href="index.html"> <img className="img-fluid for-light" src="../assets/images/logo/logo.png" /><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt /></a>
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
              <h3>Thêm Tầng</h3>
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
                            <form  className="row g-2">
                              <label className="form-label col-12 m-0" htmlFor="productTitle1">Số tầng: <span className="txt-danger"> *</span></label>
                              <div className="col-12 custom-input">
                                <input className="form-control is-invalid" id="productTitle1" type="text" name="name" />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">A product name is required and recommended to be unique.</div>
                              </div>
                     <div className="row g-3 custom-input">
                                      <div className="col-sm-6">
                                        <label className="form-label">Mã phòng:</label>
                                        <select className="form-select" aria-label="Default select example">
                                          <option selected>A1</option>
                                          <option value={1}>A2</option>
                                          <option value={2}>A3</option>
                                        </select>
                                      </div>
                                      <div className="col-sm-6">
                                        <label className="form-label">Mã tòa:</label>
                                        <select className="form-select" aria-label="Default select example">
                                          <option selected>A1.201</option>
                                          <option value={1}>A1.202</option>
                                          <option value={2}>A1.203</option>
                                        
                                        </select>
                                      </div>
                                      
                                    </div>
                                   <button type='submit' className="btn btn-primary" >Thêm phòng</button>
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