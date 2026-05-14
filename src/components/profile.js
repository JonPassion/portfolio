import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md max-w-xs mx-auto">
      <img
        src="./public/profile.jpg" // 👈 Place your image in the public folder as "profile.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500"
      />
      <h2 className="text-2xl font-bold mb-1">Your Name</h2>
      <p className="text-gray-600 mb-2">Web Developer • Designer • Creator</p>
      <p className="text-sm text-gray-500">Passionate about building clean, modern interfaces and smooth user experiences.</p>
    </div>
  );
};

export default Profile;
