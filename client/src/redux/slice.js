import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "service",
  initialState: {
    openAddCustomer: false,
    openAddEmployee: false,
    toggleTheme: false,
    isUser: null,
    roomStatus: true,
    allCustomer: [],
  },
  reducers: {
    addCustomerModal: (state, action) => {
      state.openAddCustomer = action.payload;
    },
    addEmployeeModal: (state, action) => {
      state.openAddEmployee = action.payload;
    },
    handleToggleTheme: (state) => {
      state.toggleTheme = !state.toggleTheme;
    },
    handleIsUser: (state, action) => {
      if (state) {
        state.isUser = action.payload;
      } else {
        state.isUser = null;
      }
    },
    handleRoomStatus: (state) => {
      state.roomStatus = !state.roomStatus;
    },
    handleAllCustomer: (state, action) => {
      const newCustomerArr = [...action.payload.customers];
      if (state.allCustomer.length == 0) {
        state.allCustomer = newCustomerArr;
        return;
      }
      const existingCustomer = [state.allCustomer];
      newCustomerArr.forEach((e) => {
        const existIndex = existingCustomer.findIndex((i) => {
          return i._id === e._id;
        });
        if (existIndex !== -1) {
          existingCustomer[existIndex] = e;
        } else {
          existingCustomer.push(e);
        }
      });
      state.allCustomer = existingCustomer;
    },
  },
});

export const {
  addCustomerModal,
  addEmployeeModal,
  handleToggleTheme,
  handleIsUser,
  handleRoomStatus,
  handleAllCustomer,
  handleSearchedCustomer,
} = serviceSlice.actions;

export default serviceSlice.reducer;
