import React from 'react'

function TaskNumber({ data }) {
  const taskCards = [
    {
      title: 'New Tasks',
      value: data.taskStats.newTask,
      icon: '📋',
      gradient: 'from-amber-500 to-orange-600',
      bgPattern: 'bg-amber-500/10'
    },
    {
      title: 'Active Tasks',
      value: data.taskStats.active,
      icon: '⚡',
      gradient: 'from-blue-500 to-cyan-600',
      bgPattern: 'bg-blue-500/10'
    },
    {
      title: 'Completed',
      value: data.taskStats.completed,
      icon: '✅',
      gradient: 'from-emerald-500 to-green-600',
      bgPattern: 'bg-emerald-500/10'
    },
    {
      title: 'Failed Tasks',
      value: data.taskStats.failed,
      icon: '❌',
      gradient: 'from-red-500 to-pink-600',
      bgPattern: 'bg-red-500/10'
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
      {taskCards.map((card, index) => (
        <div
          key={index}
          className={`group relative bg-gradient-to-br ${card.gradient} rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden`}
        >
          {/* Background pattern */}
          <div className={`absolute inset-0 ${card.bgPattern} opacity-20`}></div>
          <div className='absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10'></div>
          
          <div className='relative z-10 flex items-center justify-between'>
            <div>
              <h2 className='text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300'>
                {card.value}
              </h2>
              <h3 className='text-lg font-semibold text-white/90'>{card.title}</h3>
            </div>
            <div className='w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300'>
              <span className='text-3xl group-hover:scale-110 transition-transform duration-300'>
                {card.icon}
              </span>
            </div>
          </div>

          {/* Hover effect */}
          <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
      ))}
    </div>
  );
}

export default TaskNumber
