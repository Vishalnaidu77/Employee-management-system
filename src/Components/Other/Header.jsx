import React, { useState } from 'react'
import { motion, AnimatePresence, scale } from "motion/react"

function Header({ changeUser, data }) {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const logOutUser = () => {
    changeUser('');
    setShowDropdown(false);
  };

  const userName = data ? data.firstName : 'Admin';
  const userRole = data ? 'Employee' : 'Admin';


  return (
    <div className='bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6 mb-8'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <div className='w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg'>
              <span className='text-white font-bold text-xl'>
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className='absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse'></div>
          </div>
          
          <div>
            <div className='flex items-center sm:space-x-2 mb-1'>
              <h1 className='text-2xl font-bold text-white'>Good Morning</h1>
              <span className='text-2xl animate-bounce delay-100'>👋</span>
            </div>
            <div className='sm:flex items-center space-x-2'>
              <p className='text-lg text-white/80 font-medium mb-2 sm:mb-0'>Welcome, {userName}!</p>
              <span className='px-2 py-1 bg-purple-500/20 text-purple-200 text-xs font-semibold rounded-full border border-purple-300/20'>
                {userRole}
              </span>
            </div>
          </div>
        </div>


        <div className="relative">
          <motion.button
            whileHover={{scale:1.07}}
            whileTap={{scale: 0.98}}
            onClick={() => setShowDropdown(!showDropdown)}
            className="btn bg-white/10 backdrop-blur-sm  border-white/20 text-white font-semibold px-4 sm:px-6 py-3 rounded-xl flex items-center space-x-2 group"
          >
            <span className='sm:pl-0 pl-2'>⚙️</span>
            <span className='hidden sm:block'>Settings</span>
            <span
              className={`transition-transform duration-300 hidden sm:block ${
                showDropdown ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </motion.button>

          <AnimatePresence>
            {showDropdown && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute right-0 mt-2 w-32 sm:w-40 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl z-50"
              >
                <div className="py-2">
                  <button
                    onClick={logOutUser}
                    className="w-full flex items-center space-x-3 justify-center px-4 py-1 text-white hover:bg-red-500/20 rounded-lg transition-all duration-300 group"
                  >
                    <span className="group-hover:animate-bounce">🚪</span>
                    <span className="font-medium">Log Out</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

export default Header;
