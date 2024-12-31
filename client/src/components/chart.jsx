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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const BarChart = () => {
  const { toggleTheme } = useSelector((state) => state.service);
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const transition_data = [12, 36, 12, 58, 10, 5, 11];
  const revenue_data = [6, 19, 7, 28, 9, 2, 7];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: "none",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Transition",
        data: transition_data,
        backgroundColor: toggleTheme ? "#E82561" : "rgba(53, 162, 235, 0.5)",
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: "Revenue",
        data: revenue_data,
        backgroundColor: toggleTheme ? "rgba(53, 162, 235, 0.5)" : "#E82561",
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
