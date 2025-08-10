  import { useContext, useEffect, useState } from 'react'
  import './App.css'
  import Login from './Components/Auth/Login'
  import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
  import AdminDashboard from './Components/Dashboard/AdminDashboard'
  import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
  import { AuthContext } from './Context/AuthProvider'

  function App() {
    const [user, setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
    const [userData, setUserData, isAuthLoading] = useContext(AuthContext);
    const [isCheckingSession, setIsCheckingSession] = useState(true);
  
    // Check for existing login session on component mount
    useEffect(() => {
      const checkExistingLogin = () => {
        try {
          const loggedInUser = localStorage.getItem('loggedInUser');
          
          if (loggedInUser) {
            const userInfo = JSON.parse(loggedInUser);
            setUser(userInfo.role);
            
            if (userInfo.role === 'Employee' && userInfo.data) {
              setLoggedInUserData(userInfo.data);
            }
          }
        } catch (error) {
          console.error('Error checking existing login:', error);
          localStorage.removeItem('loggedInUser');
        } finally {
          setIsCheckingSession(false);
        }
      };
  
      // Only check session after auth data is loaded
      if (!isAuthLoading) {
        checkExistingLogin();
      }
    }, [isAuthLoading]);
  
    const handleLogin = (email, password) => {
      if (email === 'admin@example.com' && password === '123') {
        setUser('Admin');
        setLoggedInUserData(null);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'Admin' }));
      } else if (Array.isArray(userData) && userData.length > 0) {
        const employee = userData.find((e) => email === e.email && e.password === password);
        if (employee) {
          setUser('Employee');
          setLoggedInUserData(employee);
          localStorage.setItem('loggedInUser', JSON.stringify({ 
            role: 'Employee', 
            data: employee 
          }));
        } else {
          alert("Invalid Credentials - Employee not found");
        }
      } else {
        alert("Invalid Credentials - User data is loading...");
      }
    };
  
    const handleLogout = () => {
      setUser(null);
      setLoggedInUserData(null);
      localStorage.removeItem('loggedInUser');
    };
  
    // Show loading screen while checking session
    if (isAuthLoading || isCheckingSession) {
      return (
        <div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
          <div className='text-center'>
            <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg'>
              <div className='w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
            </div>
            <h2 className='text-2xl font-bold text-white mb-2'>Loading...</h2>
            <p className='text-white/70'>Please wait while we set things up</p>
          </div>
        </div>
      );
    }
  
    return (
      <div className="font-sans">
        {!user ? (
          <Login handleLogin={handleLogin} />
        ) : user === 'Admin' ? (
          <AdminDashboard changeUser={handleLogout} />
        ) : (
          <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
        )}
      </div>
    );
  }

  export default App
