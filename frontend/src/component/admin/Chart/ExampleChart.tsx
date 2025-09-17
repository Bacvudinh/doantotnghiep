// SalesChart.tsx
import React from "react";
import Chart from "react-apexcharts";

const SalesChart: React.FC = () => {
  // Danh sách đủ 12 tháng
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  // Giả sử dữ liệu chỉ có vài tháng
  const rawData: Record<string, number> = {
    Jan: 140,
    Feb: 200,
    Mar: 170,
    Apr: 160,
    May: 320,
    Jun: 400,
    Jul: 650,
    Aug: 350,
    Sep: 320,
    Oct: 190,
    Nov: 521,
    Dec: 200,
  };

  // Map dữ liệu thành array 12 phần tử (thiếu thì null)
  const seriesData = months.map((m) => rawData[m] ?? null);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 320,
      toolbar: { show: false },
    },
    xaxis: {
      categories: months, // ép đủ 12 tháng
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val}`,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "40%",
      },
    },
    colors: ["#0f766e"],
    tooltip: {
      y: {
        formatter: (val) => (val ? val.toLocaleString() : "No data"),
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: seriesData,
    },
  ];

  return (
    <div style={{ width: "100%", height: 320 }}>
      <Chart options={options} series={series} type="bar" height={320} />
    </div>
  );
};

export default SalesChart;
