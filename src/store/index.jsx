import { configureStore } from '@reduxjs/toolkit'
import getJobsApi from '../client'

export const store = configureStore({
    reducer: {
        [getJobsApi.reducerPath]: getJobsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getJobsApi.middleware),
})
