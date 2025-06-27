import React from "react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-white to-gray-600">
      {/* Container */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden mt-16 mb-10 min-h-[60vh]">
        <div className="md:flex">
          {/* Sidebar */}
          <div className="bg-gradient-to-b from-blue-700 to-purple-700 p-8 md:w-1/3 flex flex-col items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=256&h=256&q=80"
              alt="Profile"
              className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white"
            />
            <h2 className="mt-4 text-3xl font-semibold text-white">John Doe</h2>
            <p className="text-purple-200">Senior Recruiter</p>
          </div>

          {/* Profile Details */}
          <div className="p-8 md:w-2/3">
            <h3 className="text-2xl font-semibold text-blue-800 ">Profile Information</h3>
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 font-medium">Name</p>
                  <p className="text-gray-800 mt-1">John Doe</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Email</p>
                  <p className="text-gray-800 mt-1">johndoe@example.com</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Location</p>
                  <p className="text-gray-800 mt-1">New York, USA</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Role</p>
                  <p className="text-gray-800 mt-1">Senior Recruiter</p>
                </div>

                <div>
                  <p className="text-gray-600 font-medium">Member Since</p>
                  <p className="text-gray-800 mt-1">20 Sep 2024</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-[6rem] mb-0 flex justify-center md:justify-start gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
                Edit Profile
              </button>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
