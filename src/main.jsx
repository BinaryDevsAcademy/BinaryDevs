import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import Router from './Components/MainComponents/Router'
import { Provider } from 'react-redux'
import DataStore from './data/DataStore'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={DataStore}>
        <Router></Router>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
