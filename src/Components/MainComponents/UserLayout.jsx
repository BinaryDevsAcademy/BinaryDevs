import React from 'react'
import WhatsappComponent from './WhatsappComponent'
import Footer from './Footer'
import Header, { MobileHeader } from './Header'
import TargetCursor from '../../ReactBits/TargetCursor/TargetCursor'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div className='mt-[50px]'>
      <TargetCursor
        spinDuration={1}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      <Header />
      <MobileHeader />

      {/* USER PAGES */}
      <Outlet />

      <Footer />
      <WhatsappComponent />
    </div>
  )
}

export default UserLayout
