import React,{useContext,useEffect} from 'react';
import { GlobalVariable } from '../../baseUrl/baseUrl';
import axios from 'axios';
import { TestresultContext } from '../../../containers/context/testresultContext.js/testresultContext';

const RecentTestResultTable = () => {
  const{testresult,updatetestresult}=useContext(TestresultContext)

  useEffect(() => {
    axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/testresult`,
      // { headers: { "token": localStorage.getItem("token") } }
      )
      .then((res) => {
         //console.log(res.data.data)
         updatetestresult(res.data.data)
        // console.log(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <div className='recent-patient'>
       <table className='recent-orders'>
        <thead> 
           <tr className='recent-orderrow'>
            <th>OrderNo</th>
            <th>patientName</th>
            <th>totalAmount</th>
            <th>paidAmount</th>
           </tr>
    </thead>
  
    <tbody>
          {testresult.length > 0 && testresult.map((item, index) => {
            return (
              <tr key={index}>
                {/* <th scope="row">{item._id}</th> */}
                <td>{item.OrderNo}</td>
                <td>{item.patientName}</td>
                <td>{item.totalAmount}</td>
                <td>{item.paidAmount}</td>
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
            );
          })}
        </tbody>
   
  </table>
    </div>
  )
}

export default RecentTestResultTable