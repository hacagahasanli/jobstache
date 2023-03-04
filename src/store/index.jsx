import { configureStore } from '@reduxjs/toolkit'
import getJobsApi from '../client'
import { jobReducer } from './slices'

export const store = configureStore({
    reducer: {
        job: jobReducer,
        [getJobsApi.reducerPath]: getJobsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getJobsApi.middleware),
})
