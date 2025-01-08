import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { lastSixMonths } from "../utils/features";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const BarChart = ({ customerChart, revenueChart }) => {
  const { toggleTheme } = useSelector((state) => state.service);
  const { lastSixMonths: labels } = lastSixMonths();
  const transition_data = customerChart;
  const revenue_data = revenueChart;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: toggleTheme ? "#fff" : "#000",
          font: {
            size: 14,
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: toggleTheme ? "#fff" : "#000",
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: toggleTheme ? "#fff" : "#000",
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Profit",
        data: transition_data,
        backgroundColor: toggleTheme
          ? "hsl(340,82%,56%)"
          : "rgba(53,162,235,0.8)",
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: "Revenue",
        data: revenue_data,
        backgroundColor: toggleTheme
          ? "rgba(53,162,235,0.8)"
          : "hsl(340,82%,56%)",
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export const DoughnutChart = ({ labels, data, backgroundColor, cutout }) => {
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };
  const doughnutData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
      },
    ],
  };
  return <Doughnut options={doughnutOptions} data={doughnutData} />;
};
