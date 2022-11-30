import React from 'react'
import RecentPatientTable from '../../../common/table/recentPatientTable/RecentPatientTable'

const RecentPatients = () => {

  
  return (
    <div className='dashboard'>
      <div className='recent-patient'>
    <p>RecentPatients</p>
    <hr/>
    </div>
    <RecentPatientTable/>
    </div>
  )
}

export default RecentPatients