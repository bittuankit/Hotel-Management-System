import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { handleAllCustomer } from "./slice";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1/",
    credentials: "include",
  }),
  keepUnusedDataFor: 60 * 60 * 15,
  tagTypes: ["POST", "GET"],
  endpoints: (builder) => ({
    addCustomer: builder.mutation({
      query: (data) => ({
        url: "customer/addCus",
        method: "POST",
        body: data,
      }),
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
      providesTags: (result, error) => {
        return result
          ? [
              ...result.customers.map(({ _id }) => ({
                type: "Customers",
                id: _id,
              })),
              { type: "Customers", id: "LIST" },
            ]
          : [{ type: "Customers", id: "LIST" }];
      },
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(handleAllCustomer(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    searchCustomer: builder.query({
      query: (query) => ({
        url: `/customer/search/${query}`,
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
