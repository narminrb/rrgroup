import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-[#F4F3FF]">
  <AdminSidebar />
  <main className="flex-1 bg-[#F4F3FF] p-8 overflow-y-auto">
    <Outlet />
  </main>
</div>

  );
};

export default AdminLayout;
