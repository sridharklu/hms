import React from "react";
import "../../../assets/css/index.css";
import Layout from "../../../common/layout/Layout";
import CreateOrder from "../createOrder/CreateOrder";
import QuickPatientRegistration from "../quickPatientRegistration/QuickPatientRegistration";
import RecentOrders from "../recentOrders/RecentOrders";
import RecentPatients from "../recentPatients/RecentPatients";
import RecentTestResults from "../recentTestResults/RecentTestResults";

const Dashboard = () => {
  return (
    <Layout>
    <div className="dashboard-container">
      <div><QuickPatientRegistration/></div>
      <div><CreateOrder/></div>
      <div><RecentOrders/></div>
      <div><RecentTestResults/></div>
      <div><RecentPatients/></div>
    </div>
    </Layout>
  );
};

export default Dashboard;
