import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { getJobsApi } from './client'
import { ThemeProvider } from 'styled-components'
import { theme } from "./assets/theme"

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApiProvider api={getJobsApi}>
        <ThemeProvider {...{ theme }}>
            <App />
        </ThemeProvider>
    </ApiProvider>
)
