// src/Components/Feedback_Module/Dashboard/FeedbackDashboard.js
import React, { useMemo } from "react";
import {
  Bell,
  CheckCircle,
  Clock,
  TrendingUp,
  BarChart2,
  PieChart as PieChartIcon,
  Star,
  Users,
  AlertCircle,
  Phone,
} from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

// Mock Data (तुमचा खरा डेटा API वरून येईल)
// तुमच्या इमेजमधील कॅटेगरीज् नुसार डेटा अपडेट केला आहे.
const feedbackData = {
  naadbrahma: [
    {
      id: 1,
      name: "NOC Feedback Call",
      status: "completed",
      rating: 4.5,
      category: "NOC",
    },
    {
      id: 2,
      name: "Office Feedback Call",
      status: "pending",
      rating: null,
      category: "Office",
    },
    {
      id: 3,
      name: "Monthly Feedback Call",
      status: "completed",
      rating: 4.8,
      category: "Monthly",
    },
    {
      id: 4,
      name: "Complaint Resolving Call",
      status: "in-progress",
      rating: null,
      category: "Complaint",
    },
    {
      id: 5,
      name: "Visit Wise Feedback Call",
      status: "completed",
      rating: 4.2,
      category: "NOC",
    },
    {
      id: 6,
      name: "Office Feedback Call",
      status: "completed",
      rating: 3.8,
      category: "Office",
    },
    {
      id: 7,
      name: "Complaint Resolving Call",
      status: "scheduled",
      rating: null,
      category: "Complaint",
    },
  ],
  yewale: [
    {
      id: 1,
      name: "NOC Feedback Call",
      status: "completed",
      rating: 4.7,
      category: "NOC",
    },
    {
      id: 2,
      name: "Office Feedback Call",
      status: "completed",
      rating: 4.3,
      category: "Office",
    },
    {
      id: 3,
      name: "Monthly Feedback Call",
      status: "scheduled",
      rating: null,
      category: "Monthly",
    },
    {
      id: 4,
      name: "Complaint Resolving Call",
      status: "completed",
      rating: 4.0,
      category: "Complaint",
    },
    {
      id: 5,
      name: "Visit Wise Feedback Call",
      status: "pending",
      rating: null,
      category: "NOC",
    },
    {
      id: 6,
      name: "Monthly Feedback Call",
      status: "in-progress",
      rating: null,
      category: "Monthly",
    },
    {
      id: 7,
      name: "Office Feedback Call",
      status: "completed",
      rating: 4.9,
      category: "Office",
    },
  ],
};

// Helper Component for Metric Cards
const MetricCard = ({
  title,
  value,
  icon: Icon,
  colorClass,
  bgColorClass,
  subtitle,
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="flex items-center space-x-4">
      <div className={`p-3 rounded-full ${bgColorClass}`}>
        <Icon className={`h-6 w-6 ${colorClass}`} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
    </div>
  </div>
);

// Main Dashboard Component
function FeedbackDashboard() {
  // useMemo वापरून data processing फक्त एकदाच होईल, performance सुधारेल
  const processedData = useMemo(() => {
    const allCalls = [
      ...feedbackData.naadbrahma.map((c) => ({ ...c, brand: "Naadbrahma" })),
      ...feedbackData.yewale.map((c) => ({ ...c, brand: "Yewale" })),
    ];

    const totalCalls = allCalls.length;
    const completed = allCalls.filter((c) => c.status === "completed").length;
    const pending = allCalls.filter((c) => c.status === "pending").length;
    const inProgress = allCalls.filter(
      (c) => c.status === "in-progress"
    ).length;
    const scheduled = allCalls.filter((c) => c.status === "scheduled").length;

    const ratedCalls = allCalls.filter(
      (c) => c.rating !== null && c.rating > 0
    );
    const averageRating = ratedCalls.length
      ? (
          ratedCalls.reduce((acc, c) => acc + c.rating, 0) / ratedCalls.length
        ).toFixed(1)
      : "N/A";

    const statusDistribution = [
      { name: "Completed", value: completed },
      { name: "Pending", value: pending },
      { name: "In Progress", value: inProgress },
      { name: "Scheduled", value: scheduled },
    ];

    const categories = ["NOC", "Office", "Monthly", "Complaint"];
    const categoryCounts = categories.map((cat) => ({
      name: cat,
      Naadbrahma: allCalls.filter(
        (c) => c.category === cat && c.brand === "Naadbrahma"
      ).length,
      Yewale: allCalls.filter((c) => c.category === cat && c.brand === "Yewale")
        .length,
    }));

    const categoryRatings = categories.map((cat) => {
      const catRatedCalls = ratedCalls.filter((c) => c.category === cat);
      const avgRating = catRatedCalls.length
        ? (
            catRatedCalls.reduce((acc, c) => acc + c.rating, 0) /
            catRatedCalls.length
          ).toFixed(1)
        : 0;
      return { name: cat, avgRating: parseFloat(avgRating) };
    });

    return {
      totalCalls,
      completed,
      pending,
      inProgress,
      averageRating,
      statusDistribution,
      categoryCounts,
      categoryRatings,
      allCalls,
    };
  }, []);

  const PIE_COLORS = ["#10B981", "#F59E0B", "#3B82F6", "#8B5CF6"];

  return (
    <div className="space-y-8">
      {/* === 1. Metrics Section (KPI Cards) === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Feedback Calls"
          value={processedData.totalCalls}
          icon={Bell}
          colorClass="text-blue-600"
          bgColorClass="bg-blue-100"
        />
        <MetricCard
          title="Completed Calls"
          value={processedData.completed}
          icon={CheckCircle}
          colorClass="text-green-600"
          bgColorClass="bg-green-100"
        />
        <MetricCard
          title="Pending Calls"
          value={processedData.pending + processedData.inProgress}
          icon={Clock}
          colorClass="text-yellow-600"
          bgColorClass="bg-yellow-100"
        />
        <MetricCard
          title="Average Rating"
          value={processedData.averageRating}
          icon={Star}
          colorClass="text-amber-500"
          bgColorClass="bg-amber-100"
          subtitle="Out of 5"
        />
      </div>

      {/* === 2. Charts & Graphs Section === */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Pie Chart: Status Distribution */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <PieChartIcon className="w-6 h-6 mr-2 text-indigo-600" />
            Calls by Status
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={processedData.statusDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {processedData.statusDistribution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={PIE_COLORS[index % PIE_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart: Feedback by Category */}
        <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <BarChart2 className="w-6 h-6 mr-2 text-teal-600" />
            Feedback Calls by Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={processedData.categoryCounts}
              margin={{ top: 20, right: 20, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "#4B5563" }} />
              <YAxis tick={{ fill: "#4B5563" }} />
              <Tooltip cursor={{ fill: "rgba(243, 244, 246, 0.5)" }} />
              <Legend />
              <Bar
                dataKey="Naadbrahma"
                stackId="a"
                fill="#3B82F6"
                name="Naadbrahma"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Yewale"
                stackId="a"
                fill="#14B8A6"
                name="Yewale"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Another Chart Row */}
      <div className="grid grid-cols-1 gap-8">
        {/* Bar Chart: Average Rating by Category */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-rose-600" />
            Average Rating by Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={processedData.categoryRatings}
              margin={{ top: 20, right: 20, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "#4B5563" }} />
              <YAxis domain={[0, 5]} tick={{ fill: "#4B5563" }} />
              <Tooltip />
              <Bar
                dataKey="avgRating"
                name="Average Rating"
                fill="#F43F5E"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* === 3. Detailed Feedback List === */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <h3 className="text-xl font-bold text-gray-800 p-6 border-b flex items-center">
          <Phone className="w-6 h-6 mr-2 text-gray-700" />
          Recent Feedback Calls
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Call Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Brand
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {processedData.allCalls.slice(0, 10).map(
                (
                  call // Top 10 calls
                ) => (
                  <tr
                    key={`${call.brand}-${call.id}`}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {call.name}
                    </td>
                    <td className="px-6 py-4">{call.brand}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          call.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : call.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : call.status === "in-progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {call.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex items-center">
                      {call.rating ? (
                        <>
                          {" "}
                          <Star className="w-4 h-4 text-amber-400 mr-1" />{" "}
                          {call.rating}{" "}
                        </>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDashboard;
