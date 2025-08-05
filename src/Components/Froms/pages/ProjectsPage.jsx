import React from "react";
import { Folder, Star, Clock } from "lucide-react";

const projects = [
  {
    id: "yewale",
    title: "Yewale",
    status: "Active",
    color: "from-emerald-500 to-teal-600",
    lastUpdated: "2 days ago",
    description: "A retail management system for Yewale Tea franchise.",
  },
  {
    id: "nadbramha",
    title: "Nadbramha",
    status: "In Progress",
    color: "from-purple-500 to-indigo-600",
    lastUpdated: "1 week ago",
    description: "ERP for Nadbramha Dabbawala supply chain.",
  },
  {
    id: "others",
    title: "Other Projects",
    status: "Archive",
    color: "from-slate-500 to-gray-600",
    lastUpdated: "3 weeks ago",
    description: "Miscellaneous and archived projects.",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800";
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    case "Archive":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-2 md:px-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg mr-4">
          <Folder className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
            Projects
          </h1>
          <p className="text-gray-500 text-sm">
            All your company and client projects at a glance
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col"
          >
            <div
              className={`h-2 rounded-t-2xl bg-gradient-to-r ${project.color}`}
            />
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <Folder className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {project.title}
                  </h2>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status === "Active" && (
                      <Star className="w-3 h-3 mr-1" />
                    )}
                    {project.status}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Updated {project.lastUpdated}</span>
                </div>
                <span className="text-gray-300">#{idx + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="text-2xl font-bold text-emerald-600 mb-1">1</div>
          <div className="text-gray-500">Active Projects</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">1</div>
          <div className="text-gray-500">In Development</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="text-2xl font-bold text-slate-600 mb-1">3</div>
          <div className="text-gray-500">Total Projects</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
