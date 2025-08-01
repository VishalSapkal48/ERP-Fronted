import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, BarElement, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PieController, BarController, LineController } from 'chart.js';
import { Calendar, Download, Briefcase } from 'lucide-react';

// Register all necessary components, including PointElement
ChartJS.register(ArcElement, BarElement, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PieController, BarController, LineController);

const ProjectsReport = () => {
  const [dateRange, setDateRange] = useState({
    startDate: '2024-01-01',
    endDate: '2024-12-31'
  });
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  const lineChartRef = useRef(null);

  const mockProjectData = [
    { project: 'Project Alpha', status: 'In Progress', budget: 50000, progress: 70 },
    { project: 'Project Beta', status: 'Completed', budget: 30000, progress: 100 },
    { project: 'Project Gamma', status: 'Delayed', budget: 40000, progress: 50 },
    { project: 'Project Delta', status: 'In Progress', budget: 60000, progress: 80 }
  ];

  const statusData = {
    labels: ['In Progress', 'Completed', 'Delayed'],
    datasets: [{
      data: [2, 1, 1],
      backgroundColor: ['#3B82F6', '#10B981', '#EF4444']
    }]
  };

  const budgetData = {
    labels: mockProjectData.map(item => item.project),
    datasets: [{
      label: 'Budget ($)',
      data: mockProjectData.map(item => item.budget),
      backgroundColor: '#3B82F6'
    }]
  };

  const progressData = {
    labels: mockProjectData.map(item => item.project),
    datasets: [{
      label: 'Progress (%)',
      data: mockProjectData.map(item => item.progress),
      borderColor: '#10B981',
      fill: false
    }]
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      try {
        setProjectData(mockProjectData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load project data');
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [dateRange]);

  useEffect(() => {
    if (!loading && pieChartRef.current && barChartRef.current && lineChartRef.current) {
      let pieChart, barChart, lineChart;
      try {
        pieChart = new ChartJS(pieChartRef.current, {
          type: 'pie',
          data: statusData,
          options: { responsive: true }
        });

        barChart = new ChartJS(barChartRef.current, {
          type: 'bar',
          data: budgetData,
          options: { responsive: true }
        });

        lineChart = new ChartJS(lineChartRef.current, {
          type: 'line',
          data: progressData,
          options: { responsive: true }
        });
      } catch (err) {
        console.error('Error initializing charts:', err);
        setError('Failed to render charts');
      }

      return () => {
        if (pieChart) pieChart.destroy();
        if (barChart) barChart.destroy();
        if (lineChart) lineChart.destroy();
      };
    }
  }, [loading]);

  const handleExport = (format) => {
    try {
      alert(`Projects report exported as ${format} (mock data)`);
    } catch (err) {
      console.error(`Error exporting projects report as ${format}:`, err);
      alert(`Failed to export projects report as ${format}`);
    }
  };

  const totalBudget = projectData.reduce((sum, item) => sum + item.budget, 0);
  const averageProgress = projectData.reduce((sum, item) => sum + item.progress, 0) / (projectData.length || 1);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen ">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects Report</h1>
              <p className="text-gray-600">Project status and performance metrics</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={dateRange.startDate}
                  onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
                  className="border rounded-md px-3 py-2"
                />
                <span className="text-gray-400">to</span>
                <input
                  type="date"
                  value={dateRange.endDate}
                  onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
                  className="border rounded-md px-3 py-2"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleExport('PDF')}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  <Download className="w-4 h-4" />
                  Export PDF
                </button>
                <button
                  onClick={() => handleExport('Excel')}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  <Download className="w-4 h-4" />
                  Export Excel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Budget</p>
                <p className="text-3xl font-bold text-gray-900">${totalBudget.toLocaleString()}</p>
              </div>
              <Briefcase className="w-12 h-12 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Progress</p>
                <p className="text-3xl font-bold text-gray-900">{averageProgress.toFixed(1)}%</p>
              </div>
              <Briefcase className="w-12 h-12 text-green-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Status</h3>
            <canvas ref={pieChartRef}></canvas>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Budgets</h3>
            <canvas ref={barChartRef}></canvas>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Progress</h3>
            <canvas ref={lineChartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsReport;