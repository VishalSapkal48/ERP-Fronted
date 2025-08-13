import React, { useState, useEffect } from 'react';
import { 
  Users, 
  UserPlus, 
  TrendingUp, 
  DollarSign, 
  Phone, 
  Mail, 
  Calendar,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
  Target,
  Award,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Download,
  Upload,
  BarChart3
} from 'lucide-react';

function CRMDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);

  // CRM Data States
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 8900",
      company: "Tech Corp",
      status: "New",
      source: "Website",
      value: 5000,
      lastContact: "2025-08-10",
      assignedTo: "Sarah Johnson",
      priority: "High"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 234 567 8901",
      company: "Digital Solutions",
      status: "Contacted",
      source: "Referral",
      value: 12000,
      lastContact: "2025-08-09",
      assignedTo: "Mike Wilson",
      priority: "Medium"
    },
    {
      id: 3,
      name: "Robert Brown",
      email: "robert@example.com",
      phone: "+1 234 567 8902",
      company: "Innovation Inc",
      status: "Qualified",
      source: "LinkedIn",
      value: 8500,
      lastContact: "2025-08-08",
      assignedTo: "Sarah Johnson",
      priority: "High"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "+1 234 567 8903",
      company: "StartupXYZ",
      status: "Proposal",
      source: "Cold Call",
      value: 15000,
      lastContact: "2025-08-07",
      assignedTo: "Tom Anderson",
      priority: "High"
    },
    {
      id: 5,
      name: "Michael Johnson",
      email: "michael@example.com",
      phone: "+1 234 567 8904",
      company: "Enterprise Ltd",
      status: "Negotiation",
      source: "Trade Show",
      value: 25000,
      lastContact: "2025-08-06",
      assignedTo: "Sarah Johnson",
      priority: "Critical"
    }
  ]);

  const [newLead, setNewLead] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    status: "New",
    source: "",
    value: 0,
    assignedTo: "",
    priority: "Medium"
  });

  // CRM Analytics
  const analytics = {
    totalLeads: leads.length,
    newLeads: leads.filter(l => l.status === 'New').length,
    qualifiedLeads: leads.filter(l => l.status === 'Qualified').length,
    totalValue: leads.reduce((sum, lead) => sum + lead.value, 0),
    avgDealSize: leads.length > 0 ? leads.reduce((sum, lead) => sum + lead.value, 0) / leads.length : 0,
    conversionRate: leads.length > 0 ? (leads.filter(l => l.status === 'Won').length / leads.length * 100) : 0
  };

  // Pipeline stages
  const pipelineStages = [
    { name: 'New', count: leads.filter(l => l.status === 'New').length, color: 'bg-blue-500' },
    { name: 'Contacted', count: leads.filter(l => l.status === 'Contacted').length, color: 'bg-yellow-500' },
    { name: 'Qualified', count: leads.filter(l => l.status === 'Qualified').length, color: 'bg-purple-500' },
    { name: 'Proposal', count: leads.filter(l => l.status === 'Proposal').length, color: 'bg-orange-500' },
    { name: 'Negotiation', count: leads.filter(l => l.status === 'Negotiation').length, color: 'bg-red-500' },
    { name: 'Won', count: leads.filter(l => l.status === 'Won').length, color: 'bg-green-500' }
  ];

  const handleAddLead = (e) => {
    e.preventDefault();
    if (!newLead.name || !newLead.email || !newLead.company) return;
    
    const lead = {
      id: leads.length + 1,
      ...newLead,
      lastContact: new Date().toISOString().split('T')[0]
    };
    
    setLeads([...leads, lead]);
    setNewLead({
      name: "", email: "", phone: "", company: "", 
      status: "New", source: "", value: 0, assignedTo: "", priority: "Medium"
    });
    setShowAddModal(false);
  };

  const handleDeleteLead = (id) => {
    setLeads(leads.filter(lead => lead.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800';
      case 'Qualified': return 'bg-purple-100 text-purple-800';
      case 'Proposal': return 'bg-orange-100 text-orange-800';
      case 'Negotiation': return 'bg-red-100 text-red-800';
      case 'Won': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || lead.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const StatCard = ({ title, value, icon: Icon, color, change, prefix = "", suffix = "" }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{borderLeftColor: color}}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{prefix}{value}{suffix}</p>
          {change && (
            <p className="text-sm text-green-600 flex items-center mt-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              {change}
            </p>
          )}
        </div>
        <div className="p-3 rounded-full" style={{backgroundColor: color + '20'}}>
          <Icon className="w-6 h-6" style={{color: color}} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CRM Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">Manage leads, customers, and sales pipeline</p>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowAddModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Lead
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
              { id: 'leads', name: 'Leads', icon: Users },
              { id: 'pipeline', name: 'Pipeline', icon: Target },
              { id: 'reports', name: 'Reports', icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Leads"
                value={analytics.totalLeads}
                icon={Users}
                color="#3B82F6"
                change="+12% this month"
              />
              <StatCard
                title="Total Pipeline Value"
                value={analytics.totalValue.toLocaleString()}
                icon={DollarSign}
                color="#10B981"
                prefix="$"
                change="+8% this month"
              />
              <StatCard
                title="Average Deal Size"
                value={Math.round(analytics.avgDealSize).toLocaleString()}
                icon={Target}
                color="#F59E0B"
                prefix="$"
                change="+5% this month"
              />
              <StatCard
                title="Conversion Rate"
                value={analytics.conversionRate.toFixed(1)}
                icon={Award}
                color="#8B5CF6"
                suffix="%"
                change="+2.3% this month"
              />
            </div>

            {/* Pipeline Overview & Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pipeline Overview */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Pipeline</h3>
                <div className="space-y-4">
                  {pipelineStages.map((stage) => (
                    <div key={stage.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${stage.color} mr-3`}></div>
                        <span className="font-medium text-gray-900">{stage.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{stage.count} leads</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${stage.color}`}
                            style={{width: `${(stage.count / analytics.totalLeads) * 100}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">New Leads Today</span>
                    <span className="font-semibold text-blue-600">+{analytics.newLeads}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Qualified Leads</span>
                    <span className="font-semibold text-purple-600">{analytics.qualifiedLeads}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">High Priority</span>
                    <span className="font-semibold text-red-600">
                      {leads.filter(l => l.priority === 'High' || l.priority === 'Critical').length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Follow-ups Due</span>
                    <span className="font-semibold text-orange-600">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search leads by name, email, or company..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Proposal">Proposal</option>
                  <option value="Negotiation">Negotiation</option>
                </select>
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Lead Info
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Value
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Priority
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Assigned To
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                            <div className="text-sm text-gray-500">{lead.company}</div>
                            <div className="text-xs text-gray-400">Source: {lead.source}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            {lead.email}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <Phone className="w-4 h-4 mr-1" />
                            {lead.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(lead.status)}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          ${lead.value.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(lead.priority)}`}>
                            {lead.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {lead.assignedTo}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-800">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDeleteLead(lead.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Pipeline Tab */}
        {activeTab === 'pipeline' && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Sales Pipeline</h3>
            <p className="text-gray-600">Detailed pipeline management will be implemented here.</p>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Reports & Analytics</h3>
            <p className="text-gray-600">Detailed reports and analytics will be available here.</p>
          </div>
        )}
      </div>

    
    </div>
  );
}

export default CRMDashboard;