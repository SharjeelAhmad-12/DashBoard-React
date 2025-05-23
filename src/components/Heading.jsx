import React, { useState, useEffect } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Heading = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formattedDate = currentTime.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-4 sm:px-8 py-4 sm:py-6 bg-white/70 backdrop-blur-md shadow-xl rounded-b-3xl border-b border-gray-200">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-500 to-purple-600 drop-shadow-md">
          Dashboard
        </h1>
        <span className="hidden sm:inline text-3xl text-gray-400 font-bold">|</span>
        <p className="text-lg sm:text-xl font-medium text-gray-700">Your Control Center</p>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 text-white">
        <div className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 px-3 sm:px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
          <CalendarTodayIcon className="text-white" />
          <span className="text-sm font-semibold truncate">{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 px-3 sm:px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
          <AccessTimeIcon className="text-white" />
          <span className="text-sm font-semibold">{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Heading;