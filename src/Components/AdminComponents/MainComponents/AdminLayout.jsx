import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '../../ui/sidebar'
import Sidebar from '../SubComponent/Sidebar'
import { GET_LEADS } from '../Data/adminapi'

function AdminLayout() {
  useEffect(() => {
    GET_LEADS()
  })
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content: dynamically fills remaining space */}
        <main className="flex-1 overflow-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}

export default AdminLayout
