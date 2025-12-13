import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

import Header, { MobileHeader } from './Components/MainComponents/Header'
import Router from './Components/MainComponents/Router'
import Footer from './Components/MainComponents/Footer'
import TargetCursor from './ReactBits/TargetCursor/TargetCursor'
import { Provider } from 'react-redux'
import DataStore from './data/DataStore'
import HeaderDockItem from './Components/MainComponents/HeaderDockItem'
import WhatsappComponent from './Components/MainComponents/WhatsappComponent'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={DataStore}>
        <TargetCursor 
          spinDuration={1}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
        <Header></Header>
        <MobileHeader></MobileHeader>
        <Router></Router>
        <Footer></Footer>
        {/* <WhatsappComponent></WhatsappComponent> */}
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
