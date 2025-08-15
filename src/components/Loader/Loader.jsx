import React from 'react';

const Loader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className="transition-transform transform hover:scale-105 rounded-lg overflow-hidden border border-gray-200 bg-white shadow"
        >
          <div className="p-6 animate-pulse">
            {/* Top badges */}
            <div className="flex items-center justify-between mb-4">
              <div className="h-6 w-20 bg-gray-200 rounded-full" />
              <div className="h-6 w-24 bg-gray-300 rounded-full" />
            </div>

            {/* Position */}
            <div className="h-7 w-48 bg-gray-300 rounded mb-2" />

            {/* Company */}
            <div className="h-5 w-32 bg-gray-200 rounded mb-2" />

            {/* Location */}
            <div className="h-4 w-40 bg-gray-100 rounded mb-4" />

            {/* Calendar + Experience */}
            <div className="flex items-center gap-3 mb-2">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-4 w-4 bg-gray-200 rounded-full" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
            <div className="h-6 w-24 bg-gray-300 rounded-full" />
            <div className="h-8 w-20 bg-gray-400 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
