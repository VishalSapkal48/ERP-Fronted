import React, { useState, useMemo } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  X,
  Check,
  Building2,
  Users,
  Calendar,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  FileText,
  Link,
  Eye,
  Download,
  Star,
  AlertCircle,
} from "lucide-react";

const VendorLinkage = () => {
  const [vendors, setVendors] = useState([
    {
      id: 1,
      name: "Tech Solutions Inc",
      contact: "John Smith",
      email: "john@techsolutions.com",
      phone: "+1-555-0123",
      address: "123 Tech Street, Silicon Valley, CA",
      category: "technology",
      status: "active",
      contractStart: "2024-01-15",
      contractEnd: "2025-01-15",
      contractValue: 150000,
      rating: 4.5,
      services: ["Software Development", "IT Support"],
      paymentTerms: "Net 30",
      lastPayment: "2024-12-01",
    },
    {
      id: 2,
      name: "Global Supplies Co",
      contact: "Sarah Johnson",
      email: "sarah@globalsupplies.com",
      phone: "+1-555-0456",
      address: "456 Supply Ave, Chicago, IL",
      category: "supplies",
      status: "active",
      contractStart: "2024-03-01",
      contractEnd: "2025-03-01",
      contractValue: 75000,
      rating: 4.2,
      services: ["Office Supplies", "Equipment"],
      paymentTerms: "Net 15",
      lastPayment: "2024-11-28",
    },
    {
      id: 3,
      name: "Marketing Masters",
      contact: "Mike Wilson",
      email: "mike@marketingmasters.com",
      phone: "+1-555-0789",
      address: "789 Creative Blvd, New York, NY",
      category: "marketing",
      status: "pending",
      contractStart: "2024-06-01",
      contractEnd: "2025-06-01",
      contractValue: 90000,
      rating: 4.0,
      services: ["Digital Marketing", "Brand Strategy"],
      paymentTerms: "Net 45",
      lastPayment: "2024-11-15",
    },
    {
      id: 4,
      name: "Facility Services Plus",
      contact: "Lisa Brown",
      email: "lisa@facilityplus.com",
      phone: "+1-555-0321",
      address: "321 Service Road, Houston, TX",
      category: "services",
      status: "inactive",
      contractStart: "2023-12-01",
      contractEnd: "2024-12-01",
      contractValue: 45000,
      rating: 3.8,
      services: ["Cleaning", "Maintenance"],
      paymentTerms: "Net 30",
      lastPayment: "2024-10-30",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    phone: "",
    address: "",
    category: "technology",
    status: "active",
    contractStart: "",
    contractEnd: "",
    contractValue: "",
    rating: "",
    services: "",
    paymentTerms: "Net 30",
    lastPayment: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [error, setError] = useState("");

  const categories = [
    {
      value: "technology",
      label: "Technology",
      color: "bg-blue-100 text-blue-800",
    },
    {
      value: "supplies",
      label: "Supplies",
      color: "bg-green-100 text-green-800",
    },
    {
      value: "marketing",
      label: "Marketing",
      color: "bg-purple-100 text-purple-800",
    },
    {
      value: "services",
      label: "Services",
      color: "bg-orange-100 text-orange-800",
    },
    {
      value: "logistics",
      label: "Logistics",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      value: "consulting",
      label: "Consulting",
      color: "bg-indigo-100 text-indigo-800",
    },
  ];

  const statuses = [
    { value: "active", label: "Active", color: "bg-green-100 text-green-800" },
    {
      value: "pending",
      label: "Pending",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      value: "inactive",
      label: "Inactive",
      color: "bg-gray-100 text-gray-800",
    },
    {
      value: "suspended",
      label: "Suspended",
      color: "bg-red-100 text-red-800",
    },
  ];

  const paymentTermsOptions = [
    { value: "Net 15", label: "Net 15 Days" },
    { value: "Net 30", label: "Net 30 Days" },
    { value: "Net 45", label: "Net 45 Days" },
    { value: "Net 60", label: "Net 60 Days" },
    { value: "COD", label: "Cash on Delivery" },
    { value: "Prepaid", label: "Prepaid" },
  ];

  const filteredVendors = useMemo(() => {
    return vendors.filter((vendor) => {
      const matchesSearch =
        vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vendor.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || vendor.category === categoryFilter;
      const matchesStatus =
        statusFilter === "all" || vendor.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [vendors, searchTerm, categoryFilter, statusFilter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name.trim()) {
      setError("Vendor name is required");
      return;
    }
    if (!formData.contact.trim()) {
      setError("Contact person is required");
      return;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setError("Valid email is required");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Phone number is required");
      return;
    }
    if (
      formData.contractStart &&
      formData.contractEnd &&
      new Date(formData.contractEnd) < new Date(formData.contractStart)
    ) {
      setError("Contract end date cannot be before start date");
      return;
    }
    if (formData.rating && (formData.rating < 0 || formData.rating > 5)) {
      setError("Rating must be between 0 and 5");
      return;
    }

    const vendorData = {
      ...formData,
      contractValue: parseFloat(formData.contractValue) || 0,
      rating: parseFloat(formData.rating) || 0,
      services: formData.services
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0),
    };

    if (isEditing) {
      setVendors(
        vendors.map((v) => (v.id === currentId ? { ...v, ...vendorData } : v))
      );
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setVendors([...vendors, { id: Date.now(), ...vendorData }]);
    }

    setFormData({
      name: "",
      contact: "",
      email: "",
      phone: "",
      address: "",
      category: "technology",
      status: "active",
      contractStart: "",
      contractEnd: "",
      contractValue: "",
      rating: "",
      services: "",
      paymentTerms: "Net 30",
      lastPayment: "",
    });
    setShowForm(false);
  };

  const handleEdit = (vendor) => {
    setFormData({
      name: vendor.name,
      contact: vendor.contact,
      email: vendor.email,
      phone: vendor.phone,
      address: vendor.address,
      category: vendor.category,
      status: vendor.status,
      contractStart: vendor.contractStart,
      contractEnd: vendor.contractEnd,
      contractValue: vendor.contractValue.toString(),
      rating: vendor.rating.toString(),
      services: vendor.services.join(", "),
      paymentTerms: vendor.paymentTerms,
      lastPayment: vendor.lastPayment,
    });
    setIsEditing(true);
    setCurrentId(vendor.id);
    setShowForm(true);
    setError("");
  };

  const handleDelete = (vendor) => {
    if (
      window.confirm(`Are you sure you want to delete vendor "${vendor.name}"?`)
    ) {
      setVendors(vendors.filter((v) => v.id !== vendor.id));
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      contact: "",
      email: "",
      phone: "",
      address: "",
      category: "technology",
      status: "active",
      contractStart: "",
      contractEnd: "",
      contractValue: "",
      rating: "",
      services: "",
      paymentTerms: "Net 30",
      lastPayment: "",
    });
    setIsEditing(false);
    setCurrentId(null);
    setShowForm(false);
    setError("");
  };

  const handleAddNew = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({
      name: "",
      contact: "",
      email: "",
      phone: "",
      address: "",
      category: "technology",
      status: "active",
      contractStart: "",
      contractEnd: "",
      contractValue: "",
      rating: "",
      services: "",
      paymentTerms: "Net 30",
      lastPayment: "",
    });
    setError("");
  };

  const getCategoryColor = (category) => {
    const categoryObj = categories.find((c) => c.value === category);
    return categoryObj ? categoryObj.color : "bg-gray-100 text-gray-800";
  };

  const getStatusColor = (status) => {
    const statusObj = statuses.find((s) => s.value === status);
    return statusObj ? statusObj.color : "bg-gray-100 text-gray-800";
  };

  const getTotalContractValue = () => {
    return filteredVendors.reduce(
      (sum, vendor) => sum + vendor.contractValue,
      0
    );
  };

  const getActiveVendorsCount = () => {
    return vendors.filter((vendor) => vendor.status === "active").length;
  };

  const getAverageRating = () => {
    const totalRating = vendors.reduce((sum, vendor) => sum + vendor.rating, 0);
    return vendors.length > 0 ? (totalRating / vendors.length).toFixed(1) : 0;
  };

  const getExpiringContracts = () => {
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
    return vendors.filter(
      (vendor) =>
        new Date(vendor.contractEnd) <= threeMonthsFromNow &&
        vendor.status === "active"
    ).length;
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= Math.round(rating)
              ? "text-yellow-400 fill-current"
              : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className=" w-auto min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
      <div className="w-full max-w-none px-2 sm:px-4 lg:px-6 py-4">
        {/* Header */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Vendor Linkage Management
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Manage vendor relationships, contracts, and partnerships
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="relative flex-1 sm:flex-none sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search vendors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  aria-label="Search vendors"
                />
              </div>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                aria-label="Filter by category"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                aria-label="Filter by status"
              >
                <option value="all">All Status</option>
                {statuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>

              <button
                onClick={handleAddNew}
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center text-sm sm:text-base"
                aria-label="Add new vendor"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Add Vendor
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-600">
                  Total Vendors
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">
                  {vendors.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-600">
                  Active Vendors
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">
                  {getActiveVendorsCount()}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-600">
                  Total Contract Value
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">
                  ${getTotalContractValue().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-600">
                  Average Rating
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-600">
                  {getAverageRating()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vendor Form */}
        {showForm && (
          <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-teal-600">
              {isEditing ? "Edit Vendor" : "Add New Vendor"}
            </h2>
            {error && (
              <div className="flex items-center gap-2 p-2 sm:p-3 mb-3 sm:mb-4 bg-red-100 text-red-800 rounded-lg text-sm sm:text-base">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                {error}
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Vendor Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-600"
                >
                  Contact Person
                </label>
                <input
                  id="contact"
                  type="text"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                  required
                  aria-required="true"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-600"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-600"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                  aria-label="Select vendor category"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-600"
                >
                  Status
                </label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                  aria-label="Select vendor status"
                >
                  {statuses.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="contractStart"
                  className="block text-sm font-medium text-gray-600"
                >
                  Contract Start
                </label>
                <input
                  id="contractStart"
                  type="date"
                  value={formData.contractStart}
                  onChange={(e) =>
                    setFormData({ ...formData, contractStart: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="contractEnd"
                  className="block text-sm font-medium text-gray-600"
                >
                  Contract End
                </label>
                <input
                  id="contractEnd"
                  type="date"
                  value={formData.contractEnd}
                  onChange={(e) =>
                    setFormData({ ...formData, contractEnd: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="contractValue"
                  className="block text-sm font-medium text-gray-600"
                >
                  Contract Value ($)
                </label>
                <input
                  id="contractValue"
                  type="number"
                  min="0"
                  value={formData.contractValue}
                  onChange={(e) =>
                    setFormData({ ...formData, contractValue: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-600"
                >
                  Rating (0-5)
                </label>
                <input
                  id="rating"
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="services"
                  className="block text-sm font-medium text-gray-600"
                >
                  Services (comma-separated)
                </label>
                <input
                  id="services"
                  type="text"
                  value={formData.services}
                  onChange={(e) =>
                    setFormData({ ...formData, services: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="e.g., Software Development, IT Support"
                />
              </div>
              <div>
                <label
                  htmlFor="paymentTerms"
                  className="block text-sm font-medium text-gray-600"
                >
                  Payment Terms
                </label>
                <select
                  id="paymentTerms"
                  value={formData.paymentTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, paymentTerms: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                  aria-label="Select payment terms"
                >
                  {paymentTermsOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="lastPayment"
                  className="block text-sm font-medium text-gray-600"
                >
                  Last Payment
                </label>
                <input
                  id="lastPayment"
                  type="date"
                  value={formData.lastPayment}
                  onChange={(e) =>
                    setFormData({ ...formData, lastPayment: e.target.value })
                  }
                  className="mt-1 w-full p-2 sm:p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
              <div className="sm:col-span-2 flex justify-end gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base"
                  aria-label="Cancel form"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 sm:px-4 py-2 sm:py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base"
                  aria-label={isEditing ? "Update vendor" : "Save vendor"}
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  {isEditing ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Vendors Table */}
        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-teal-50">
                <tr>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">
                    Vendor
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">
                    Contact
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">
                    Category
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">
                    Status
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">
                    Contract Value
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">
                    Rating
                  </th>
                  <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredVendors.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="px-3 sm:px-4 py-3 sm:py-4 text-center text-sm sm:text-base text-gray-500"
                    >
                      No vendors found
                    </td>
                  </tr>
                ) : (
                  filteredVendors.map((vendor) => (
                    <tr
                      key={vendor.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-3 sm:px-4 py-3 sm:py-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                          <div>
                            <p className="text-sm sm:text-base font-semibold text-gray-800">
                              {vendor.name}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500">
                              {vendor.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4">
                        <div>
                          <p className="text-sm sm:text-base text-gray-800">
                            {vendor.contact}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {vendor.phone}
                          </p>
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4">
                        <span
                          className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${getCategoryColor(
                            vendor.category
                          )}`}
                        >
                          {categories.find((c) => c.value === vendor.category)
                            ?.label || "Unknown"}
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4">
                        <span
                          className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${getStatusColor(
                            vendor.status
                          )}`}
                        >
                          {statuses.find((s) => s.value === vendor.status)
                            ?.label || "Unknown"}
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base">
                        ${vendor.contractValue.toLocaleString()}
                      </td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4">
                        <div className="flex items-center gap-1">
                          {renderStars(vendor.rating)}
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 py-3 sm:py-4">
                        <div className="flex gap-1 sm:gap-2">
                          <button
                            onClick={() => handleEdit(vendor)}
                            className="p-1 sm:p-2 text-teal-600 hover:bg-teal-100 rounded-full transition-all duration-200"
                            aria-label={`Edit vendor ${vendor.name}`}
                          >
                            <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(vendor)}
                            className="p-1 sm:p-2 text-red-600 hover:bg-red-100 rounded-full transition-all duration-200"
                            aria-label={`Delete vendor ${vendor.name}`}
                          >
                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLinkage;
