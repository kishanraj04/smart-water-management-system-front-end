import React, { useState } from "react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Kishan Raj",
    email: "kishan@example.com",
    phone: "+91 9876543210",
    role: "Administrator",
    company: "Smart Water Management",
    location: "Gurgaon, Haryana",
    status: "Active",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Updated User:", user);

    // API Call Here

    setIsEditing(false);
  };

  return (
    <div className="p-6 min-h-screen">
      
      <div className="border border-gray-300 rounded-xl p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://ui-avatars.com/api/?name=Kishan+Raj&background=2563eb&color=fff&size=200"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />

          <div>
            <h2 className="text-2xl font-bold text-blue-600">
              {user.name}
            </h2>

            <p className="text-gray-600">{user.role}</p>

            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm">
              {user.status}
            </span>
          </div>
        </div>

        {/* Fields */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <ProfileField
            label="Full Name"
            name="name"
            value={user.name}
            isEditing={isEditing}
            onChange={handleChange}
          />

          <ProfileField
            label="Email"
            name="email"
            value={user.email}
            isEditing={isEditing}
            onChange={handleChange}
          />

          <ProfileField
            label="Phone Number"
            name="phone"
            value={user.phone}
            isEditing={isEditing}
            onChange={handleChange}
          />

          <ProfileField
            label="Role"
            name="role"
            value={user.role}
            isEditing={isEditing}
            onChange={handleChange}
          />

          <ProfileField
            label="Organization"
            name="company"
            value={user.company}
            isEditing={isEditing}
            onChange={handleChange}
          />

          <ProfileField
            label="Location"
            name="location"
            value={user.location}
            isEditing={isEditing}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-5 py-2 rounded-lg"
              >
                Save Profile
              </button>

              <button
                onClick={() => setIsEditing(false)}
                className="border px-5 py-2 rounded-lg"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ProfileField({
  label,
  name,
  value,
  isEditing,
  onChange,
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <p className="text-gray-500 text-sm mb-2">
        {label}
      </p>

      {isEditing ? (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-blue-500"
        />
      ) : (
        <h3 className="font-semibold">
          {value}
        </h3>
      )}
    </div>
  );
}