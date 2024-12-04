import React, { useState } from "react";
import RoleForm from "./RoleForm";

const RoleCards = () => {
  const [roles, setRoles] = useState([
    { name: "Super Admin", accounts: 1, description: "Default Permissions" },
    { name: "Manager", accounts: 1, description: "Default Permissions" },
    { name: "Accountant", accounts: 0, description: "Default Permissions" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddRole = (newRole) => {
    setRoles([...roles, newRole]);
    setIsModalOpen(false);
  };

  return (
    <section className="bg-white shadow-md rounded p-6 my-6">
      <h2 className="font-bold text-xl mb-4">Administrator roles available</h2>
      <p className="text-gray-600 mb-6">
        A role provides access to predefined menus and features based on the
        assigned role.
      </p>
      {/* Grid layout for role cards, responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {roles.map((role, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow-sm hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{role.name}</h3>
            <p className="text-gray-600">{role.accounts} Accounts</p>
            <p className="text-blue-600">{role.description}</p>
          </div>
        ))}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex justify-center items-center border p-4 rounded shadow-sm hover:shadow-lg transition text-blue-600 font-semibold sm:col-span-2 md:col-span-1"
        >
          + Add New Roles
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <h2 className="text-lg font-bold mb-4">Add Role</h2>
            <RoleForm onSave={handleAddRole} />
          </div>
        </div>
      )}
    </section>
  );
};

export default RoleCards;
