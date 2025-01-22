import React, { useMemo } from "react";
import Sidebar from "../components/sidebar";
import { Stack } from "@mui/material";
import { hotelRooms } from "../assets/roomData";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerModal } from "../redux/slice";
import { useAllCustomerQuery } from "../redux/service";

/*
NOTE:- Whenever we click on particular button the room number should automatically fill in the allocated room container.
 */

const Rooms = () => {
  const dispatch = useDispatch();
  const { data, isSuccess } = useAllCustomerQuery();

  const bookedRooms = useMemo(() => {
    const occupiedRooms = new Set(
      data?.customers.map((customer) => Number(customer.cusRoom))
    );

    return hotelRooms.map((floor) => ({
      ...floor,
      rooms: floor.rooms.map((room) => ({
        ...room,
        status: !occupiedRooms.has(room.roomNo),
      })),
    }));
  }, [isSuccess]);

  const handleBooking = () => {
    dispatch(addCustomerModal(true));
  };

  return (
    <div>
      <Stack flexDirection={"row"} width={"100vw"} maxHeight={"100vh"}>
        <aside
          style={{
            minWidth: "20%",
          }}
        >
          <Sidebar />
        </aside>
        <Stack flexDirection={"column"} mx={"auto"} my={"0"}>
          <h1
            style={{
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Rooms
          </h1>
          <main
            style={{
              margin: "0 auto",
              maxHeight: "100vh",
              overflowY: "auto",
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
            }}
          >
            {bookedRooms.map((floor, floorIndex) => (
              <Stack
                key={floorIndex}
                flexDirection={"row"}
                alignItems={"center"}
                p={"1rem 2rem"}
                fontSize={"1.4rem"}
                bgcolor={"royalblue"}
                m={"2rem"}
                borderRadius={".5rem"}
                color={"#fff"}
              >
                <h1 style={{ marginRight: "1rem" }}>{floor.floor} Floor:</h1>
                <div className="gridContainer">
                  {floor.rooms.map((room, roomIndex) => (
                    <button
                      style={{
                        margin: ".5rem",
                        background: room.status ? "white" : "tomato",
                        color: room.status ? "black" : "white",
                        padding: ".5rem 1rem",
                        borderRadius: ".5rem",
                        fontSize: "1rem",
                      }}
                      key={roomIndex}
                      onClick={handleBooking}
                      disabled={room.status ? false : true}
                    >
                      {room.roomNo}
                    </button>
                  ))}
                </div>
              </Stack>
            ))}
          </main>
        </Stack>
      </Stack>
    </div>
  );
};

export default Rooms;
