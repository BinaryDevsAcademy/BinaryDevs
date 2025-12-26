import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function AdminHome() {
  return (
    <main className="flex h-screen">
      <Outlet></Outlet>
    </main>
  )
}

export default AdminHome
