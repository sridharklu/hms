import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddtestresultScreen from "../containers/addtestresultScreen/AddtestresultScreen";
import Dashboard from "../containers/dashboardScreen/dashboard/Dashboard";
import CreateDepartment from "../containers/departmentScreen/createDepartment/CreateDepartment";

import DepartmentScreen from "../containers/departmentScreen/DepartmentScreen";
import DoctorPage from "../containers/doctorScreen/doctorPage/DoctorPage";
import DoctorScreen from "../containers/doctorScreen/DoctorScreen";
import CreateTestGroup from "../containers/labTestGroup/createTestGroup/CreateTestGroup";
import LabTestGroup from "../containers/labTestGroup/LabTestGroup";
import CreateLabTestPage from "../containers/labTestScreen/createLabTestPage/CreateLabTestPage";
import LabTestScreen from "../containers/labTestScreen/LabTestScreen";
import LoginScreen from "../containers/LoginScreen/Login";
import CreateOrder from "../containers/orderScreen/createOrder/CreateOrder";
import Order from "../containers/orderScreen/Order";
import RenderOrderPage from "../containers/orderScreen/renderOrderPage/RenderOrderPage";
import CreatePatients from "../containers/patientScreen/createPatients/CreatePatients";
import PatientScreen from "../containers/patientScreen/PatientScreen";
import TestResultPage from "../containers/testResultScreen/testResultPage/TestResultPage";
import TestResultScreen from "../containers/testResultScreen/TestResultScreen";
import TestName from "../containers/testname/TestName";

const Router = () => {

  const UserName = localStorage.getItem('userName')

  return (
    <div>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={ <LoginScreen />} />

          <Route path="/patient" element={<PatientScreen />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="createpatient" element={<CreatePatients />} />
          <Route path="department" element={<DepartmentScreen />} />
          <Route path="doctors" element={<DoctorScreen />} />
          <Route path="labtestgroup" element={<LabTestGroup />} />
          <Route path="labtest" element={<LabTestScreen />} />
          <Route path="order" element={<Order />} />
          <Route path="test" element={<TestResultScreen />} />
          <Route path="createorder" element={<CreateOrder/>} />
          <Route path="createlabtest" element={<CreateLabTestPage/>} />
          <Route path="render" element={<RenderOrderPage/>} />
          <Route path="checkedresult" element={<TestResultPage/>} />
          <Route path="createdepartment" element={<CreateDepartment/>} />
          <Route path="createtestgroup" element={<CreateTestGroup/>} />
          <Route path="createdoctor" element={<DoctorPage/>} />
          <Route path="addtestresult" element={<AddtestresultScreen/>} />
          <Route path="testname" element={<TestName/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
