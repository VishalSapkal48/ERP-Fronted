import React, { useState, useEffect } from "react";

const CurrentDateTime = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const formatDate = now.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formatTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="text-right text-xs md:text-sm mr-2">
      <div className="text-gray-700 font-semibold">{formatDate}</div>
      <div className="text-gray-400">{formatTime}</div>
    </div>
  );
};

export default CurrentDateTime;
