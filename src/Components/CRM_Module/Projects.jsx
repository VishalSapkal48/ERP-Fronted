import { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      status: "In Progress",
      deadline: "2025-08-01",
    },
    {
      id: 2,
      name: "App Development",
      status: "Planning",
      deadline: "2025-09-01",
    },
  ]);
  const [newProject, setNewProject] = useState({
    name: "",
    status: "",
    deadline: "",
  });

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.name || !newProject.status || !newProject.deadline) return;
    setProjects([...projects, { id: projects.length + 1, ...newProject }]);
    setNewProject({ name: "", status: "", deadline: "" });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Add New Project</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddProject}
        >
          <input
            type="text"
            placeholder="Project Name"
            value={newProject.name}
            onChange={(e) =>
              setNewProject({ ...newProject, name: e.target.value })
            }
            className="p-2 border rounded"
          />
          <select
            value={newProject.status}
            onChange={(e) =>
              setNewProject({ ...newProject, status: e.target.value })
            }
            className="p-2 border rounded"
          >
            <option value="">Select Status</option>
            <option value="Planning">Planning</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <input
            type="date"
            value={newProject.deadline}
            onChange={(e) =>
              setNewProject({ ...newProject, deadline: e.target.value })
            }
            className="p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-1 md:col-span-2"
          >
            Add Project
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Project Name</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="p-2 border">{project.id}</td>
                <td className="p-2 border">{project.name}</td>
                <td className="p-2 border">{project.status}</td>
                <td className="p-2 border">{project.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projects;
