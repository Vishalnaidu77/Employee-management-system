import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

function AdminDashboard({ changeUser }) {
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Animated background */}
      <div className='fixed inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-500'></div>
      </div>
      
      <div className='relative z-10 p-6 lg:p-10 max-w-7xl mx-auto space-y-8'>
        <Header changeUser={changeUser} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
}
export default AdminDashboard
