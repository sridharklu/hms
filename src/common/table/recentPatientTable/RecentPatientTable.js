import React ,{useEffect,useState,useContext }from 'react';
import {GlobalVariable} from '../../../common/baseUrl/baseUrl'
import axios  from "axios";
import { PatientContext } from '../../../containers/context/patientContext/PatientContext';

const RecentPatientTable = () => {


  const { patient, updatePatients } = useContext(PatientContext)


  useEffect(() => {
    axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/patients`,
      // { headers: { "token": localStorage.getItem("token") } }
      )
      .then((res) => {
         //console.log(res.data.data)
         updatePatients(res.data.data)
        // console.log(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])
  return (
    <div className='recent-patient'>
       <table className='recent-orders'>
    <tr className='recent-orderrow'>
      <th>patientName</th>
      <th>Gender</th>
      <th>Mobile Number</th>
    </tr>
    <tbody>
          {patient?.map((item, index) => item.status && (
           
              <tr key={index}>
                {/* <th scope="row">{item._id}</th> */}
                <td>{item.patientName}</td>
                <td>{item.patientGender}</td>
                <td>{item.patientMobile}</td>
                {/* <td>
                  {/* <ul>
                    {item.participants.map((p, i) => {
                      return (
                        <li key={i}>
                          {p.name} || {p.email}
                        </li>
                      );
                    })}
                  </ul> 
                </td> */}
              </tr>
            )
          )}
        </tbody>
   
  </table>
    </div>
  )
}

export default RecentPatientTable