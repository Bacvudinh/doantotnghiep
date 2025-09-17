import React, { useState } from "react";
import { Link } from "react-router-dom";

type Order = {
  id: string;
  user: string;
  quantity: number;
  total: number;
  payment: "COD" | "ZaloPay";
  paymentStatus: string;
  status: "Chờ xác nhận" | "Đang kiểm tra" | "Thành công" | "Thất bại";
};

const ordersData: Order[] = [
  {
    id: "ZAC55UKUW67Q",
    user: "Duy Trọng Bùi",
    quantity: 1,
    total: 467555,
    payment: "COD",
    paymentStatus: "Thanh toán khi nhận",
    status: "Chờ xác nhận",
  },
  {
    id: "VMYEUEMBS9H",
    user: "Duy Trọng Bùi",
    quantity: 1,
    total: 913110,
    payment: "ZaloPay",
    paymentStatus: "Chờ thanh toán",
    status: "Thất bại",
  },
  {
    id: "L8BSL00GYUNA",
    user: "Duy Trọng Bùi",
    quantity: 1,
    total: 1022000,
    payment: "COD",
    paymentStatus: "Thanh toán khi nhận",
    status: "Chờ xác nhận",
  },
];

const statusOptions: Order["status"][] = [
  "Chờ xác nhận",
  "Đang kiểm tra",
  "Thành công",
  "Thất bại",
];

const OrderTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(ordersData);

  const handleStatusChange = (id: string, newStatus: Order["status"]) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="p-4 w-full max-w-6xl mx-auto">
      <h2 className="font-semibold text-lg mb-3">
        Thông tin đơn hàng gần đây
      </h2>
       <Link to={`/order-list`}><a className="btn btn-primary" href="">Xem tất cả đơn hàng</a></Link>
      <div className="border border-gray-200 rounded-md">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2 text-left">Mã đơn hàng</th>
              <th className="p-2 text-left">Tên người dùng</th>
              <th className="p-2 text-center">Số sản phẩm</th>
              <th className="p-2 text-right">Tổng tiền (đ)</th>
              <th className="p-2 text-left">Thanh toán</th>
              <th className="p-2 text-left">Trạng thái thanh toán</th>
              <th className="p-2 text-left">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.user}</td>
                <td className="p-2 text-center">{order.quantity}</td>
                <td className="p-2 text-right">
                  {order.total.toLocaleString("vi-VN")} đ
                </td>
                <td className="p-2">
                  {order.payment === "COD" ? (
                    <span className="inline-block px-2 py-0.5 text-xs font-medium text-green-700 bg-green-100 rounded">
                      COD
                    </span>
                  ) : (
                    <span className="inline-block px-2 py-0.5 text-xs font-medium text-blue-700 bg-blue-100 rounded">
                      ZaloPay
                    </span>
                  )}
                </td>
                <td className="p-2">{order.paymentStatus}</td>
                <td className="p-2">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value as Order["status"])
                    }
                    className="border rounded px-2 py-1 text-sm"
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
