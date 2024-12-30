import React from "react";
import Sidebar from "../components/sidebar";
import { Stack } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { BarChart } from "../components/chart";

const Dashboard = () => {
  const { toggleTheme } = useSelector((state) => state.service);

  //temp data
  const revenue = "Revenue";
  const amount = 23;
  const value = 45;
  const percent = 36;
  const color = "orange";

  return (
    <div>
      <Stack width={"100vw"} flexDirection={"row"}>
        <aside>
          <Sidebar />
        </aside>
        <main style={{ overflowY: "auto", width: "80%" }}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"80%"}
            margin={"1rem auto"}
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
              <BsSearch />
              <input
                style={
                  toggleTheme
                    ? {
                        background: "#000",
                        color: "#fff",
                        border: "0",
                        outline: "none",
                        width: "80%",
                      }
                    : {
                        background: "#fff",
                        color: "#000",
                        border: "0",
                        outline: "none",
                        width: "80%",
                      }
                }
                type="text"
                name="search"
                id="search"
                placeholder="Search customer or employee"
              />
            </div>
            <div className="bell">
              <FaRegBell />
            </div>
          </Stack>
          <Stack
            className="widget-section"
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"1rem"}
            margin={"auto"}
            width={"80%"}
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
                  <p>{revenue}</p>
                  <h4>{amount ? `₹ ${value}` : value}</h4>
                  {percent > 0 ? (
                    <span style={{ color: "orange" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingUp /> +{percent}%{" "}
                      </div>
                    </span>
                  ) : (
                    <span style={{ color: "green" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingDown /> +{percent}%{" "}
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: "none",
                }}
              >
                <div
                  className="circle"
                  style={{
                    background: `conic-gradient(${color} ${Math.abs(
                      percent
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
                    {percent}%
                  </span>
                </div>
              </div>
            </div>
            {/* Customer  */}
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
                  <p>{"Customer"}</p>
                  <h4>{amount ? `₹ ${value}` : value}</h4>
                  {percent > 0 ? (
                    <span style={{ color: "orange" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingUp /> +{percent}%{" "}
                      </div>
                    </span>
                  ) : (
                    <span style={{ color: "green" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingDown /> +{percent}%{" "}
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: "none",
                }}
              >
                <div
                  className="circle"
                  style={{
                    background: `conic-gradient(${color} ${Math.abs(
                      percent
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
                    {percent}%
                  </span>
                </div>
              </div>
            </div>
            {/* Transcation  */}
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
                  <p>{"Transcation"}</p>
                  <h4>{amount ? `₹ ${value}` : value}</h4>
                  {percent > 0 ? (
                    <span style={{ color: "orange" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingUp /> +{percent}%{" "}
                      </div>
                    </span>
                  ) : (
                    <span style={{ color: "green" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingDown /> +{percent}%{" "}
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: "none",
                }}
              >
                <div
                  className="circle"
                  style={{
                    background: `conic-gradient(${color} ${Math.abs(
                      percent
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
                    {percent}%
                  </span>
                </div>
              </div>
            </div>
            {/* Employee  */}
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
                  <p>{"Employee"}</p>
                  <h4>{amount ? `₹ ${value}` : value}</h4>
                  {percent > 0 ? (
                    <span style={{ color: "orange" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingUp /> +{percent}%{" "}
                      </div>
                    </span>
                  ) : (
                    <span style={{ color: "green" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <HiTrendingDown /> +{percent}%{" "}
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: "none",
                }}
              >
                <div
                  className="circle"
                  style={{
                    background: `conic-gradient(${color} ${Math.abs(
                      percent
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
                    {percent}%
                  </span>
                </div>
              </div>
            </div>
          </Stack>
          <Stack className="chart" width={"80%"} m={"1rem auto"}>
            <div className="line-chart">
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: "400",
                  margin: "0 auto",
                }}
              >
                Transition and Revenue
              </h1>
              <BarChart />
            </div>
          </Stack>
        </main>
      </Stack>
    </div>
  );
};

export default Dashboard;
