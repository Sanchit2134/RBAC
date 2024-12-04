import React from "react";
import Navbar from "./components/Navbar";
import RoleCards from "./components/RoleCard";
import AdminTable from "./components/AdminTable";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6">
        <RoleCards />
        <AdminTable />
      </main>
    </div>
  );
}

export default App;
