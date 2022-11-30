import React,{useEffect,useContext} from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import { OrderContext } from '../../../containers/context/orderContext/OrderContext'
import PatientsListData, { PatientsTableHeader } from '../../../mock/tableData/PatientData'
import axios from 'axios';
import { GlobalVariable } from '../../baseUrl/baseUrl';



const RecentOrdersTable = () => {

  const{orders, updateOrders}=useContext(OrderContext);

useEffect(() => {
  axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/orders`,
    // { headers: { "token": localStorage.getItem("token") } }
    )
    .then((res) => {
       //console.log(res.data.data)
       updateOrders(res.data.data)
      // console.log(res.data.results)
    })
    .catch((err) => {
      console.log(err)
    })

}, [])


  return (
    <table className='recent-orders'>
      <thead>

      <tr className='recent-orderrow'>
      <th>patientName</th>
      <th>orderDate</th>
      <th>totalAmount</th>
    </tr>
      </thead>
    
   
    <tbody>
          {orders.length > 0 && orders.map((item, index) => {
            return (
              <tr key={index}>
                {/* <th scope="row">{item._id}</th> */}
                <td>{item.patientName}</td>
                <td>{item.orderDate}</td>
                <td>{item.totalAmount}</td>
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
  
  )
}

export default RecentOrdersTable