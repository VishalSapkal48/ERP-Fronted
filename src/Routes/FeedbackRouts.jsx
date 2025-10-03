import React from "react";
import { Routes, Route } from "react-router-dom";

// Component Imports
import FeedbackDashboard from "../Components/Feedback_Module/Pages/FeedbackDashboard.jsx";
import ServiceFeedbackForm from "../Components/Feedback_Module/ServiceFeedback/ServiceFeedbackForm.jsx";

// --- Yewale Imports ---
import YewaleGreetingCall from "../Components/Feedback_Module/Yewale/GreetingCall/PRE_GREETING.jsx";
import YewaleCall1 from "../Components/Feedback_Module/Yewale/call1folder1/CALL1.jsx";
import YewaleCall2 from "../Components/Feedback_Module/Yewale/call2folder2/CALL2.jsx";
import YewaleCall3 from "../Components/Feedback_Module/Yewale/call3folder3/CALL3.jsx";
import YewaleCall4 from "../Components/Feedback_Module/Yewale/call4folder4/CALL4.jsx";
import YewaleCall5 from "../Components/Feedback_Module/Yewale/call5folder5/CALL5.jsx";
import YewaleCall6 from "../Components/Feedback_Module/Yewale/call6folder6/YewaleCALL6.jsx";
// YewaleCall7 आता थेट वापरला जाणार नाही, पण इम्पोर्ट ठेवला आहे.
import YewaleCall7 from "../Components/Feedback_Module/Yewale/call7folder7/CALL7.jsx";
import YewaleCall8 from "../Components/Feedback_Module/Yewale/call8folder8/CALL8.jsx";
import YewaleCall9 from "../Components/Feedback_Module/Yewale/call9folder9/CALL9.jsx";

// --- Nadbrahma Imports ---
import NadbrahmaGreetingCall from "../Components/Feedback_Module/Nadbramha/GreetingCall/PRE_GREETING.jsx";
import NadbrahmaCall1 from "../Components/Feedback_Module/Nadbramha/call1folder1/CALL1.jsx";
import NadbrahmaCall2 from "../Components/Feedback_Module/Nadbramha/call2folder2/CALL2.jsx";
import NadbrahmaCall3 from "../Components/Feedback_Module/Nadbramha/call3folder3/CALL3.jsx";
import NadbrahmaCall4 from "../Components/Feedback_Module/Nadbramha/call4folder4/CALL4.jsx";
import NadbrahmaCall5 from "../Components/Feedback_Module/Nadbramha/call5folder5/CALL5.jsx";
import NadbrahmaCall6 from "../Components/Feedback_Module/Nadbramha/call6folder6/CALL6.jsx";

const FeedbackRoutes = () => {
  return (
    <Routes>
      <Route index element={<FeedbackDashboard />} />
      <Route path="dashboard" element={<FeedbackDashboard />} />
      <Route path="office" element={<ServiceFeedbackForm />} />
      <Route path="service" element={<ServiceFeedbackForm />} />

      {/* Yewale Feedback Form Routes */}
      <Route path="yewale/greeting" element={<YewaleGreetingCall />} />
      <Route path="yewale/call1" element={<YewaleCall1 />} />
      <Route path="yewale/call2" element={<YewaleCall2 />} />
      <Route path="yewale/call3" element={<YewaleCall3 />} />
      <Route path="yewale/call4" element={<YewaleCall4 />} />
      <Route path="yewale/call5" element={<YewaleCall5 />} />
      <Route path="yewale/call6" element={<YewaleCall6 />} />

      {/* --- बदल येथे केला आहे --- */}
      <Route path="yewale/call7" element={<ServiceFeedbackForm />} />

      <Route path="yewale/call8" element={<YewaleCall8 />} />
      <Route path="yewale/call9" element={<YewaleCall9 />} />

      {/* Nadbrahma Feedback Form Routes */}
      <Route path="nadbrahma/greeting" element={<NadbrahmaGreetingCall />} />
      <Route path="nadbrahma/call1" element={<NadbrahmaCall1 />} />
      <Route path="nadbrahma/call2" element={<NadbrahmaCall2 />} />
      <Route path="nadbrahma/call3" element={<NadbrahmaCall3 />} />
      <Route path="nadbrahma/call4" element={<NadbrahmaCall4 />} />
      <Route path="nadbrahma/call5" element={<NadbrahmaCall5 />} />
      <Route path="nadbrahma/call6" element={<NadbrahmaCall6 />} />

      <Route
        path="*"
        element={
          <div className="p-6 text-center text-red-500">
            404 - Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default FeedbackRoutes;