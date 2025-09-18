
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Add from "../component/admin/List-Rooms/AddRoom";
import Category from "../component/admin/Category/Category";
import AddCategory from "../component/admin/Category/AddCategory";
import OrderList from "../component/admin/OrderList/OrderList";
import ArticleList from "../component/admin/ArticleList/ArticleList";
import Court from "../component/admin/Court/court";
import Dashboard from "../component/admin/dashboard";
import ListProducts from "../component/admin/List-Rooms/ListRooms";
import AddCourt from "../component/admin/Court/AddCourt";
import User from "../component/admin/User/User";




export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div id="preloder">
  <div className="loader" />
</div>
}>
        <Routes>
           
           <Route path="/admin" element={<Dashboard/>} />
          <Route path="/list-products" element={<ListProducts></ListProducts>}></Route>
          <Route path="/add-room" element={<Add></Add>}></Route>
          <Route path="/category" element={<Category></Category>}></Route>
          <Route path="/add-category" element={<AddCategory></AddCategory>}></Route>
          <Route path="/order-list" element={<OrderList></OrderList>}></Route>
          <Route path="/article-list" element={<ArticleList></ArticleList>}></Route>
      
           <Route path="/court" element={<Court></Court>}></Route>
            <Route path="/add-court" element={<AddCourt></AddCourt>}></Route>
             <Route path="/user" element={<User></User>}></Route>
        </Routes>
        
      </Suspense>
    </BrowserRouter>
  );
}
