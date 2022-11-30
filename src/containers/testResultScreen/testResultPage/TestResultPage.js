import React from 'react'
import { MdOutlineArrowForward, MdOutlineMenuBook, MdPrint } from 'react-icons/md'
import Button from '../../../common/button/Button'
import OrderBillingForm from '../../../common/forms/OrderBillingForm'
import TestResultForm from '../../../common/forms/TestResultForm'
import Layout from '../../../common/layout/Layout'

const TestResultPage = () => {
  return (
    <Layout>
    <div className="create-patient">
      <div className="create-topheader">
        <div className="create-navigate">
        <p className="navigateLable">Test Result</p>
          <MdOutlineArrowForward />
          <p>Edit</p>
        </div>
        <div className="create-btn">
        <Button className="cancel-btn" onClick={() => {
            window.location = "http://localhost:3000/test";
            }} label="Cancel"  />
          <Button className="save-btn" label="Save invoice"  icon={<MdPrint size={13}/>}/>
        <Button className="cancel-btn" label="Cancel"  />
          <Button className="save-btn" label="Save invoice"  icon={<MdOutlineMenuBook size={16}/>}/>
        </div>
      </div>
      <TestResultForm />
    </div>
  </Layout>
  )
}

export default TestResultPage