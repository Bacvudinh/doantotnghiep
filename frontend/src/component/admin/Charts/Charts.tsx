import React from "react";
import DailyOrders from "../DailyOrders/DailyOrders";
import MonthlyChart from "../MonthlyChart/MonthlyChart";


const Charts: React.FC = () => {
  const dailyOrders = [
    { label: "Đơn hàng mới", value: 0, color: "blue" },
    { label: "Đơn hàng đã xác nhận", value: 0, color: "orange" },
    { label: "Đơn hàng chờ thanh toán", value: 0, color: "purple" },
    { label: "Đơn hàng đang vận chuyển", value: 0, color: "green" },
    { label: "Đơn hàng đã giao", value: 0, color: "teal" },
    { label: "Đơn hàng hủy", value: 0, color: "red" },
  ];

  const labels = Array.from({ length: 30 }, (_, i) => (i + 1).toString());

  const datasets = [
    {
      label: "Đơn hàng mới",
      data: Array(30).fill(0),
      borderColor: "blue",
      backgroundColor: "blue",
    },
    {
      label: "Đơn hàng đã xác nhận",
      data: Array(30).fill(0),
      borderColor: "orange",
      backgroundColor: "orange",
    },
    {
      label: "Đơn hàng chờ thanh toán",
      data: Array(30).fill(0),
      borderColor: "purple",
      backgroundColor: "purple",
    },
    {
      label: "Đơn hàng đang vận chuyển",
      data: Array(30).fill(0),
      borderColor: "green",
      backgroundColor: "green",
    },
    {
      label: "Đơn hàng đã giao",
      data: Array(30).fill(0),
      borderColor: "teal",
      backgroundColor: "teal",
    },
    {
      label: "Đơn hàng hủy",
      data: Array(30).fill(0),
      borderColor: "red",
      backgroundColor: "red",
    },
  ];

  return (
    <div className="flex border border-gray-200 rounded-md">
      <div className="w-1/4">
        <DailyOrders data={dailyOrders} />
      </div>
      <div className="w-3/4">
        <MonthlyChart labels={labels} datasets={datasets} />
      </div>
    </div>
  );
};

export default Charts;
