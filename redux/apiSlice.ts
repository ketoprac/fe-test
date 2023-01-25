// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Repo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
}

type Repos = Repo[];

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/users/",
  }),
  endpoints: (builder) => ({
    getUserRepos: builder.query<Repo, string>({
      query: (username: string) => `${username}/repos`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserReposQuery } = githubApi;
