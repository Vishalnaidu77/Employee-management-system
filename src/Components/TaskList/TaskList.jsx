import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({ data }) {
  return (
    <div className='mt-10'>
      <div className='mb-6'>
        <h2 className='text-3xl font-bold text-white mb-2'>Your Tasks</h2>
        <p className='text-white/70'>Manage and track your assigned tasks</p>
      </div>
      
      <div className='bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-6'>
        <div id='taskList' className='h-[55%] overflow-x-auto flex items-start justify-start gap-6 flex-nowrap w-full py-5'>
          {data.tasks.map((task, idx) => {
            if (task.active) {
              return <AcceptTask key={idx} data={task} />;
            }
            if (task.newTask) {
              return <NewTask key={idx} data={task} />;
            }
            if (task.completed) {
              return <CompleteTask key={idx} data={task} />;
            }
            if (task.failed) {
              return <FailedTask key={idx} data={task} />;
            }
            return null;
          })}
          
          {data.tasks.length === 0 && (
            <div className='w-full text-center py-12'>
              <div className='text-6xl mb-4'>📋</div>
              <h3 className='text-xl font-semibold text-white/80 mb-2'>No tasks assigned yet</h3>
              <p className='text-white/60'>Tasks will appear here when assigned to you</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskList;