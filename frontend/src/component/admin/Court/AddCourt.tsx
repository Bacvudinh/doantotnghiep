import React from 'react'
import SideBar from '../SideBar/SideBar'
import {useForm} from 'react-hook-form'
import type { ToaNha } from '../../../interface/room'


import { themToaNha } from '../../../service/room'


const AddCourt = () => {
 
const {register,handleSubmit,reset,formState:{errors}} = useForm<ToaNha>()
  const onsubmit = async (data: ToaNha) => {
    try {
      const payload = {
        ...data,so_tang:Number(data.so_tang)
      }
      const response = await themToaNha(payload);
    console.log("Data gửi:",response.data);
      reset();
      
    } catch (error) {
      alert("Đã xảy ra lỗi");
      console.error(error);
    }
  };

  return (
    <div>
       <div className="page-wrapper compact-wrapper" id="pageWrapper">
  <div className="page-header">
   
  </div>
  <div className="page-body-wrapper"> 

    <div className="sidebar-wrapper" data-layout="stroke-svg">
      <div>
        <div className="logo-wrapper"><a href="index.html"> <img className="img-fluid for-light" src="../assets/images/logo/logo.png" /><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" /></a>
          <div className="toggle-sidebar">
            {/* <svg className="sidebar-toggle"> 
              <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#toggle-icon" />
            </svg> */}
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
              <h3>Thêm Tòa</h3>
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
                            <form onSubmit={handleSubmit(onsubmit)}  className="row g-2">
                              <label className="form-label col-12 m-0" htmlFor="productTitle1">Ten tòa nhà: <span className="txt-danger"> *</span></label>
                              <div className="col-12 custom-input">
                                <input className="form-control is-invalid" id="productTitle1" type="text" {...register('ten_toa_nha',{required:"Phải nhập tên tòa nhà"})} />                           
                                 {errors.ten_toa_nha && (
          <p className="text-red-500">{errors.ten_toa_nha.message}</p>
        )}
                              </div>
                               <div className="row g-3 custom-input">
                                      <div className="col-sm-6">
                                        <label className="form-label">Địa chỉ:</label>
                                     <input className="form-control is-invalid" type="text"   {...register('dia_chi',{required:"Phải nhập địa chỉ"})}/>   
                                       {errors.dia_chi && (<p className="text-red-500">{errors.dia_chi.message}</p>)}
                                      
        
                                      </div>
                                      <div className="col-sm-6">
                                        <label className="form-label">Số tầng:</label>
                                        <input className="form-control is-invalid"  type="number"  {...register('so_tang',{required:"Phải nhập số tầng"})} />   
                                       {errors.so_tang && (<p className="text-red-500">{errors.so_tang.message}</p>)}
                                
                                      </div>
                                      <div className="col-sm-6">
                                        <label className="form-label">Tiện ích:</label>
                                         <input className="form-control is-invalid"  type="text"  {...register('tien_ich',{required:"Phải nhập tên tòa nhà"})}/>   
                                      {errors.tien_ich && (
          <p className="text-red-500">{errors.tien_ich.message}</p>
        )}
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
              {/* <svg className="footer-icon">
                <use href="https://admin.pixelstrap.net/zono/assets/svg/icon-sprite.svg#heart" />
              </svg> */}
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

export default AddCourt