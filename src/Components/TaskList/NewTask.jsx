import React from 'react'

function NewTask({ data }) {
  return (
    <div className='group flex-shrink-0 h-full w-[320px] relative'>
      <div className='bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full relative overflow-hidden'>
        {/* Background decorations */}
        <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
        <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12'></div>
        
        <div className='relative z-10'>
          <div className='flex justify-between items-center mb-4'>
            <span className='bg-orange-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg'>
              {data.category}
            </span>
            <span className='text-sm font-semibold text-amber-900 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20'>
              {data.date}
            </span>
          </div>
          
          <h2 className='text-xl font-bold text-amber-900 mb-3 leading-tight group-hover:text-amber-800 transition-colors duration-300'>
            {data.title}
          </h2>
          
          <p className='text-sm text-amber-800 mb-6 leading-relaxed line-clamp-3'>
            {data.description}
          </p>
          
          <div className='mt-auto'>
            <button id='acceptBtn' className='btn w-full bg-[#edc531] hover:bg-[#805b10] font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group/btn'>
              <span className='group-hover/btn:animate-bounce'>✨</span>
              <span className=''>Accept Task</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTask
