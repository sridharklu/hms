import logo from './logo.svg';
import './App.css';
import Header from './common/header/Header';
import DoctorTable from './common/table/doctorTable/DoctorTable';
import SideBar from './common/sidebar/SideBar';
import Layout from './common/layout/Layout';
import DepartmentScreen from './containers/departmentScreen/DepartmentScreen';
import DoctorScreen from './containers/doctorScreen/DoctorScreen';
import LabTestTable from './common/table/labTestTable/LabTestTable';
import LabTestScreen from './containers/labTestScreen/LabTestScreen'; 
import Dashboard from './containers/dashboardScreen/dashboard/Dashboard';
import LabTestGroup from './containers/labTestGroup/LabTestGroup';
import Router from './routes/Routes';
import EventScreen from './containers/eventScreen/EventScreen';
import SelectScreen from './containers/eventScreen/SelectScreen';
import Sample1 from './containers/sample/Sample1';
import Sample2 from './containers/sample/Sample2';
import Sample3 from './containers/sample/Sample3';
import { useState } from 'react';



function App() {

  const [Name, setName]= useState('wasim');

  return (
    <div className="App">
      {/* <Header/> */}                                                     
      {/* <DoctorTable/> */}  
      {/* <SideBar/> */}  
      <Router/>
      {/* <EventScreen /> */}
      {/* <SelectScreen/> */}
      {/* <Dashboard/> */}
      {/* <Sample3 /> */}
    </div>
  );
}

export default App;
