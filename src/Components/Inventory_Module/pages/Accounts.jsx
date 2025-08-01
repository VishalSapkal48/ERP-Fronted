import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  X,
  Check,
  CreditCard,
  TrendingUp,
  Building,
  Eye,
  Download,
} from "lucide-react";

const Accounts = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Primary Savings",
      type: "savings",
      balance: 15000,
      status: "active",
      accountNumber: "ACC001",
      bank: "First National Bank",
    },
    {
      id: 2,
      name: "Business Current",
      type: "current",
      balance: 8500,
      status: "active",
      accountNumber: "ACC002",
      bank: "Commerce Bank",
    },
    {
      id: 3,
      name: "Investment Portfolio",
      type: "investment",
      balance: 25000,
      status: "active",
      accountNumber: "ACC003",
      bank: "Investment Trust",
    },
    {
      id: 4,
      name: "Emergency Fund",
      type: "savings",
      balance: 5000,
      status: "inactive",
      accountNumber: "ACC004",
      bank: "Security Bank",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    type: "savings",
    balance: "",
    status: "active",
    accountNumber: "",
    bank: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const accountTypes = [
    {
      value: "savings",
      label: "Savings",
      color: "bg-green-100 text-green-800",
    },
    { value: "current", label: "Current", color: "bg-blue-100 text-blue-800" },
    {
      value: "investment",
      label: "Investment",
      color: "bg-purple-100 text-purple-800",
    },
    {
      value: "credit",
      label: "Credit",
      color: "bg-orange-100 text-orange-800",
    },
  ];

  const statusTypes = [
    { value: "active", label: "Active", color: "bg-green-100 text-green-800" },
    {
      value: "inactive",
      label: "Inactive",
      color: "bg-gray-100 text-gray-800",
    },
    { value: "frozen", label: "Frozen", color: "bg-red-100 text-red-800" },
  ];

  const filteredAccounts = accounts.filter((account) => {
    const matchesSearch =
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.accountNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.bank.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || account.status === statusFilter;
    const matchesType = typeFilter === "all" || account.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.accountNumber.trim() ||
      !formData.bank.trim() ||
      !formData.balance
    )
      return;

    const accountData = {
      ...formData,
      balance: parseFloat(formData.balance),
    };

    if (isEditing) {
      setAccounts(
        accounts.map((a) => (a.id === currentId ? { ...a, ...accountData } : a))
      );
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setAccounts([...accounts, { id: Date.now(), ...accountData }]);
    }
    setFormData({
      name: "",
      type: "savings",
      balance: "",
      status: "active",
      accountNumber: "",
      bank: "",
    });
    setShowForm(false);
  };

  const handleEdit = (account) => {
    setFormData({
      name: account.name,
      type: account.type,
      balance: account.balance.toString(),
      status: account.status,
      accountNumber: account.accountNumber,
      bank: account.bank,
    });
    setIsEditing(true);
    setCurrentId(account.id);
    setShowForm(true);
  };

  const handleDelete = (account) => {
    if (
      window.confirm(
        `Are you sure you want to delete account "${account.name}"?`
      )
    ) {
      setAccounts(accounts.filter((a) => a.id !== account.id));
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      type: "savings",
      balance: "",
      status: "active",
      accountNumber: "",
      bank: "",
    });
    setIsEditing(false);
    setCurrentId(null);
    setShowForm(false);
  };

  const handleAddNew = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({
      name: "",
      type: "savings",
      balance: "",
      status: "active",
      accountNumber: "",
      bank: "",
    });
  };

  const getTypeColor = (type) => {
    const typeObj = accountTypes.find((t) => t.value === type);
    return typeObj ? typeObj.color : "bg-gray-100 text-gray-800";
  };

  const getStatusColor = (status) => {
    const statusObj = statusTypes.find((s) => s.value === status);
    return statusObj ? statusObj.color : "bg-gray-100 text-gray-800";
  };

  const getTotalBalance = () => {
    return filteredAccounts.reduce((sum, account) => sum + account.balance, 0);
  };

  const getActiveAccountsCount = () => {
    return accounts.filter((acc) => acc.status === "active").length;
  };

  const getHighestBalance = () => {
    return accounts.length > 0
      ? Math.max(...accounts.map((acc) => acc.balance))
      : 0;
  };

  return (
    <div className="lg: w-auto min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-none px-2 sm:px-4 lg:px-6 py-4">
        {/* Header */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Account Management
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Manage your accounts and track balances
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="relative flex-1 sm:flex-none sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search accounts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              >
                <option value="all">All Types</option>
                {accountTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              >
                <option value="all">All Status</option>
                {statusTypes.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>

              <button
                onClick={handleAddNew}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                New Account
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
                <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Total Accounts
                </p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  {accounts.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 sm:p-3 rounded-lg">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Total Balance
                </p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  ${getTotalBalance().toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 sm:p-3 rounded-lg">
                <Building className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">Active</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  {getActiveAccountsCount()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 sm:p-3 rounded-lg">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Highest Balance
                </p>
                <p className="text-lg sm:text-2xl font-bold text-gray-800">
                  ${getHighestBalance().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-lg sm:rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-200 max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800">
                    {isEditing ? "Edit Account" : "Create New Account"}
                  </h3>
                  <button
                    onClick={handleCancel}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Primary Savings"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Number
                      </label>
                      <input
                        type="text"
                        value={formData.accountNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            accountNumber: e.target.value,
                          })
                        }
                        placeholder="ACC001"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Type
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) =>
                          setFormData({ ...formData, type: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      >
                        {accountTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      value={formData.bank}
                      onChange={(e) =>
                        setFormData({ ...formData, bank: e.target.value })
                      }
                      placeholder="First National Bank"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Balance ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.balance}
                        onChange={(e) =>
                          setFormData({ ...formData, balance: e.target.value })
                        }
                        placeholder="0.00"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) =>
                          setFormData({ ...formData, status: e.target.value })
                        }
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      >
                        {statusTypes.map((status) => (
                          <option key={status.value} value={status.value}>
                            {status.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      {isEditing ? "Update" : "Create"} Account
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Accounts List */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
          <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Accounts ({filteredAccounts.length})
            </h2>
          </div>

          {filteredAccounts.length === 0 ? (
            <div className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="text-gray-400 mb-4">
                <CreditCard className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                {searchTerm ? "No accounts found" : "No accounts yet"}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {searchTerm
                  ? `No accounts match "${searchTerm}". Try a different search term.`
                  : "Get started by creating your first account."}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {/* Desktop Table View */}
              <div className="hidden lg:block">
                <div className="bg-gray-50 px-6 py-4">
                  <div className="grid grid-cols-12 gap-4 font-semibold text-gray-700">
                    <div className="col-span-2">Account</div>
                    <div className="col-span-2">Type</div>
                    <div className="col-span-2">Bank</div>
                    <div className="col-span-2">Balance</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2 text-right">Actions</div>
                  </div>
                </div>
                {filteredAccounts.map((account, index) => (
                  <div
                    key={account.id}
                    className={`px-6 py-4 hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-25"
                    }`}
                  >
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-2">
                        <div>
                          <span className="text-gray-800 font-medium">
                            {account.name}
                          </span>
                          <p className="text-xs text-gray-500">
                            {account.accountNumber}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                            account.type
                          )}`}
                        >
                          {
                            accountTypes.find((t) => t.value === account.type)
                              ?.label
                          }
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-700">{account.bank}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-800 font-medium">
                          ${account.balance.toLocaleString()}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            account.status
                          )}`}
                        >
                          {
                            statusTypes.find((s) => s.value === account.status)
                              ?.label
                          }
                        </span>
                      </div>
                      <div className="col-span-2 flex justify-end gap-2">
                        <button
                          className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="View account"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Download statement"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(account)}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Edit account"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(account)}
                          className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-lg transition-all duration-200 transform hover:scale-110 active:scale-95"
                          title="Delete account"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile/Tablet Card View */}
              <div className="lg:hidden">
                {filteredAccounts.map((account) => (
                  <div
                    key={account.id}
                    className="p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                            {account.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {account.accountNumber} • {account.bank}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                                account.type
                              )}`}
                            >
                              {
                                accountTypes.find(
                                  (t) => t.value === account.type
                                )?.label
                              }
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                account.status
                              )}`}
                            >
                              {
                                statusTypes.find(
                                  (s) => s.value === account.status
                                )?.label
                              }
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                          <button
                            className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="View account"
                          >
                            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button
                            onClick={() => handleEdit(account)}
                            className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Edit account"
                          >
                            <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(account)}
                            className="bg-red-100 hover:bg-red-200 text-red-700 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-110 active:scale-95"
                            title="Delete account"
                          >
                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-gray-400" />
                          <span className="font-medium text-lg">
                            ${account.balance.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
