import React, { useState } from 'react';
import {
  CheckCircle, Clock, AlertCircle, User, FileText, Calendar, MapPin, Search, Package, Eye, Wrench,
  Building, Phone, DoorOpen, BarChart3, Menu, X, Home, Settings, Users, ChevronDown,
  Bell, LogOut, Plus, Edit, Trash2, Save, XCircle, ArrowRight, ArrowLeft, AlertTriangle, 
  CheckSquare, Play, Pause, RefreshCw, MessageCircle, Download, Upload, ClipboardCheck
} from 'lucide-react';

// Error Boundary
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-red-600">
          <h1 className="text-2xl font-bold">Error in DevelopmentDashboard</h1>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const DevelopmentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [notificationCount, setNotificationCount] = useState(3);
  const [showForm, setShowForm] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);

  // Complete 18-step workflow definition
  const workflowSteps = [
    { id: 1, title: "Lead Generation", description: "Generate and capture potential customer leads", icon: <User className="w-5 h-5" />, color: "blue" },
    { id: 2, title: "Assign Engineer", description: "Assign qualified engineer to the project", icon: <Users className="w-5 h-5" />, color: "green" },
    { id: 3, title: "Survey Quotation", description: "Prepare and send survey quotation to client", icon: <FileText className="w-5 h-5" />, color: "yellow" },
    { id: 4, title: "Ongoing Challenges After Survey", description: "Address any issues that arise post-survey", icon: <AlertCircle className="w-5 h-5" />, color: "red" },
    { id: 5, title: "Quotation (Only Show)", description: "Present final quotation to client", icon: <Eye className="w-5 h-5" />, color: "purple" },
    { id: 6, title: "Layout Preparation", description: "Prepare detailed layout plans", icon: <MapPin className="w-5 h-5" />, color: "indigo" },
    { id: 7, title: "Plan Explanation", description: "Explain plans and specifications to client", icon: <FileText className="w-5 h-5" />, color: "pink" },
    { id: 8, title: "Challenges After Plan Explanation", description: "Handle client feedback and plan modifications", icon: <AlertCircle className="w-5 h-5" />, color: "red" },
    { id: 9, title: "15 Days Verification", description: "Conduct 15-day verification process", icon: <Clock className="w-5 h-5" />, color: "orange" },
    { id: 10, title: "Inspection", description: "Conduct thorough site inspection", icon: <Search className="w-5 h-5" />, color: "teal" },
    { id: 11, title: "Civil NOC", description: "Obtain Civil No Objection Certificate", icon: <Building className="w-5 h-5" />, color: "gray" },
    { id: 12, title: "Material Order For Dispatch", description: "Order and prepare materials for dispatch", icon: <Package className="w-5 h-5" />, color: "emerald" },
    { id: 13, title: "Material Checking Visit/Inspection", description: "Inspect materials before dispatch", icon: <Wrench className="w-5 h-5" />, color: "amber" },
    { id: 14, title: "Pending Follow-up", description: "Follow up on pending items", icon: <Phone className="w-5 h-5" />, color: "cyan" },
    { id: 15, title: "NOC Verification", description: "Verify NOC documentation", icon: <CheckCircle className="w-5 h-5" />, color: "lime" },
    { id: 16, title: "Opening Date", description: "Set project opening date", icon: <Calendar className="w-5 h-5" />, color: "violet" },
    { id: 17, title: "Opening Visit Verification", description: "Verify opening visit completion", icon: <DoorOpen className="w-5 h-5" />, color: "rose" },
    { id: 18, title: "Monthly Sites Opening Report", description: "Generate monthly opening reports", icon: <BarChart3 className="w-5 h-5" />, color: "slate" }
  ];

  // Project state management
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Residential Complex A",
      client: "ABC Developers",
      contact: "Mr. Sharma",
      phone: "+91-9876543210",
      currentStep: 1,
      completedSteps: [],
      engineer: null,
      quotationAmount: null,
      challenges: [],
      stepData: {},
      createdDate: "2024-08-10",
      lastUpdated: "2024-08-15"
    },
    {
      id: 2,
      name: "Commercial Building B",
      client: "XYZ Construction",
      contact: "Ms. Patel",
      phone: "+91-9876543211",
      currentStep: 3,
      completedSteps: [1, 2],
      engineer: "John Smith",
      quotationAmount: "₹75,00,000",
      challenges: [],
      stepData: {
        3: { quotationSent: true },
        2: { engineerAssigned: true }
      },
      createdDate: "2024-07-25",
      lastUpdated: "2024-08-14"
    }
  ]);

  // Engineers data
  const [engineers, setEngineers] = useState([
    { id: 1, name: "John Smith", email: "john@company.com", phone: "+91-9876543210", specialization: "Civil Engineering", activeProjects: 1, available: true },
    { id: 2, name: "Jane Doe", email: "jane@company.com", phone: "+91-9876543211", specialization: "Structural Engineering", activeProjects: 0, available: true },
    { id: 3, name: "Mike Johnson", email: "mike@company.com", phone: "+91-9876543212", specialization: "Site Planning", activeProjects: 0, available: true }
  ]);

  const navigationItems = [
    { id: 'dashboard', label: 'Workflow Dashboard', icon: <BarChart3 className="w-5 h-5" />, count: projects.length },
    { id: 'projects', label: 'All Projects', icon: <Building className="w-5 h-5" />, count: projects.length },
    { id: 'engineers', label: 'Engineers', icon: <Users className="w-5 h-5" />, count: engineers.length },
    { id: 'challenges', label: 'Active Challenges', icon: <AlertTriangle className="w-5 h-5" />, count: projects.reduce((acc, p) => acc + p.challenges.filter(c => !c.resolved).length, 0) },
    { id: 'reports', label: 'Reports', icon: <FileText className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  // Workflow Functions
  const moveToNextStep = (projectId, additionalData = {}) => {
    setProjects(projects => 
      projects.map(project => {
        if (project.id === projectId) {
          const nextStep = project.currentStep + 1;
          const updatedCompletedSteps = [...project.completedSteps, project.currentStep];
          const updatedStepData = {
            ...project.stepData,
            [project.currentStep]: { ...project.stepData[project.currentStep], completed: true, ...additionalData }
          };
          
          return {
            ...project,
            currentStep: nextStep <= workflowSteps.length ? nextStep : project.currentStep,
            completedSteps: updatedCompletedSteps,
            stepData: updatedStepData,
            lastUpdated: new Date().toISOString().split('T')[0]
          };
        }
        return project;
      })
    );
  };

  const updateProjectStep = (projectId, stepId, data) => {
    setProjects(projects => 
      projects.map(project => 
        project.id === projectId 
          ? { 
              ...project, 
              stepData: {
                ...project.stepData,
                [stepId]: { ...project.stepData[stepId], ...data }
              },
              lastUpdated: new Date().toISOString().split('T')[0]
            }
          : project
      )
    );
  };

  const assignEngineer = (projectId, engineerId) => {
    const engineer = engineers.find(e => e.id === engineerId);
    if (engineer) {
      setProjects(projects => 
        projects.map(project => 
          project.id === projectId 
            ? { ...project, engineer: engineer.name }
            : project
        )
      );
      
      setEngineers(engs => 
        engs.map(eng => 
          eng.id === engineerId 
            ? { ...eng, activeProjects: eng.activeProjects + 1 }
            : eng
        )
      );
    }
  };

  const addChallenge = (projectId, challengeText) => {
    setProjects(projects => 
      projects.map(project => 
        project.id === projectId 
          ? { 
              ...project, 
              challenges: [...project.challenges, {
                id: Date.now(),
                description: challengeText,
                step: project.currentStep,
                createdDate: new Date().toISOString().split('T')[0],
                resolved: false
              }]
            }
          : project
      )
    );
  };

  const resolveChallenge = (projectId, challengeId) => {
    setProjects(projects => 
      projects.map(project => 
        project.id === projectId 
          ? {
              ...project,
              challenges: project.challenges.map(challenge =>
                challenge.id === challengeId 
                  ? { ...challenge, resolved: true, resolvedDate: new Date().toISOString().split('T')[0] }
                  : challenge
              )
            }
          : project
      )
    );
  };

  const addNewProject = (projectData) => {
    const newProject = {
      id: Date.now(),
      name: projectData.name,
      client: projectData.client,
      contact: projectData.contact,
      phone: projectData.phone,
      currentStep: 1,
      completedSteps: [],
      engineer: null,
      quotationAmount: null,
      challenges: [],
      stepData: {},
      createdDate: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    setProjects([...projects, newProject]);
  };

  const getStepStatus = (project, stepId) => {
    if (project.completedSteps.includes(stepId)) return 'completed';
    if (project.currentStep === stepId) return 'current';
    return 'pending';
  };

  const getProjectProgress = (project) => {
    return (project.completedSteps.length / workflowSteps.length) * 100;
  };

  // Step Action Component
  const StepActionCard = ({ project, step }) => {
    const status = getStepStatus(project, step.id);
    const stepData = project.stepData[step.id] || {};

    const renderStepContent = () => {
      switch (step.id) {
        case 1: // Lead Generation
          return (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Client:</strong> {project.client}</div>
                <div><strong>Contact:</strong> {project.contact}</div>
                <div><strong>Phone:</strong> {project.phone}</div>
                <div><strong>Created:</strong> {project.createdDate}</div>
              </div>
              {status === 'current' && (
                <button
                  onClick={() => moveToNextStep(project.id)}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Proceed to Assign Engineer
                </button>
              )}
            </div>
          );

        case 2: // Assign Engineer
          return (
            <div className="space-y-3">
              {!project.engineer ? (
                <div>
                  <p className="text-sm mb-3">Select an engineer:</p>
                  <div className="space-y-2">
                    {engineers.filter(eng => eng.available).map(engineer => (
                      <button
                        key={engineer.id}
                        onClick={() => {
                          assignEngineer(project.id, engineer.id);
                          moveToNextStep(project.id, { engineerAssigned: engineer.name });
                        }}
                        className="w-full text-left bg-white border border-gray-300 rounded-lg p-3 hover:bg-green-50 transition-colors"
                      >
                        <div className="font-medium">{engineer.name}</div>
                        <div className="text-sm text-gray-600">{engineer.specialization}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="font-medium text-green-900">✓ {project.engineer}</div>
                    <div className="text-sm text-green-700">Engineer Assigned</div>
                  </div>
                </div>
              )}
            </div>
          );

        case 3: // Survey Quotation
          return (
            <div className="space-y-3">
              {!stepData.quotationSent ? (
                <div>
                  <input
                    type="text"
                    placeholder="Enter quotation amount (e.g., ₹50,00,000)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3"
                    onBlur={(e) => {
                      if (e.target.value) {
                        updateProjectStep(project.id, 3, { quotationAmount: e.target.value });
                        setProjects(projects => 
                          projects.map(p => 
                            p.id === project.id ? { ...p, quotationAmount: e.target.value } : p
                          )
                        );
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      updateProjectStep(project.id, 3, { quotationSent: true });
                      moveToNextStep(project.id);
                    }}
                    className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Send Survey Quotation
                  </button>
                </div>
              ) : (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="font-medium text-yellow-900">✓ Survey Quotation Sent</div>
                  <div className="text-sm text-yellow-700">{project.quotationAmount}</div>
                </div>
              )}
            </div>
          );

        case 4: // Ongoing Challenges After Survey
        case 8: // Challenges After Plan Explanation
          return (
            <div className="space-y-3">
              <div className="space-y-2">
                {project.challenges.filter(c => c.step === step.id).map(challenge => (
                  <div key={challenge.id} className={`border rounded-lg p-3 ${challenge.resolved ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm">{challenge.description}</p>
                        <p className="text-xs text-gray-500">Created: {challenge.createdDate}</p>
                      </div>
                      {!challenge.resolved && (
                        <button
                          onClick={() => resolveChallenge(project.id, challenge.id)}
                          className="ml-2 bg-green-500 text-white px-2 py-1 rounded text-xs"
                        >
                          Resolve
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setCurrentProject(project);
                    setSelectedStep(step);
                    setShowChallengeModal(true);
                  }}
                  className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Add Challenge
                </button>
                <button
                  onClick={() => moveToNextStep(project.id)}
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          );

        case 5: // Quotation (Only Show)
          return (
            <div className="space-y-3">
              {!stepData.quotationShown ? (
                <div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-3">
                    <div className="font-medium">Final Quotation: {project.quotationAmount}</div>
                    <div className="text-sm text-gray-600">Ready to present to client</div>
                  </div>
                  <button
                    onClick={() => {
                      updateProjectStep(project.id, 5, { quotationShown: true });
                      moveToNextStep(project.id);
                    }}
                    className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Show Final Quotation to Client
                  </button>
                </div>
              ) : (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <div className="font-medium text-purple-900">✓ Quotation Presented</div>
                  <div className="text-sm text-purple-700">{project.quotationAmount}</div>
                </div>
              )}
            </div>
          );

        default:
          return (
            <div className="space-y-3">
              <p className="text-sm text-gray-600">{step.description}</p>
              {status === 'current' && (
                <button
                  onClick={() => moveToNextStep(project.id)}
                  className={`w-full bg-${step.color}-500 text-white px-4 py-2 rounded-lg hover:bg-${step.color}-600 transition-colors`}
                >
                  Complete {step.title}
                </button>
              )}
            </div>
          );
      }
    };

    return (
      <div className={`border rounded-xl p-4 ${
        status === 'completed' ? 'bg-green-50 border-green-200' :
        status === 'current' ? `bg-${step.color}-50 border-${step.color}-200` :
        'bg-gray-50 border-gray-200'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-full ${
              status === 'completed' ? 'bg-green-500 text-white' :
              status === 'current' ? `bg-${step.color}-500 text-white` :
              'bg-gray-300 text-gray-600'
            }`}>
              {status === 'completed' ? <CheckCircle className="w-4 h-4" /> : step.icon}
            </div>
            <div>
              <h4 className="font-semibold">{step.id}) {step.title}</h4>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === 'completed' ? 'bg-green-100 text-green-800' :
            status === 'current' ? `bg-${step.color}-100 text-${step.color}-800` :
            'bg-gray-100 text-gray-600'
          }`}>
            {status === 'completed' ? 'Completed' :
             status === 'current' ? 'Current' : 'Pending'}
          </div>
        </div>
        {renderStepContent()}
      </div>
    );
  };

  // Challenge Modal
  const ChallengeModal = ({ onClose }) => {
    const [challengeText, setChallengeText] = useState('');

    const handleSubmit = () => {
      if (challengeText.trim() && currentProject && selectedStep) {
        addChallenge(currentProject.id, challengeText);
        setChallengeText('');
        onClose();
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
          <h3 className="text-lg font-semibold mb-4">
            Add Challenge - {selectedStep?.title}
          </h3>
          <textarea
            value={challengeText}
            onChange={(e) => setChallengeText(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 mb-4"
            rows="4"
            placeholder="Describe the challenge..."
          />
          <div className="flex space-x-3">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Add Challenge
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Project Form
  const ProjectForm = ({ onSave, onCancel }) => {
    const [formData, setFormData] = useState({
      name: '',
      client: '',
      contact: '',
      phone: ''
    });

    const handleSubmit = () => {
      if (formData.name && formData.client && formData.contact && formData.phone) {
        onSave(formData);
        setFormData({ name: '', client: '', contact: '', phone: '' });
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
          <h3 className="text-lg font-semibold mb-4">Add New Project</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
              <input
                type="text"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="Enter client name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
              <input
                type="text"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="Enter contact person"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className="flex space-x-3 mt-6">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Create Project
            </button>
            <button
              onClick={onCancel}
              className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 flex">
      
     
          <main className="flex-1 p-6 overflow-auto">
            {/* Dashboard View */}
            {activeView === 'dashboard' && (
              <div className="space-y-6">
                {/* Header Section */}
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-red-600 mb-2">DEVELOPMENT DASHBOARD</h2>
                    <p className="text-gray-600">18-Step Complete Workflow Management</p>
                  </div>
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>New Project</span>
                  </button>
                </div>

                {/* Workflow Steps Overview */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">Complete 18-Step Workflow</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {workflowSteps.map((step, index) => (
                      <div key={step.id} className="text-center">
                        <div className={`w-12 h-12 mx-auto rounded-full bg-${step.color}-500 text-white flex items-center justify-center mb-2 text-sm font-bold`}>
                          {step.id}
                        </div>
                        <p className="text-xs font-medium text-gray-900 leading-tight">{step.title}</p>
                        {index < workflowSteps.length - 1 && index % 6 !== 5 && (
                          <ArrowRight className="w-3 h-3 text-gray-400 mx-auto mt-1" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Projects */}
                <div className="space-y-8">
                  {projects.map((project) => {
                    const progress = getProjectProgress(project);
                    const currentStep = workflowSteps.find(step => step.id === project.currentStep);
                    
                    return (
                      <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Project Header */}
                        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-2xl font-bold">{project.name}</h3>
                              <p className="opacity-90">Client: {project.client} • Contact: {project.contact}</p>
                              <p className="text-sm opacity-75">Phone: {project.phone}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm opacity-75">Overall Progress</div>
                              <div className="text-3xl font-bold">{Math.round(progress)}%</div>
                              <div className="text-sm opacity-75">{project.completedSteps.length}/{workflowSteps.length} Steps</div>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="mt-4">
                            <div className="w-full bg-red-400 rounded-full h-2">
                              <div 
                                className="bg-white h-2 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Current Step Highlight */}
                        <div className="bg-gray-50 border-b border-gray-200 p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`p-3 rounded-full bg-${currentStep?.color}-500 text-white`}>
                                {currentStep?.icon}
                              </div>
                              <div>
                                <h4 className="font-bold text-lg">Current Step: {currentStep?.title}</h4>
                                <p className="text-gray-600">{currentStep?.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gray-900">Step {project.currentStep}</div>
                              <div className="text-sm text-gray-500">of {workflowSteps.length}</div>
                            </div>
                          </div>
                        </div>

                        {/* Step Cards Grid */}
                        <div className="p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {workflowSteps.map((step) => (
                              <StepActionCard key={step.id} project={project} step={step} />
                            ))}
                          </div>

                          {/* Completed Steps Summary */}
                          {project.completedSteps.length > 0 && (
                            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                              <h5 className="font-semibold text-green-900 mb-3">✅ Completed Steps ({project.completedSteps.length})</h5>
                              <div className="flex flex-wrap gap-2">
                                {project.completedSteps.map(stepId => {
                                  const step = workflowSteps.find(s => s.id === stepId);
                                  return (
                                    <div key={stepId} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                                      <CheckCircle className="w-3 h-3" />
                                      <span>{stepId}) {step?.title}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          {/* Active Challenges */}
                          {project.challenges.filter(c => !c.resolved).length > 0 && (
                            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                              <h5 className="font-semibold text-red-900 mb-3">⚠️ Active Challenges ({project.challenges.filter(c => !c.resolved).length})</h5>
                              <div className="space-y-2">
                                {project.challenges.filter(c => !c.resolved).map(challenge => (
                                  <div key={challenge.id} className="bg-white border border-red-200 rounded-lg p-3">
                                    <div className="flex justify-between items-start">
                                      <div className="flex-1">
                                        <p className="text-sm font-medium">Step {challenge.step}: {challenge.description}</p>
                                        <p className="text-xs text-gray-500">Created: {challenge.createdDate}</p>
                                      </div>
                                      <button
                                        onClick={() => resolveChallenge(project.id, challenge.id)}
                                        className="ml-3 bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                                      >
                                        Resolve
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          
            {/* Projects View */}
            {activeView === 'projects' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">All Projects Overview</h2>
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Project</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {projects.map((project) => {
                    const progress = getProjectProgress(project);
                    const currentStep = workflowSteps.find(step => step.id === project.currentStep);
                    
                    return (
                      <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="p-6">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">{project.name}</h3>
                          <p className="text-gray-600 mb-4">{project.client}</p>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Current Step:</span>
                              <span className="text-sm font-medium">{project.currentStep}. {currentStep?.title}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Engineer:</span>
                              <span className="text-sm font-medium">{project.engineer || 'Not assigned'}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Active Challenges:</span>
                              <span className="text-sm font-medium">{project.challenges.filter(c => !c.resolved).length}</span>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>Progress</span>
                                <span>{Math.round(progress)}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-3">
                                <div 
                                  className="bg-gradient-to-r from-red-400 to-red-600 h-3 rounded-full transition-all duration-300"
                                  style={{ width: `${progress}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Engineers View */}
            {activeView === 'engineers' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Engineers Management</h2>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engineer</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Active Projects</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {engineers.map((engineer) => (
                          <tr key={engineer.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                  <User className="w-5 h-5 text-white" />
                                </div>
                                <div className="font-medium text-gray-900">{engineer.name}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-600">
                                <div>{engineer.email}</div>
                                <div>{engineer.phone}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{engineer.specialization}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                                {engineer.activeProjects}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                engineer.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {engineer.available ? 'Available' : 'Busy'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Challenges View */}
            {activeView === 'challenges' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Active Challenges Management</h2>
                </div>

                <div className="space-y-4">
                  {projects.map(project => {
                    const activeChallenges = project.challenges.filter(c => !c.resolved);
                    if (activeChallenges.length === 0) return null;
                    
                    return (
                      <div key={project.id} className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                            <p className="text-gray-600">Client: {project.client}</p>
                          </div>
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                            {activeChallenges.length} Active Challenge{activeChallenges.length !== 1 ? 's' : ''}
                          </span>
                        </div>
                        <div className="space-y-3">
                          {activeChallenges.map(challenge => {
                            const step = workflowSteps.find(s => s.id === challenge.step);
                            return (
                              <div key={challenge.id} className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                                        Step {challenge.step}: {step?.title}
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-900 mb-1">{challenge.description}</p>
                                    <p className="text-xs text-gray-500">Created: {challenge.createdDate}</p>
                                  </div>
                                  <button
                                    onClick={() => resolveChallenge(project.id, challenge.id)}
                                    className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
                                  >
                                    Mark Resolved
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                  
                  {projects.every(project => project.challenges.filter(c => !c.resolved).length === 0) && (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">No Active Challenges</h3>
                      <p className="text-gray-600">All challenges have been resolved!</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Other Views Placeholder */}
            {!['dashboard', 'projects', 'engineers', 'challenges'].includes(activeView) && (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {navigationItems.find(item => item.id === activeView)?.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {navigationItems.find(item => item.id === activeView)?.label}
                </h2>
                <p className="text-gray-600">This section is coming soon. Features will be added in future updates.</p>
                <button 
                  onClick={() => setActiveView('dashboard')}
                  className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Back to Dashboard
                </button>
              </div>
            )}
          </main>
        </div>

        {/* Modals */}
        {showForm && (
          <ProjectForm
            onSave={(data) => {
              addNewProject(data);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        )}

        {showChallengeModal && (
          <ChallengeModal
            onClose={() => {
              setShowChallengeModal(false);
              setCurrentProject(null);
              setSelectedStep(null);
            }}
          />
        )}

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

    </ErrorBoundary>
  );
};

export default DevelopmentDashboard;