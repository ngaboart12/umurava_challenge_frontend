import { apiSlice } from "./ApiSlice";

const challengeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    challenge: builder.query({
      query: () => ({ url: "/challenge" }),
    }),
    singleChallenge: builder.query({
      query: (id) => ({ url: `/challenge/${id}` }),
    }),
    createChallenge: builder.mutation({
      query: (data) => ({
        url: "/challenge",
        method: "POST",
        body: data,
      }),
    }),
    deleteChallenge: builder.mutation({
      query: (id) => ({
        url: `/challenge/${id}`,
        method: "DELETE",
      }),
    }),
    updateChallenge: builder.mutation({
      query: ({ id,data }) => ({
        url: `/challenge/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    report: builder.query({
      query: ()=> ({url: "/challenge/admin/analytics"})
    })
  }),
});

export const {
  useChallengeQuery,
  useCreateChallengeMutation,
  useSingleChallengeQuery,
  useDeleteChallengeMutation,
  useUpdateChallengeMutation,
  useReportQuery
} = challengeApi;
