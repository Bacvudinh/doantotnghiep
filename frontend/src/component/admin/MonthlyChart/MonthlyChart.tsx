import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

interface MonthlyChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

const MonthlyChart: React.FC<MonthlyChartProps> = ({ labels, datasets }) => {
  const data = {
    labels,
    datasets: datasets.map((ds) => ({
      ...ds,
      fill: false,
      tension: 0.2,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
  };

  return (
    <div className="p-4 flex-1">
      <h3 className="font-semibold mb-3">Biểu đồ đơn hàng theo trong tháng</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default MonthlyChart;
