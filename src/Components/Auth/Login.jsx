import React, { useState } from 'react'

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    handleLogin(email, password);
    setEmail('');
    setPassword('');
    setIsLoading(false);
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 w-full h-full'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
        <div className='absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500'></div>
      </div>

      <div className='relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 max-w-md w-full mx-4'>
        {/* Logo/Brand */}
        <div className='text-center mb-8'>
          <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg'>
            <span className='text-2xl font-bold text-white'>EMS</span>
          </div>
          <h1 className='text-3xl font-bold text-white mb-2'>Welcome Back</h1>
          <p className='text-white/70'>Sign in to your workspace</p>
        </div>

        <form onSubmit={submitHandler} className='space-y-6'>
          <div className='space-y-2'>
            <label className='block text-sm font-medium text-white/80'>Email Address</label>
            <div className='relative'>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 py-4 px-5 text-lg focus:border-purple-400 focus:bg-white/15 transition-all duration-300 outline-none'
                type="email"
                placeholder='Enter your email'
              />
              <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
            </div>
          </div>

          <div className='space-y-2'>
            <label className='block text-sm font-medium text-white/80'>Password</label>
            <div className='relative'>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 py-4 px-5 text-lg focus:border-purple-400 focus:bg-white/15 transition-all duration-300 outline-none'
                type="password"
                placeholder='Enter your password'
              />
              <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
            </div>
          </div>

          <button 
            disabled={isLoading}
            className='w-full relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-xl py-4 px-6 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:transform-none group overflow-hidden'
          >
            <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <span className='relative flex items-center justify-center space-x-2'>
              {isLoading ? (
                <>
                  <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}


export default Login;