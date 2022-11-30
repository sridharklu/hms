import React,{useEffect,useContext}from "react";
import { MdOutlineAddBox, MdSell } from "react-icons/md";
import Layout from "../../common/layout/Layout";
import OrderTable from "../../common/table/orderTable/OrderTable";
import UpdateStatus from "../../common/update/UpdateStatus";
import "../../assets/css/index.css"
import { Link } from "react-router-dom";
import axios from "axios"
import { GlobalVariable } from "../../common/baseUrl/baseUrl";
import { OrderContext } from "../context/orderContext/OrderContext";

const Order = () => {


   const {Doctors,updateDoctors,updateOrders} = useContext(OrderContext)


  useEffect(() => {
    axios.get(`${GlobalVariable.MIDDLEWARE_API_URL}/orders`,{withCredentials: true}
      // { headers: { "token": localStorage.getItem("token") } }
      )
      .then((res) => {
         //console.log(res.data.data)
          updateOrders(res.data.data)
        ///console.log(res.data.data, "res data")
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  
  return (
    <Layout>
      <div className="ordersContainer">
        <div className="headerContainer">
          <div className="ordersTagIcons">
            <MdSell />
            <h4>Orders</h4>
          </div>

          <div className="filterDate">
            <input placeholder={"Enter Order No:"} />
            <input placeholder={"Patient Code / Name:"} />
            <input placeholder={"From Date:"} />
            <input placeholder={"To Date:"} />
            <div className="goButton">
              <button>Go!</button>
              <button className="addButton">
                <MdOutlineAddBox />
              </button>
            </div>
          </div>
          <div className="newOrders">
          {/* <Link to="/createorder">
          <button className="newOrdersLable">
            <MdOutlineAddBox />
            New Orders
          </button>
          </Link> */}
            
          </div>

        </div>
        {/* <UpdateStatus /> */}
        <OrderTable />
      </div>
    </Layout>
  );
};

export default Order;
