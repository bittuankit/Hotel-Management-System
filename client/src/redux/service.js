import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { handleAllCustomer } from "./slice";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/",
    credentials: "include",
  }),
  keepUnusedDataFor: 60 * 60 * 15,
  tagTypes: ["customer", "employee"],
  endpoints: (builder) => ({
    addCustomer: builder.mutation({
      query: (data) => ({
        url: "customer/addCus",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["customer"],
    }),
    checkEmp: builder.mutation({
      query: (data) => ({
        url: "emp/login",
        method: "POST",
        body: data,
      }),
    }),
    addEmp: builder.mutation({
      query: (data) => ({
        url: "emp/add",
        method: "POST",
        body: data,
      }),
    }),
    allCustomer: builder.query({
      query: () => ({
        url: "customer/getCus",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddCustomerMutation,
  useCheckEmpMutation,
  useAddEmpMutation,
  useAllCustomerQuery,
  useSearchCustomerQuery,
} = serviceApi;
