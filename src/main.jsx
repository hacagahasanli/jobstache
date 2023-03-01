import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { getJobsApi } from './client'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApiProvider api={getJobsApi}>
        <App />
    </ApiProvider>
)
