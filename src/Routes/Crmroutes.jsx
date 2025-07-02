import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LeadManagement from "../Components/CRM_Module/LeadManagement";
import CustomerManagement from "../Components/CRM_Module/CustomerManagement";
import FollowUps from "../components/CRM_Module/FollowUps";
import Reminders from "../components/CRM_Module/Reminders";
import Proposals from "../Components/CRM_Module/Proposals";
import SalesReports from "../components/CRM_Module/SalesReports";
import Contracts from "../Components/CRM_Module/Contracts";
import Projects from "../components/CRM_Module/Projects";
import TaskManagement from "../components/CRM_Module/TaskManagement";
import Utilities from "../components/CRM_Module/Utilities";
import Settings from "../Components/CRM_Module/Settings";
import Expenses from "../components/CRM_Module/Expenses";

const Crmroutes = () => (
  <Routes>
   
    <Route path="/leads" element={<LeadManagement />} />
    <Route path="/customers" element={<CustomerManagement />} />
    <Route path="/follow-ups" element={<FollowUps />} />
    <Route path="/reminders" element={<Reminders />} />
    <Route path="/proposals" element={<Proposals />} />
    <Route path="/sales" element={<SalesReports />} />
    <Route path="/contracts" element={<Contracts />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/tasks" element={<TaskManagement />} />
    <Route path="/utilities" element={<Utilities />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/expenses" element={<Expenses />} />
  </Routes>
);

export default Crmroutes;
