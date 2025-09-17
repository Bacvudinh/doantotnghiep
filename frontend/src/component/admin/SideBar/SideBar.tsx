import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div>
        <div className="menu-section">
    <Link to={`/admin`}><a  className="menu-item"><i className="fa fa-home" /><span>Thống Kê</span></a></Link>
   
  </div>
   <div className="menu-section">
    
   <Link to={`/list-products`}><a className="menu-item"><i className="fa-solid fa-house"></i><span>Quản lý phòng</span></a></Link> 
    <Link to={`/category`}><a  className="menu-item"><i className="fa-solid fa-layer-group"/><span>Quản lý tầng</span></a></Link>
    <Link to={`/order-list`}><a  className="menu-item"><i className="fa fa-circle-info" /><span>Quản lý tòa</span></a></Link>
    <Link to={`/order-list`}><a  className="menu-item"><i className="fa fa-circle-info" /><span>Quản lý đơn hàng</span></a></Link>
    <Link to={`/article-list`}><a  className="menu-item"><i className="fa-solid fa-pen"/><span>Quản lý bài viết</span></a></Link>
    
  </div>
  <div className="menu-section">
    
    <a href="#" className="menu-item"><i className="fa-solid fa-users"></i><span> Quản lý người dùng</span></a>
    <a href="#" className="menu-item"><i className="fa fa-cart-shopping" /><span>Quản lý báo cáo</span></a>
    <a href="#" className="menu-item"><i className="fa-solid fa-file-invoice-dollar"/><span>Quản lý doanh thu</span></a>
     <a href="#" className="menu-item"><i className="fa-solid fa-file-invoice-dollar"/><span>Liên hệ</span></a>
  </div>
    </div>
  )
}

export default SideBar