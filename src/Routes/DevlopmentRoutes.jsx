import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DevelopmentDashboard from '../Components/DEVELOPMENT_DASHBOARD/DevelopmentDashboard';

const DevelopmentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DevelopmentDashboard />} />
    </Routes>
  );
};

export default DevelopmentRoutes;