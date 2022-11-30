import React from "react";
import RecentOrdersTable from "../../../common/table/recentOrdersTable/RecentOrdersTable";

const RecentOrders = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-recentOrders">
        <div className="recent-order">
          <p>Recent Orders</p>
          <hr/>
        </div>
        <RecentOrdersTable />
      </div>
    </div>
  );
};

export default RecentOrders;
