import React from "react";
import StatCard from "../StatCard/StatCard";


const TodoList: React.FC = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Danh sách cần làm</h2>
        <select className="border rounded px-3 py-1 text-sm">
          <option>Tháng này</option>
          <option>Tháng trước</option>
        </select>
      </div>

      {/* Đơn giao hàng */}
      <h3 className="text-lg font-semibold mb-2">Đơn giao hàng</h3>
      <div className="grid grid-cols-5 gap-4 mb-6">
        <StatCard label="Đang chờ thanh toán" value={0} />
        <StatCard label="Đang chờ xử lý" value={2} />
        <StatCard label="Đang vận chuyển" value={0} />
        <StatCard label="Giao hàng thành công" value={0} />
        <StatCard label="Hoàn thành đơn hàng" value={0} />
        <StatCard label="Đơn bị hủy" value={1} />
      </div>

      {/* Khiếu nại */}
      <h3 className="text-lg font-semibold mb-2">Khiếu nại</h3>
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Khiếu nại chờ xử lý" value={0} color="red" />
        <StatCard label="Đang hoàn trả hàng" value={0} color="red" />
        <StatCard label="Hoàn trả hàng thành công" value={0} color="red" />
        <StatCard label="Đang đổi trả hàng" value={0} color="red" />
        <StatCard label="Đổi trả hàng thành công" value={0} color="red" />
      </div>
    </div>
  );
};

export default TodoList;
