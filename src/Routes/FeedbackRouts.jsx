import { Routes, Route, Navigate } from "react-router-dom";

// Nadbrahma Components
import CALL1 from "../Components/Froms/FeedbackFrom/nadbramhacomponents/call1folder1/CALL1";
import CALL2 from "../Components/Froms/FeedbackFrom/nadbramhacomponents/call2folder2/CALL2";
import CALL3 from "../Components/Froms/FeedbackFrom/nadbramhacomponents/call3folder3/CALL3";
import CALL4 from "../Components/Froms/FeedbackFrom/nadbramhacomponents/call4folder4/CALL4";
import CALL5 from "../Components/Froms/FeedbackFrom/nadbramhacomponents/call5folder5/CALL5";
import CALL6 from "../Components/Froms/FeedbackFrom/nadbramhacomponents/call6folder6/CALL6";

// Yewale Components
import YewaleCALL1 from "../Components/Froms/FeedbackFrom/yewalecomponents/call1folder1/CALL1";
import YewaleCALL2 from "../Components/Froms/FeedbackFrom/yewalecomponents/call2folder2/CALL2";
import YewaleCALL3 from "../Components/Froms/FeedbackFrom/yewalecomponents/call3folder3/CALL3";
import YewaleCALL4 from "../Components/Froms/FeedbackFrom/yewalecomponents/call4folder4/CALL4";
import YewaleCALL5 from "../Components/Froms/FeedbackFrom/yewalecomponents/call5folder5/CALL5";
import YewaleCALL6 from "../Components/Froms/FeedbackFrom/yewalecomponents/call6folder6/YewaleCALL6";
import YewaleCALL7 from "../Components/Froms/FeedbackFrom/yewalecomponents/call7folder7/CALL7";
import YewaleCALL8 from "../Components/Froms/FeedbackFrom/yewalecomponents/call8folder8/CALL8";
import YewaleCALL9 from "../Components/Froms/FeedbackFrom/yewalecomponents/call9folder9/CALL9";

// 404 Component
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-xl text-gray-700">Page Not Found</p>
        <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
        <a href="/" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default function AppRoutes({ role, onLogin }) {
  return (
    <Routes>
      {/* Nadbrahma Component Routes */}
      <Route path="/nadbramhacomponents/call1folder1" element={<CALL1 />} />
      <Route path="/nadbramhacomponents/call2folder2" element={<CALL2 />} />
      <Route path="/nadbramhacomponents/call3folder3" element={<CALL3 />} />
      <Route path="/nadbramhacomponents/call4folder4" element={<CALL4 />} />
      <Route path="/nadbramhacomponents/call5folder5" element={<CALL5 />} />
      <Route path="/nadbramhacomponents/call6folder6" element={<CALL6 />} />
      {/* Yewale Component Routes */}
      <Route path="/yewalecomponents/call1folder1" element={<YewaleCALL1 />} />
      <Route path="/yewalecomponents/call2folder2" element={<YewaleCALL2 />} />
      <Route path="/yewalecomponents/call3folder3" element={<YewaleCALL3 />} />
      <Route path="/yewalecomponents/call4folder4" element={<YewaleCALL4 />} />
      <Route path="/yewalecomponents/call5folder5" element={<YewaleCALL5 />} />
      <Route path="/yewalecomponents/call6folder6" element={<YewaleCALL6 />} />
      <Route path="/yewalecomponents/call7folder7" element={<YewaleCALL7 />} />
      <Route path="/yewalecomponents/call8folder8" element={<YewaleCALL8 />} />
      <Route path="/yewalecomponents/call9folder9" element={<YewaleCALL9 />} />
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}