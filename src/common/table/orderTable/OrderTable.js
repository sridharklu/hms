import React,{useContext} from "react";
import { MdOutlineDelete } from "react-icons/md";
import OrdersData, { OrdersTableHeader } from "../../../mock/tableData/OrderData";
import DButton from "../../button/Button";
import {Button} from 'react-bootstrap';
import "../../../assets/css/index.css"
import { Link } from "react-router-dom";
import { OrderContext } from "../../../containers/context/orderContext/OrderContext";
import Checkbox from "../patientTable/checkbox";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const OrderTable = () => {
  const navigate = useNavigate()

const {orders,handleSelectAll,isCheckAll,handleClick,isCheck,
  selectCount,alldelete,updateSinglePatient,updateSingleOrder } = useContext(OrderContext)


  return (
<div >
<div className="statusContainer">
        <h5>{selectCount } selected</h5>
        <DButton className="update-box" label="Update Status" />
        <DButton
          className="update-box"
          icon={<MdOutlineDelete />}
          label="Delete" 
          onClick={alldelete}
        />
      </div>
<div className="ordersTableContainer">
      <table>
        

        <thead>
       <tr>
       <td className="createOrder" >
         <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      /> </td>
          { OrdersTableHeader.map((data, index) => (
                <th key={index}>{data.title}</th>
            ))}
  
        </tr>
  
          </thead>
        { orders.length > 0 && orders.map((data, index) => data.orderStatus && (
          <tbody key={index}>
          <tr>
                <td className="createOrder" >
         <Checkbox key={data._id} type="checkbox"  
            id={data._id}
            handleClick={handleClick}
             isChecked={isCheck.includes(data._id)}
          />
        
          </td>
            <td>{data.orderCode}</td>
            {/* <td>{data.PatientCode}</td> */}
            <td>{data.patientName}</td>
            <td>{data.patientAge}</td>
            <td>{data.orderDate}</td>
            <td>{data.billAmount}</td>
            <td>{data.totalAmount}</td>
            <td>{data.paidAmount}</td>
            <td>
              <Link to="/render">
              <DButton
                label={data.status ? 'result Enterted': "created"}
                className={
                  data.status == true
                    ? "membership-paid" 
                    : "membership-draft"
                }
              onClick ={async ()=>{
                // await axios.get(`http://localhost:3001/api/orders/testorder-result?patientName=${data.patientName}`,
                await axios.get(` http://localhost:3001/api/orders/testorder-result?orderCode=${data.orderCode}`,
               
                
             
                ).then((res)=>{
                  console.log(res.data.data, "res data")
                  updateSingleOrder(res.data.data,"res data")
                }).catch((err) =>{
                  console.log(err);
                })

              }}/>
              </Link>
            </td>
            {/* <td className="addResult">{<Link to="/addtestresult"><button 
            onClick={async ()=>{
             
            }}>Add Test Result</button></Link>}</td> */}
            <td className="patient-createOrder">{<Link to="/addtestresult"><Button   disabled={data.status  ? true : false} onClick={ async()=>{

             await axios.get(` http://localhost:3001/api/orders/testorder-result?orderCode=${data.orderCode}`,
             
           
              ).then((res)=>{
                  console.log(res.data.data, "res data")
                  updateSinglePatient(res.data.data)
              }).catch((err) => {
                console.log(err)
              })

            }} >Add Test Result</Button></Link>}</td>
            <td>



              <MdOutlineDelete onClick={async () => {
          await axios.put(

            `http://localhost:3001/api/orders/delete-order/${data.orderCode}`,{},

          );
           window.location.reload();
          navigate("/order")
         
        }
        } className="ordersDeleteIcon" />
            </td>

          </tr>
          </tbody>
        ))}
      </table>
    </div>
  
</div>

    

  );
};

export default OrderTable;
