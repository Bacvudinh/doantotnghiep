import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div>
        <div className="menu-section">
    <Link to={`/admin`}><div  className="menu-item"><i className="fa-solid fa-chart-line"></i><span>Thống Kê</span></div></Link>
   
  </div>
   <div className="menu-section">
    
   <Link to={`/list-products`}><div className="menu-item"><i className="fa-solid fa-house"></i><span>Quản lý phòng</span></div></Link> 
    <Link to={`/category`}><div  className="menu-item"><i className="fa-solid fa-layer-group"/><span>Quản lý tầng</span></div></Link>
    <Link to={`/court`}><div  className="menu-item"><i className="fa fa-circle-info" /><span>Quản lý tòa</span></div></Link>
    <Link to={`/order-list`}><div  className="menu-item"><i className="fa-solid fa-bars-progress"></i><span>Quản lý đơn hàng</span></div></Link>
    <Link to={`/article-list`}><div  className="menu-item"><i className="fa-solid fa-pen"/><span>Quản lý bài viết</span></div></Link>
    
  </div>
  <div className="menu-section">
    
    <Link to={`/user`}><div className="menu-item"><i className="fa-solid fa-users"></i><span> Quản lý người dùng</span></div></Link>
    <Link to={`/report`}><div  className="menu-item"><i className="fa-solid fa-newspaper"></i><span>Quản lý báo cáo</span></div></Link>
    <Link to={`/revenue`}><div  className="menu-item"><i className="fa-solid fa-file-invoice-dollar"/><span>Quản lý doanh thu</span></div></Link>
     <Link to={`/phone`}><div  className="menu-item"><i className="fa-solid fa-phone"></i><span>Liên hệ</span></div></Link>
  </div>
    </div>
  )
}

export default SideBar