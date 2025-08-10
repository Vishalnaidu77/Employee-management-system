import React from 'react'

function AcceptTask({ data }) {
  return (
    <div className='group flex-shrink-0 h-full w-[320px]'>
      <div className='bg-gradient-to-br from-red-400 via-rose-500 to-pink-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full relative overflow-hidden'>
        {/* Background decorations */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
        
        <div className='relative z-10 h-full flex flex-col'>
          <div className='flex justify-between items-center mb-4'>
            <span className='bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg'>
              {data.category}
            </span>
            <span className='text-sm font-semibold text-red-900 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20'>
              {data.date}
            </span>
          </div>
          
          <h2 className='text-xl font-bold text-red-900 mb-3 leading-tight'>
            {data.title}
          </h2>
          
          <p className='text-sm text-red-800 mb-6 leading-relaxed line-clamp-3 flex-grow'>
            {data.description}
          </p>
          
          <div className='flex justify-between gap-3 mt-auto'>
            <button className='btn flex-1 bg-emerald-500 hover:bg-emerald-600  font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group/btn'>
              <span className='group-hover/btn:animate-bounce'>✅</span>
              <span className='text-xs'>Complete</span>
            </button>
            <button className='btn flex-1 bg-red-600 hover:bg-red-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group/btn'>
              <span className='group-hover/btn:animate-bounce'>❌</span>
              <span className='text-xs'>Failed</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcceptTask
