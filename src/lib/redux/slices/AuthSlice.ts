import { apiSlice } from "./ApiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({ url: "/auth/login", method: "POST", body: data }),
    }),
    register: builder.mutation({
      query: (data) => ({ url: "/auth/signup", method: "POST", body: data }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
