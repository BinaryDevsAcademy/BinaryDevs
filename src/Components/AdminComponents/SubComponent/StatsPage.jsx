import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

// Sample data for chart
const data = [
  { name: 'Jan', leads: 30 },
  { name: 'Feb', leads: 45 },
  { name: 'Mar', leads: 20 },
  { name: 'Apr', leads: 60 },
]

function StatsPage() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen p-6 w-full">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Statistics Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 w-full">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center hover:shadow-lg transition w-full">
          <div className="text-gray-500 uppercase text-sm mb-2">Total Leads</div>
          <div className="text-3xl font-bold text-gray-900">60</div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center hover:shadow-lg transition w-full">
          <div className="text-gray-500 uppercase text-sm mb-2">New Leads</div>
          <div className="text-3xl font-bold text-green-600">30</div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center hover:shadow-lg transition w-full">
          <div className="text-gray-500 uppercase text-sm mb-2">Last Month Leads</div>
          <div className="text-3xl font-bold text-red-600">30</div>
        </div>
      </div>

      {/* Additional Section: Chart */}
      <div className="bg-white rounded-xl shadow p-6 w-full flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Leads Growth</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="leads" fill="#4f46e5" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Optional: Future Section */}
      <div className="mt-8 bg-white rounded-xl shadow p-6 w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Other Stats / Reports</h2>
        <p className="text-gray-500">You can add more components here, like tables, recent activities, or KPIs.</p>
      </div>
    </div>
  )
}

export default StatsPage
