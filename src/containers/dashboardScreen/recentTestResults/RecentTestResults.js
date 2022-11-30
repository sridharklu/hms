import React from "react";
import RecentTestResultTable from "../../../common/table/recentTestResults/RecentTestResultTable";

const RecentTestResults = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-recentResult">
        <p>Recent Test Results</p>
         <hr/>
      </div>
      <RecentTestResultTable/>
    </div>
  );
};

export default RecentTestResults;
