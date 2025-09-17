
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Add from "../component/admin/List-Rooms/AddRoom";
import Category from "../component/admin/Category/Category";
import AddCategory from "../component/admin/Category/AddCategory";
import OrderList from "../component/admin/OrderList/OrderList";
import ArticleList from "../component/admin/ArticleList/ArticleList";



const Dashboard = lazy(() => import("../component/admin/dashboard"));

const ListProducts = lazy(() => import("../component/admin/List-Rooms/ListRooms"));
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
          <Route path="/add-product" element={<Add></Add>}></Route>
          <Route path="/category" element={<Category></Category>}></Route>
          <Route path="/add-category" element={<AddCategory></AddCategory>}></Route>
          <Route path="/order-list" element={<OrderList></OrderList>}></Route>
          <Route path="/article-list" element={<ArticleList></ArticleList>}></Route>
        </Routes>
        
      </Suspense>
    </BrowserRouter>
  );
}
