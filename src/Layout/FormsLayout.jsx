// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from '../Components/Froms/pages/Sidebar';
// import Navbar from '../Components/Froms/pages/Navbar';
// import CurrentDateTime from '../Components/Froms/pages/CurrentDateTime';
// import FormsRoutes from '../Routes/FormsRoutes';

// const FormsLayout = ({ onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     onLogout();
//     navigate('/');
//   };

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden">
//       <Sidebar onLogout={handleLogout} />
//       <div className="flex-1 flex flex-col h-screen">
//         <Navbar
//           logo={<img src="/Images/BoardWorksListForm/logo.png" alt="Logo" className="w-10 h-10 rounded-lg shadow" />}
//           title="YNK-ERP"
//           dateTime={<CurrentDateTime />}
//           onLogout={handleLogout}
//         />
//         <div className="flex-1 overflow-y-auto p-4">
//           <FormsRoutes />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormsLayout;


import React from 'react';
import { Link } from 'react-router-dom';
import FormsRoutes from '../Routes/FormsRoutes';

const FormsLayout = ({ onLogout }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-xl font-bold border-b border-gray-700">Forms Dashboard</div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link to="/forms/dashboard" className="block p-2 rounded hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/forms/calendar" className="block p-2 rounded hover:bg-gray-700">
                Calendar
              </Link>
            </li>
            <li>
              <Link to="/forms/projects" className="block p-2 rounded hover:bg-gray-700">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/forms/yewalecomponents/call1folder1" className="block p-2 rounded hover:bg-gray-700">
                Yewale CALL 1
              </Link>
            </li>
            <li>
              <Link to="/forms/nadbrahmacomponents/call1folder1" className="block p-2 rounded hover:bg-gray-700">
                Nadbrahma CALL 1
              </Link>
            </li>
            <li>
              <Link to="/forms/LetterOfUndertaking/BoardWorksForm" className="block p-2 rounded hover:bg-gray-700">
                Board Works Form
              </Link>
            </li>
            <li>
              <button
                onClick={onLogout}
                className="w-full text-left p-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Forms Management</h2>
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4">
          <FormsRoutes />
        </div>
      </div>
    </div>
  );
};

export default FormsLayout;