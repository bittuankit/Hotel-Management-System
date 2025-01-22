import React from "react";
import Sidebar from "../components/sidebar";
import { Stack } from "@mui/material";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { BarChart, DoughnutChart } from "../components/chart";
import { BiMaleFemale } from "react-icons/bi";
import { useDashboardApiQuery } from "../redux/service";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { toggleTheme } = useSelector((state) => state.service);

  const { data } = useDashboardApiQuery();
  const stats = data?.stats;

  const color = "#eb3370";

  return (
    <div>
      <Stack width={"100vw"} flexDirection={"row"}>
        <aside
          style={{
            minWidth: "20%",
          }}
        >
          <Sidebar />
        </aside>
        <main
          style={{
            width: "80%",
            maxHeight: "100vh",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"95%"}
            margin={"2rem"}
            paddingBottom={".8rem"}
            borderBottom={"2px solid royalblue"}
          >
            <div
              className="search"
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                width: "100%",
              }}
            >
              <h1 style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                Admin Dashboard
              </h1>
            </div>
          </Stack>
          <Stack
            className="widget-section"
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"1rem"}
            width={"90%"}
            margin={"1rem auto"}
          >
            {/* Revenue  */}
            <div
              className="revenue"
              style={{
                background: "royalblue",
                width: "25%",
                display: "flex",
                padding: "1rem .5rem",
                borderRadius: ".5rem",
                color: "#fff",
              }}
            >
              <div
                className="revenue-info"
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="info-items">
                  <p>Revenue</p>
                  <h4>{stats?.revenue ? `₹ ${stats?.revenue}` : 0}</h4>
                  {stats?.percentage.revenue > 0 ? (
                    <span style={{ color: "orange" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingUp /> +
                        {`${
                          stats?.percentage.revenue > 1000
                            ? 999
                            : stats?.percentage.revenue
                        }`}
                        %{" "}
                      </div>
                    </span>
                  ) : (
                    <span style={{ color: "orange" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingDown /> -
                        {`${
                          stats?.percentage.revenue < -1000
                            ? -999
                            : stats?.percentage.revenue
                        }`}
                        %{" "}
                      </div>
                    </span>
                  )}
                </div>
              </div>
              <div
                className="revenue-circle"
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flex: "none",
                }}
              >
                <div
                  className="circle"
                  style={{
                    background: `conic-gradient(${color} ${Math.abs(
                      stats?.percentage.revenue
                    )}%, #fff7 ${0}%)`,
                  }}
                >
                  <span
                    style={{
                      zIndex: "44",
                      position: "relative",
                      color: `${color}`,
                    }}
                  >
                    {stats?.percentage.revenue > 0 &&
                      `${
                        stats?.percentage.revenue > 1000
                          ? 999
                          : stats?.percentage.revenue
                      }`}
                    {stats?.percentage.revenue < 0 &&
                      `${
                        stats?.percentage.revenue < -1000
                          ? -999
                          : stats?.percentage.revenue
                      }`}
                    %
                  </span>
                </div>
              </div>
            </div>
            {/* Customer  */}
            <div
              className="customer"
              style={{
                background: "royalblue",
                width: "25%",
                display: "flex",
                padding: "1rem .5rem",
                borderRadius: ".5rem",
                color: "#fff",
              }}
            >
              <div
                className="customer-info"
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="info-items">
                  <p>Customer</p>
                  <h4>{stats?.customerCount}</h4>
                  {stats?.percentage.customerPercentage > 0 ? (
                    <span style={{ color: "orange" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingUp /> +
                        {stats?.percentage.customerPercentage > 1000
                          ? 999
                          : stats?.percentage.customerPercentage}
                        %{" "}
                      </div>
                    </span>
                  ) : (
                    <span style={{ color: "orange" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingDown /> +
                        {stats?.percentage.customerPercentage < -1000
                          ? -999
                          : stats?.percentage.customerPercentage}
                        %{" "}
                      </div>
                    </span>
                  )}
                </div>
              </div>
              <div
                className="customer-circle"
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flex: "none",
                }}
              >
                <div
                  className="circle"
                  style={{
                    background: `conic-gradient(${color} ${Math.abs(
                      stats?.percentage.customerPercentage
                    )}%, #fff7 ${0}%)`,
                  }}
                >
                  <span
                    style={{
                      zIndex: "44",
                      position: "relative",
                      color: `${color}`,
                    }}
                  >
                    {stats?.percentage.customerPercentage > 0 &&
                      `${
                        stats?.percentage.customerPercentage > 1000
                          ? 999
                          : stats?.percentage.customerPercentage
                      }`}
                    {stats?.percentage.customerPercentage < 0 &&
                      `${
                        stats?.percentage.customerPercentage < -1000
                          ? -999
                          : stats?.percentage.customerPercentage
                      }`}
                    %
                  </span>
                </div>
              </div>
            </div>
            {/* Gross Profit */}
            <div
              className="gross-profit"
              style={{
                background: "royalblue",
                width: "25%",
                display: "flex",
                padding: "1rem .5rem",
                borderRadius: ".5rem",
                color: "#fff",
              }}
            >
              <div
                className="profit-info"
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="info-items">
                  <p>Profit</p>
                  <h4>{`₹ ${stats?.expenditure}`}</h4>
                  {stats?.percentage.expenditure > 0 ? (
                    <span style={{ color: "orange" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingUp /> +
                        {stats?.percentage.expenditure > 1000
                          ? 999
                          : stats?.percentage.expenditure}
                        %{" "}
                      </div>
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "orange",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingDown />{" "}
                        {stats?.percentage.expenditure > -1000
                          ? -999
                          : stats?.percentage.expenditure}
                        %{" "}
                      </div>
                    </span>
                  )}
                </div>
              </div>
              <div
                className="profit-circle"
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flex: "none",
                }}
              >
                <div
                  className="circle"
                  style={{
                    background: `conic-gradient(${color} ${Math.abs(
                      stats?.percentage.expenditure
                    )}%, #fff7 ${0}%)`,
                  }}
                >
                  <span
                    style={{
                      zIndex: "44",
                      position: "relative",
                      color: `${color}`,
                    }}
                  >
                    {stats?.percentage.expenditure > 0 &&
                      `${
                        stats?.percentage.expenditure > 1000
                          ? 999
                          : stats?.percentage.expenditure
                      }`}
                    {stats?.percentage.expenditure < 0 &&
                      `${
                        stats?.percentage.expenditure < -1000
                          ? -999
                          : stats?.percentage.expenditure
                      }`}
                    %
                  </span>
                </div>
              </div>
            </div>
            {/* Employee  */}
            <div
              className="employee"
              style={{
                background: "royalblue",
                width: "25%",
                display: "flex",
                padding: "1rem .5rem",
                borderRadius: ".5rem",
                color: "#fff",
              }}
            >
              <div
                className="employee-info"
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="info-items">
                  <p>Employee</p>
                  <h4>{stats?.employeeCount}</h4>
                  {stats?.percentage.employeePercentage > 0 ? (
                    <span style={{ color: "orange" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingUp /> +
                        {stats?.percentage.employeePercentage > 1000
                          ? 999
                          : stats?.percentage.employeePercentage}
                        %{" "}
                      </div>
                    </span>
                  ) : (
                    <span style={{ color: "orange" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingDown /> +
                        {stats?.percentage.customerPercentage > -1000
                          ? -999
                          : stats?.percentage.customerPercentage}
                        %{" "}
                      </div>
                    </span>
                  )}
                </div>
              </div>
              <div
                className="employee-circle"
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flex: "none",
                }}
              >
                <div
                  className="circle"
                  style={{
                    background: `conic-gradient(${color} ${Math.abs(
                      stats?.percentage.employeePercentage
                    )}%, #fff7 ${0}%)`,
                  }}
                >
                  <span
                    style={{
                      zIndex: "44",
                      position: "relative",
                      color: `${color}`,
                    }}
                  >
                    {stats?.percentage.employeePercentage > 0 &&
                      `${
                        stats?.percentage.employeePercentage > 1000
                          ? 999
                          : stats?.percentage.employeePercentage
                      }`}
                    {stats?.percentage.employeePercentage < 0 &&
                      `${
                        stats?.percentage.employeePercentage < -1000
                          ? -999
                          : stats?.percentage.employeePercentage
                      }`}
                    %
                  </span>
                </div>
              </div>
            </div>
          </Stack>
          <Stack
            className="chart"
            width={"95%"}
            margin={"2rem"}
            flexDirection={"row"}
          >
            <div className="line-chart" style={{ width: "70%" }}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: "400",
                  margin: "0 auto",
                }}
              >
                Profit and Revenue
              </h1>
              <BarChart
                customerChart={stats?.charts.customers}
                revenueChart={stats?.charts.revenue}
              />
            </div>
            <div
              className="gender"
              style={{
                width: "30%",
                position: "relative",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  margin: "2rem 0",
                  fontSize: "1.5rem",
                }}
              >
                Gender Ratio
              </h2>
              <DoughnutChart
                labels={["Male", "Female"]}
                data={[stats?.customerRatio.male, stats?.customerRatio.female]}
                backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
                cutout={115}
              />
              <p
                style={{
                  position: "absolute",
                  top: "53%",
                  left: "50%",
                  transform: "translate(-50%,-50%",
                  fontSize: "2.5rem",
                  color: "#000b",
                }}
              >
                <BiMaleFemale color={toggleTheme ? "fff" : "000"} />
              </p>
            </div>
          </Stack>
        </main>
      </Stack>
    </div>
  );
};

export default Dashboard;
