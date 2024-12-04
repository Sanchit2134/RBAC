import { useState } from "react";

const RoleForm = ({ onSave }) => {
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState({
    SuperAdmin: { read: true, write: true, edit: true },
    Manager: { read: true, write: false, edit: false },
    Accountant: { read: true, write: false, edit: false },
  });

  const handlePermissionChange = (module, permission) => {
    setPermissions((prev) => ({
      ...prev,
      [module]: { ...prev[module], [permission]: !prev[module][permission] },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRole = {
      name: roleName,
      accounts: 0,
      description: "Custom Permissions",
    };
    onSave(newRole);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Role Name</label>
        <input
          type="text"
          className="w-full border rounded p-2 mt-1"
          placeholder="Role Name"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
      </div>

      {/* Permissions Section */}
      {Object.keys(permissions).map((module) => (
        <div
          key={module}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b py-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="font-medium">{module}</span>
              <p className="text-xs text-gray-500">Show 7 sub-categories</p>
            </div>
            <div className="flex flex-wrap space-x-2 mt-2 sm:mt-0">
              {["read", "write", "edit"].map((perm) => (
                <label key={perm} className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    className="rounded"
                    checked={permissions[module][perm]}
                    onChange={() => handlePermissionChange(module, perm)}
                  />
                  <span className="text-sm capitalize">{perm}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default RoleForm;
