// // src/components/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     // Demo login logic (no JWT, just role-based navigation)
//     const demoUsers = {
//       'crmuser': 'crm',
//       'invuser': 'inventory',
//       'hrmuser': 'hrm',
//       'repuser': 'reports',
//       'adminuser': 'admin'
//     };

//     const role = demoUsers[username.toLowerCase()];
//     if (role && password === 'password123') {
//       onLogin(role, username);
//       navigate(role === 'crm' ? '/crm' : role === 'inventory' ? '/inventory' : role === 'hrm' ? '/hrm' : role === 'reports' ? '/reports' : '/admin');
//     } else {
//       setError('Invalid username or password');
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full p-2 border rounded"
//             placeholder="Enter username (e.g., crmuser, invuser)"
//             required
//             disabled={isLoading}
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded"
//             placeholder="Enter password"
//             required
//             disabled={isLoading}
//           />
//         </div>
//         <button
//           type="button"
//           onClick={handleLogin}
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
//           disabled={isLoading}
//         >
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, AlertCircle, CheckCircle, LogIn } from 'lucide-react';

const Login = ({ onLogin = () => {} }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const navigate = useNavigate();

  const demoUsers = [
    { username: 'accuser', role: 'account', label: 'Account User', color: 'bg-gray-600' },
    { username: 'crmuser', role: 'crm', label: 'CRM User', color: 'bg-blue-600' },
    { username: 'invuser', role: 'inventory', label: 'Inventory User', color: 'bg-green-600' },
    { username: 'hrmuser', role: 'hrm', label: 'HRM User', color: 'bg-purple-600' },
    { username: 'repuser', role: 'reports', label: 'Reports User', color: 'bg-orange-600' },
    { username: 'adminuser', role: 'admin', label: 'Admin User', color: 'bg-red-600' },
    { username: 'puruser', role: 'purchase', label: 'Purchase User', color: 'bg-indigo-600' },
    { username: 'frmuser', role: 'forms', label: 'Forms User', color: 'bg-teal-600' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const demoUserMap = {};
      demoUsers.forEach((user) => {
        demoUserMap[user.username.toLowerCase()] = user.role;
      });

      const userRole = demoUserMap[username.toLowerCase()];
      if (userRole && password === 'password123') {
        onLogin(userRole, username);
        navigate(`/${userRole}`);
      } else {
        setError('Invalid credentials. Check the demo users below.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleDemoLogin = (user) => {
    setUsername(user.username);
    setPassword('password123');
    setError('');
  };

  // Current date and time (IST)
  const currentDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
      
      <div className="relative w-full max-w-md z-10">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 ring-1 ring-purple-500/20">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
              <LogIn className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-slate-300 text-sm mt-2 opacity-80">Securely access your account</p>
            <p className="text-slate-400 text-xs mt-1">{currentDate} IST</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start space-x-3 animate-shake" role="alert">
              <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6" aria-label="Login Form">
            <div>
              <label htmlFor="username" className="text-sm font-medium text-slate-100 block mb-1.5" aria-required="true">
                Username
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={() => setFocusedField('username')}
                  onBlur={() => setFocusedField('')}
                  disabled={isLoading}
                  placeholder="Enter your username"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border text-white placeholder-slate-500 transition-all duration-300 ${
                    focusedField === 'username'
                      ? 'border-blue-400 bg-white/10 shadow-lg ring-2 ring-blue-400/20'
                      : 'border-white/10 hover:border-blue-400/30'
                  } focus:outline-none focus:ring-2 focus:ring-blue-400/30`}
                  aria-describedby="username-error"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-slate-100 block mb-1.5" aria-required="true">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField('')}
                  disabled={isLoading}
                  placeholder="Enter your password"
                  className={`w-full pl-12 pr-12 py-3.5 rounded-xl bg-white/5 border text-white placeholder-slate-500 transition-all duration-300 ${
                    focusedField === 'password'
                      ? 'border-blue-400 bg-white/10 shadow-lg ring-2 ring-blue-400/20'
                      : 'border-white/10 hover:border-blue-400/30'
                  } focus:outline-none focus:ring-2 focus:ring-blue-400/30`}
                  aria-describedby="password-error"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
              aria-label="Sign in"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        <div className="mt-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 ring-1 ring-purple-500/20">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-400 animate-bounce" />
            Demo Users
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {demoUsers.map((user, index) => (
              <button
                key={index}
                onClick={() => handleDemoLogin(user)}
                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 rounded-xl text-left group transition-all duration-300 transform hover:-translate-y-0.5"
                aria-label={`Login as ${user.label}`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 ${user.color} rounded-full group-hover:scale-110 transition-transform`}></div>
                  <span className="text-white text-sm font-semibold group-hover:text-blue-300">
                    {user.username}
                  </span>
                </div>
                <p className="text-slate-400 text-xs mt-1.5">{user.label}</p>
              </button>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <p className="text-blue-200 text-xs text-center">
              Password for all demo users: <span className="font-mono font-bold text-blue-100">password123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;