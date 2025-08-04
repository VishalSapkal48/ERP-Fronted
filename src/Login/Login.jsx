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
import { Eye, EyeOff, User, Lock, AlertCircle, CheckCircle, LogIn } from 'lucide-react';

const Login = ({ onLogin = () => {} }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  // Mock navigate function
  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  const demoUsers = [
    { username: 'crmuser', role: 'crm', label: 'CRM User', color: 'bg-blue-500' },
    { username: 'invuser', role: 'inventory', label: 'Inventory User', color: 'bg-green-500' },
    { username: 'hrmuser', role: 'hrm', label: 'HRM User', color: 'bg-purple-500' },
    { username: 'repuser', role: 'reports', label: 'Reports User', color: 'bg-orange-500' },
    { username: 'adminuser', role: 'admin', label: 'Admin User', color: 'bg-red-500' },
    { username: 'puruser', role: 'purchase', label: 'Purchase User', color: 'bg-indigo-500' },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
    
      <div className="relative w-full max-w-md z-10">
        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-slate-300">Sign in to your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="text-sm font-medium text-slate-200 block mb-1">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={() => setFocusedField('username')}
                  onBlur={() => setFocusedField('')}
                  disabled={isLoading}
                  placeholder="Enter your username"
                  className={`w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-400 transition-all duration-200 ${
                    focusedField === 'username'
                      ? 'border-blue-500 bg-white/20 shadow-lg'
                      : 'border-white/20 hover:border-white/30'
                  }`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="text-sm font-medium text-slate-200 block mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField('')}
                  disabled={isLoading}
                  placeholder="Enter your password"
                  className={`w-full pl-12 pr-12 py-3 rounded-xl bg-white/10 border text-white placeholder-slate-400 transition-all duration-200 ${
                    focusedField === 'password'
                      ? 'border-blue-500 bg-white/20 shadow-lg'
                      : 'border-white/20 hover:border-white/30'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium transition-all duration-200 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        {/* Demo Users */}
        <div className="mt-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
            Demo Users
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {demoUsers.map((user, index) => (
              <button
                key={index}
                onClick={() => handleDemoLogin(user)}
                className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl text-left group transition-all duration-200"
              >
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 ${user.color} rounded-full`}></div>
                  <span className="text-white text-sm font-medium group-hover:text-blue-300">
                    {user.username}
                  </span>
                </div>
                <p className="text-slate-400 text-xs mt-1">{user.label}</p>
              </button>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-500/20 border border-blue-500/30 rounded-xl">
            <p className="text-blue-300 text-xs text-center">
              Password for all demo users: <span className="font-mono font-bold">password123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

