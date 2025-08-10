import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

function AllTask() {
  const [userData, setUserData] = useContext(AuthContext);

  // Safety check to ensure userData is an array
  const employees = Array.isArray(userData) ? userData : [];

  return (
    <div className='bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-6 mt-5'>
      <div className='mb-6'>
        <div className='flex items-center space-x-3 mb-4'>
          <div className='w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center'>
            <span className='text-white text-xl'>📊</span>
          </div>
          <h2 className='text-3xl font-bold text-white'>Employee Overview</h2>
        </div>
        <p className='text-white/70'>Monitor all employee task statistics and performance</p>
      </div>
      
      <div className='overflow-x-auto'>
        <div className='bg-gradient-to-r from-purple-600 to-indigo-700 mb-4 py-4 px-6 flex rounded-2xl text-white shadow-lg'>
          <h2 className='text-lg font-semibold w-1/5 text-center'>Employee</h2>
          <h2 className='text-lg font-semibold w-1/5 text-center'>Active</h2>
          <h2 className='text-lg font-semibold w-1/5 text-center'>New</h2>
          <h2 className='text-lg font-semibold w-1/5 text-center'>Completed</h2>
          <h2 className='text-lg font-semibold w-1/5 text-center'>Failed</h2>
        </div>
        
        <div className='max-h-96 overflow-y-auto space-y-3'>
          {employees.length > 0 ? (
            employees.map((employee, idx) => (
              <div key={idx} className='bg-white/5 hover:bg-white/10 border border-white/20 py-4 px-6 flex justify-between rounded-xl transition-all duration-300 shadow-sm'>
                <div className='w-1/5 text-center'>
                  <div className='flex items-center justify-center space-x-2'>
                    <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center'>
                      <span className='text-white text-sm font-bold'>
                        {employee.firstName ? employee.firstName.charAt(0).toUpperCase() : 'U'}
                      </span>
                    </div>
                    <span className='text-md font-semibold text-white'>{employee.firstName || 'Unknown'}</span>
                  </div>
                </div>
                <div className='w-1/5 text-center'>
                  <span className='inline-block bg-blue-500/20 text-blue-200 font-semibold px-3 py-1 rounded-full text-sm'>
                    {employee.taskStats?.active || 0}
                  </span>
                </div>
                <div className='w-1/5 text-center'>
                  <span className='inline-block bg-amber-500/20 text-amber-200 font-semibold px-3 py-1 rounded-full text-sm'>
                    {employee.taskStats?.newTask || 0}
                  </span>
                </div>
                <div className='w-1/5 text-center'>
                  <span className='inline-block bg-emerald-500/20 text-emerald-200 font-semibold px-3 py-1 rounded-full text-sm'>
                    {employee.taskStats?.completed || 0}
                  </span>
                </div>
                <div className='w-1/5 text-center'>
                  <span className='inline-block bg-red-500/20 text-red-200 font-semibold px-3 py-1 rounded-full text-sm'>
                    {employee.taskStats?.failed || 0}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className='text-center py-12'>
              <div className='text-6xl mb-4'>👥</div>
              <h3 className='text-xl font-semibold text-white/80 mb-2'>No employees found</h3>
              <p className='text-white/60'>Employee data will appear here when available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllTask
