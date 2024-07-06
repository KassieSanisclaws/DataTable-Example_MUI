import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import theme from './components/theme/theme.ts'
import { ThemeProvider } from '@mui/material/styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
