import React, { useState } from "react";

const AdminTable = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: "Sanchit Thakur", email: "sanchit123@gmail.com", role: "Super Admin" },
    { id: 2, name: "Arjun", email: "arjun@gmail.com", role: "Manager" },
  ]);

  const [editAdmin, setEditAdmin] = useState(null); 
  const [showAddModal, setShowAddModal] = useState(false); 
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    role: "Super Admin",
  });

  const handleEdit = (id) => {
    const adminToEdit = admins.find((admin) => admin.id === id);
    setEditAdmin(adminToEdit);
  };

  const handleSaveEdit = () => {
    setAdmins((prevAdmins) =>
      prevAdmins.map((admin) =>
        admin.id === editAdmin.id ? editAdmin : admin
      )
    );
    setEditAdmin(null);
    alert("Admin details updated successfully!");
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (confirm) {
      setAdmins(admins.filter((admin) => admin.id !== id));
      alert("Admin deleted successfully!");
    }
  };

  const handleAddAdmin = () => {
    if (!newAdmin.name || !newAdmin.email) {
      alert("Please fill out all fields.");
      return;
    }
    setAdmins((prevAdmins) => [
      ...prevAdmins,
      { ...newAdmin, id: Date.now() }, 
    ]);
    setNewAdmin({ name: "", email: "", role: "Super Admin" }); 
    setShowAddModal(false); 
    alert("New admin added successfully!");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Administrators Accounts</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-500 text-white p-2 rounded-full flex items-center hover:bg-blue-600"
        >
          <span className="text-xl">+</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td className="border border-gray-300 px-4 py-2">{admin.name}</td>
                <td className="border border-gray-300 px-4 py-2">{admin.email}</td>
                <td className="border border-gray-300 px-4 py-2">{admin.role}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleEdit(admin.id)}
                    className="mr-2 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(admin.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editAdmin && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-11/12 sm:w-1/3">
            <h3 className="font-bold text-lg mb-4">Edit Admin Details</h3>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                value={editAdmin.name}
                onChange={(e) =>
                  setEditAdmin({ ...editAdmin, name: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                value={editAdmin.email}
                onChange={(e) =>
                  setEditAdmin({ ...editAdmin, email: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Role</label>
              <select
                value={editAdmin.role}
                onChange={(e) =>
                  setEditAdmin({ ...editAdmin, role: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="Super Admin">Super Admin</option>
                <option value="Manager">Manager</option>
                <option value="Accountant">Accountant</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setEditAdmin(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Admin Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-11/12 sm:w-1/3">
            <h3 className="font-bold text-lg mb-4">Add New Admin</h3>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                value={newAdmin.name}
                onChange={(e) =>
                  setNewAdmin({ ...newAdmin, name: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                value={newAdmin.email}
                onChange={(e) =>
                  setNewAdmin({ ...newAdmin, email: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Role</label>
              <select
                value={newAdmin.role}
                onChange={(e) =>
                  setNewAdmin({ ...newAdmin, role: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="Super Admin">Super Admin</option>
                <option value="Manager">Manager</option>
                <option value="Accountant">Accountant</option>
              </select>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAdmin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
