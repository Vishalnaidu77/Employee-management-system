import React from 'react'

function CompleteTask({ data }) {
  return (
    <div className='group flex-shrink-0 h-full w-[320px]'>
      <div className='bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full relative overflow-hidden'>
        {/* Success animation elements */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
        
        <div className='relative z-10'>
          <div className='flex justify-between items-center mb-4'>
            <span className='bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg'>
              {data.category}
            </span>
            <span className='text-sm font-semibold text-emerald-900 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20'>
              {data.date}
            </span>
          </div>
          
          <h2 className='text-xl font-bold text-emerald-900 mb-3 leading-tight'>
            {data.title}
          </h2>
          
          <p className='text-sm text-emerald-800 mb-6 leading-relaxed'>
            {data.description}
          </p>
          
          <div className='mt-auto'>
            <button className='w-full text-black hover:bg-white/30 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group/btn'>
              <span className='group-hover/btn:animate-bounce'>🎉</span>
              <span className='text-black'>Completed</span>
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteTask
