import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Award,
  Calendar,
  Shield,
  Plane,
  Receipt,
} from "lucide-react";

const Dashboard = () => {
  // Map of card titles to their routes with corresponding icons
  const cards = [
  
    { title: "Experience Letter", path: "/experienceletter", icon: <Award className="w-10 h-10 text-emerald-600" /> },
    { title: "Appointment Letter", path: "/appointmentletter", icon: <Calendar className="w-10 h-10 text-violet-600" /> },
    { title: "Office Rules", path: "/officerules", icon: <Shield className="w-10 h-10 text-red-600" /> },
    { title: "Travel Policy", path: "/travelpolicy", icon: <Plane className="w-10 h-10 text-blue-600" /> },
    { title: "Salary Slip", path: "/salaryslip", icon: <Receipt className="w-10 h-10 text-green-600" /> },
  ];

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      {/* Animated Background Overlay */}
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center p-6 pt-16">
        {/* Header with Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v-5l-10 5-10-5v5z"/>
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2 drop-shadow-lg animate-fade-in">
            Document Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Access all your essential employment documents with ease.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
          {cards.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all duration-300 text-center transform hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-4">
                {React.cloneElement(item.icon, {
                  className: `w-10 h-10 ${item.icon.props.className} group-hover:scale-110 transition-transform duration-300`,
                })}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm">Click to view details</p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;