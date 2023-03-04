import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const Rapid_API_Key = import.meta.env.VITE_Rapid_API_Key;
const Rapid_Key_Value = import.meta.env.VITE_Rapid_Key_Value;
const Rapid_API_Host = import.meta.env.VITE_Rapid_API_Host;
const Rapid_API_Host_Value = import.meta.env.VITE_Rapid_API_Host_Value;
const BASE_URL = import.meta.env.VITE_BASE_URL

export const getJobsApi = createApi({
    reducerPath: "getJobsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set(Rapid_API_Key, Rapid_Key_Value)
            headers.set(Rapid_API_Host, Rapid_API_Host_Value)
            return headers;
        }
    }),
    tagTypes: ['Jobs'],
    endpoints: (builder) => ({
        getSearchedPosts: builder.query({
            query: (query = "Software Developer", num_pages = 2, job_requirements = "", employment_types = "") => {
                const simpleJobQuery = `/search?query=${query}&num_pages=${num_pages}`
                if (job_requirements && employment_types) return `${simpleJobQuery}&employment_types=${employment_types}&job_requirements=${job_requirements}`
                if (job_requirements) return `${simpleJobQuery}&job_requirements=${job_requirements}`
                if (employment_types) return `${simpleJobQuery}&employment_types=${employment_types}`
                return simpleJobQuery;
            },
            providesTags: ['Jobs'],
        }),
        setJobDetails: builder.query({
            query: (job_id) => `/job-details?job_id=${job_id}`,
            providesTags: ['Jobs'],
        })
    })
})
//https://jsearch.p.rapidapi.com/search?query=Python developer in Texas, USA&num_pages=1
//{ query = 'Python developer in Texas, USA', num_pages = '1' }
export const { useGetSearchedPostsQuery, useSetJobDetailsQuery } = getJobsApi

export default getJobsApi;