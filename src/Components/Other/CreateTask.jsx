import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const newTask = {
        title: taskTitle,
        description: taskDescription,
        date: taskDate,
        category: category,
        active: false,
        newTask: true,
        failed: false,
        completed: false
      };

      // Update state
      const updatedData = userData.map(elem => {
        if (assignTo === elem.firstName) {
          return {
            ...elem,
            tasks: [...elem.tasks, newTask],
            taskStats: {
              ...elem.taskStats,
              newTask: elem.taskStats.newTask + 1
            }
          };
        }
        return elem;
      });

      // Update localStorage
      localStorage.setItem('Employee', JSON.stringify(updatedData));
      
      // Update state
      setUserData(updatedData);

      // Reset form
      setTaskTitle('');
      setTaskDate('');
      setAssignTo('');
      setCategory('');
      setTaskDescription('');
    } catch (error) {
      console.error('Error creating task:', error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className='bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 mt-7'>
      <div className='mb-8'>
        <div className='flex items-center space-x-3 mb-4'>
          <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center'>
            <span className='text-white text-xl'>✨</span>
          </div>
          <h2 className='text-3xl font-bold text-white'>Create New Task</h2>
        </div>
        <p className='text-white/70'>Fill in the details below to create a new task for your team</p>
      </div>

      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between gap-8'>
        <div className='w-full lg:w-1/2 flex flex-col gap-6'>
          <div className='space-y-2'>
            <label className='block text-sm font-semibold text-white/90'>Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='w-full text-sm py-4 px-5 rounded-xl outline-none bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:bg-white/15 transition-all duration-300'
              type="text"
              placeholder='Enter task title'
              required
            />
          </div>

          <div className='space-y-2'>
            <label className='block text-sm font-semibold text-white/90'>Due Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='w-full text-sm py-4 px-5 rounded-xl outline-none bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:bg-white/15 transition-all duration-300'
              type="date"
              required
            />
          </div>

          <div className='space-y-2'>
            <label className='block text-sm font-semibold text-white/90'>Assign to</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className='w-full text-sm py-4 px-5 rounded-xl outline-none bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:bg-white/15 transition-all duration-300'
              type="text"
              placeholder='Employee name'
              required
            />
          </div>

          <div className='space-y-2'>
            <label className='block text-sm font-semibold text-white/90'>Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='w-full text-sm py-4 px-5 rounded-xl outline-none bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:bg-white/15 transition-all duration-300'
              type="text"
              placeholder='Design, Development, Marketing, etc.'
              required
            />
          </div>
        </div>

        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-start h-full space-y-6'>
            <div className='w-full space-y-2'>
              <label className='block text-sm font-semibold text-white/90'>Description</label>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className='w-full h-44 py-4 px-5 rounded-xl outline-none bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 focus:bg-white/15 transition-all duration-300 resize-none'
                placeholder='Enter detailed task description...'
                required
              />
            </div>
            
            <button
              disabled={isCreating}
              className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none group overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <span className='relative flex items-center justify-center space-x-2'>
                {isCreating ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                    <span>Creating Task...</span>
                  </>
                ) : (
                  <>
                    <span>✨</span>
                    <span>Create Task</span>
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateTask