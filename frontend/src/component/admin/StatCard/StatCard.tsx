    import React from "react";

interface StatCardProps {
  label: string;
  value: number;
  color?: "blue" | "red";
}

const StatCard: React.FC<StatCardProps> = ({ label, value, color = "blue" }) => {
  const textColor =
    color === "red" ? "text-red-500" : "text-blue-500";

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <span className={`text-3xl font-bold ${textColor}`}>{value}</span>
      <span className="text-sm text-gray-600 text-center">{label}</span>
    </div>
  );
};

export default StatCard;
