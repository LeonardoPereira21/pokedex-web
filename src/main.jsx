import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>

)
