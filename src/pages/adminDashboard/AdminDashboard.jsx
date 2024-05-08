import React from "react";
import {
  ViewCoursesGraph,
  ViewQuizzesGraph,
  CommunityManagementLineChart,
  UserManagementChart,
} from "../../components/Charts/adminDashboardCharts";
import AdminHeader from "../../components/header/AdminHeader";
import AdminSideNav from "../../components/AdminSideNav/SideNav";

function AdminDashboard() {
  return (
    <div>
      <AdminHeader />
      <div className="container p-4 mx-auto">
        <div className="grid grid-cols-2 ml-48">
          <AdminSideNav />
          <div>
              <ViewQuizzesGraph className="mt-5" />
            </div>
            <div>
              <ViewCoursesGraph className="mt-5" />
            </div>
          <section>
            <div>
              <CommunityManagementLineChart className="mt-5" />
            </div>
            </section>
            <section>
            <div>
              <UserManagementChart className="mt-5" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
