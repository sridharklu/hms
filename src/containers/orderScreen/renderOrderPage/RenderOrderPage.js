import React,{useEffect, useContext,useRef} from 'react'
import { MdOutlineAlarm, MdOutlineArrowForward, MdOutlineDoubleArrow, MdOutlineMenuBook, MdOutlineTableRows, MdPrint } from 'react-icons/md'
import Button from '../../../common/button/Button'
import OrderBillingForm from '../../../common/forms/OrderBillingForm'
import Layout from '../../../common/layout/Layout'
import "../../../assets/css/index.css";
import axios from 'axios';
import { GlobalVariable } from '../../../common/baseUrl/baseUrl'
import { OrderContext } from '../../context/orderContext/OrderContext'
import { useNavigate } from 'react-router-dom'
import { OrderBillingContext } from '../../context/orderBillingContext/orderBillingContext'




const RenderOrderPage = () => {
  const navigate = useNavigate();

  const {cancelButton}=useContext(OrderContext)

  

 //const {orders, updateOrders } = useContext(OrderContext)

// console.log(orders,"orders");


// const fetchdata = async (event) =>{ 
//   axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/orders/testorder-result?patientName=rajesh`,
//   { headers: { "token": localStorage.getItem("token") } })
//    .then((res) => {
//       //console.log(res.data.data)
//      //  updateOrders(res.data.data)
//      //  updateOrders(res.data.data)
//     console.log(res.data.data, "res data")
//    })
//    .catch((err) => {
//      console.log(err)
//    })

   
// }

//     useEffect(() => {
//       fetchdata();

//    }, [])


const {updateLabtests} = useContext(OrderBillingContext)

useEffect(() => {
  axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/labtests`,
    { headers: { "token": localStorage.getItem("token") } })
    .then((res) => {
       //console.log(res.data.data)
      updateLabtests(res.data.data)
      //  updateFilterData(res.data.data)
      //  console.log(res.data.data, "res data")
    })
    .catch((err) => {
      console.log(err)
    })

}, [])



  return (
    <Layout>
    <div className="create-patient">
      <div className="create-topheader">
        <div className="create-navigate">
        <p className="navigateLable">Patient</p>
          <MdOutlineDoubleArrow />
          <p>Edit</p>
        </div>
        
      </div>
      <OrderBillingForm />
    </div>
  </Layout>
  )
}

export default RenderOrderPage