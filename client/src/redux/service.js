import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
      invalidatesTags: ["employee"],
    }),

    addEmp: builder.mutation({
      query: (data) => ({
        url: "emp/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["employee"],
    }),

    allCustomer: builder.query({
      query: () => ({
        url: "customer/getCus",
        method: "GET",
      }),
      providesTags: ["customer"],
    }),

    dashboardApi: builder.query({
      query: () => ({
        url: "stats/details",
        method: "GET",
      }),
    }),

    updateCustomer: builder.mutation({
      query: (data) => ({
        url: "customer/updateCustomer",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["customer"],

      async onQueryStarted(
        { customerId, ...updatedData },
        { dispatch, queryFulfilled }
      ) {
        const patchResult = dispatch(
          serviceApi.util.updateQueryData(
            "activeCustomer",
            undefined,
            (draft) => {
              const customer = draft?.activeCustomers?.find(
                (c) => c._id === customerId
              );
              if (customer) {
                Object.assign(customer, updatedData);
              }
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    activeCustomer: builder.query({
      query: () => ({
        url: "customer/activeCustomer",
        method: "GET",
      }),
      providesTags: ["customer"],
    }),
  }),
});

export const {
  useAddCustomerMutation,
  useCheckEmpMutation,
  useAddEmpMutation,
  useAllCustomerQuery,
  useDashboardApiQuery,
  useUpdateCustomerMutation,
  useActiveCustomerQuery,
} = serviceApi;
