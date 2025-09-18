import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div>
        <div className="menu-section">
    <Link to={`/admin`}><a  className="menu-item"><i className="fa-solid fa-chart-line"></i><span>Thống Kê</span></a></Link>
   
  </div>
   <div className="menu-section">
    
   <Link to={`/list-products`}><a className="menu-item"><i className="fa-solid fa-house"></i><span>Quản lý phòng</span></a></Link> 
    <Link to={`/category`}><a  className="menu-item"><i className="fa-solid fa-layer-group"/><span>Quản lý tầng</span></a></Link>
    <Link to={`/court`}><a  className="menu-item"><i className="fa fa-circle-info" /><span>Quản lý tòa</span></a></Link>
    <Link to={`/order-list`}><a  className="menu-item"><i className="fa-solid fa-bars-progress"></i><span>Quản lý đơn hàng</span></a></Link>
    <Link to={`/article-list`}><a  className="menu-item"><i className="fa-solid fa-pen"/><span>Quản lý bài viết</span></a></Link>
    
  </div>
  <div className="menu-section">
    
    <Link to={`/user`}><a className="menu-item"><i className="fa-solid fa-users"></i><span> Quản lý người dùng</span></a></Link>
    <Link to={`/report`}><a  className="menu-item"><i className="fa-solid fa-newspaper"></i><span>Quản lý báo cáo</span></a></Link>
    <Link to={`/revenue`}><a  className="menu-item"><i className="fa-solid fa-file-invoice-dollar"/><span>Quản lý doanh thu</span></a></Link>
     <Link to={`/phone`}><a href="#" className="menu-item"><i className="fa-solid fa-phone"></i><span>Liên hệ</span></a></Link>
  </div>
    </div>
  )
}

export default SideBar