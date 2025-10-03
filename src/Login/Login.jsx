import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, AlertCircle, CheckCircle, LogIn, Eye, EyeOff } from 'lucide-react';

const Login = ({ onLogin = () => {} }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const navigate = useNavigate();

  const demoUsers = [
    // { username: 'CRM USER', role: 'crm', label: 'CRM User', color: 'bg-blue-600' },
    // { username: 'INVENTORY USER', role: 'inventory', label: 'Inventory User', color: 'bg-green-600' },
    { username: 'HRM USER', role: 'hrm', label: 'HRM User', color: 'bg-purple-600' },
    // { username: 'REPORT USER', role: 'reports', label: 'Reports User', color: 'bg-orange-600' },
    // { username: 'ADMIN USER', role: 'admin', label: 'Admin User', color: 'bg-red-600' },
    // { username: 'PURCHASE USER', role: 'purchase', label: 'Purchase User', color: 'bg-indigo-600' },
    // { username: 'FORM USER', role: 'forms', label: 'Forms User', color: 'bg-teal-600' },
    { username: 'DEVELOPMENT USER', role: 'development', label: 'Development User', color: 'bg-rose-600' },
    { username: 'FEEDBACK USER', role: 'feedback', label: 'Feedback User', color: 'bg-yellow-600' },
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
        setError('Invalid credentials. Try a demo user.');
      }
      setIsLoading(false);
    }, 500);
  };

  const handleDemoLogin = (user) => {
    setUsername(user.username);
    setPassword('password123');
    setError('');
  };

  const currentDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Micro-animation for background
  useEffect(() => {
    const interval = setInterval(() => {
      const bg = document.querySelector('.bg-accent');
      if (bg) {
        bg.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px) scale(${1 + Math.random() * 0.05})`;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),_transparent_70%)] bg-accent transition-transform duration-[6000ms] ease-in-out"></div>

      <div className="relative w-full max-w-md z-10">
        {/* Login Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100/50">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md transform hover:scale-105 transition-transform duration-300">
              <LogIn className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Sign in to ERP</h1>
            <p className="text-gray-500 text-sm mt-1">Access your workspace</p>
            <p className="text-gray-400 text-xs mt-1">{currentDate} IST</p>
          </div>

          {error && (
            <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-2 animate-shake" role="alert">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4" aria-label="Login Form">
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-700 block mb-1" aria-required="true">
                Username
              </label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={() => setFocusedField('username')}
                  onBlur={() => setFocusedField('')}
                  disabled={isLoading}
                  placeholder="e.g., CRM USER"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-gray-900 placeholder-gray-400 transition-all duration-200 ${
                    focusedField === 'username'
                      ? 'border-blue-500 shadow-sm ring-1 ring-blue-500/20'
                      : 'border-gray-200 hover:border-blue-300'
                  } focus:outline-none focus:ring-1 focus:ring-blue-500/30`}
                  aria-describedby="username-error"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1" aria-required="true">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField('')}
                  disabled={isLoading}
                  placeholder="Enter password"
                  className={`w-full pl-10 pr-10 py-2.5 rounded-lg border text-gray-900 placeholder-gray-400 transition-all duration-200 ${
                    focusedField === 'password'
                      ? 'border-blue-500 shadow-sm ring-1 ring-blue-500/20'
                      : 'border-gray-200 hover:border-blue-300'
                  } focus:outline-none focus:ring-1 focus:ring-blue-500/30`}
                  aria-describedby="password-error"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-500 text-white py-2.5 rounded-lg font-medium transition-all duration-200 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:scale-95"
              aria-label="Sign in"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        {/* Demo Users Section */}
        <div className="mt-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100/50">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
            Demo Accounts
          </h3>
          <div className="space-y-2">
            {demoUsers.map((user, index) => (
              <button
                key={index}
                onClick={() => handleDemoLogin(user)}
                className="w-full p-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-blue-300 rounded-lg text-left group transition-all duration-200 transform hover:-translate-y-0.5"
                aria-label={`Login as ${user.label}`}
              >
                <div className="flex items-center space-x-2">
                  <div className={`w-2.5 h-2.5 ${user.color} rounded-full group-hover:scale-110 transition-transform duration-200`}></div>
                  <span className="text-gray-900 text-sm font-medium group-hover:text-blue-500">
                    {user.username}
                  </span>
                </div>
                <p className="text-gray-500 text-xs mt-0.5">{user.label}</p>
              </button>
            ))}
          </div>
          <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-700 text-xs text-center">
              Demo password: <span className="font-mono font-semibold text-blue-800">password123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
