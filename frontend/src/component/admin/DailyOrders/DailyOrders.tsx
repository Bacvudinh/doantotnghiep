import React from "react";

interface DailyOrdersProps {
  data: {
    label: string;
    value: number;
    color: string;
  }[];
}

const DailyOrders: React.FC<DailyOrdersProps> = ({ data }) => {
  return (
    <div className="p-4 border-r border-gray-200">
      <h3 className="font-semibold mb-3">Đơn hàng trong ngày</h3>
      <ul className="space-y-2 text-sm">
        {data.map((item, idx) => (
          <li key={idx} className="flex items-center">
            <span
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="mr-1 font-medium" style={{ color: item.color }}>
              {item.label}:
            </span>
            <span>{item.value} đơn hàng</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyOrders;
