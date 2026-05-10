import AdminSidebar from './AdminSidebar'

import './admin.css'

export default function AdminLayout({
  children
}) {

  return (
    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-content">

        {children}

      </div>

    </div>
  )
}