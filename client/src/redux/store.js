import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./slice";
import { serviceApi } from "./service";

export default configureStore({
  reducer: {
    service: serviceReducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware({ serializableCheck: false }).concat( // Only if seralizalbleCheck Error.
  //     serviceApi.middleware
  //   );
  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serviceApi.middleware),
});
