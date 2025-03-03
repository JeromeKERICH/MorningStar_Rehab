import React from 'react'
import RehabilitationOverview from '../components/rehab/RehabOverview'
import InpatientRehab from '../components/rehab/Inpatient'
import OutpatientRehab from '../components/rehab/Outpatient'

const Rehabilitation = () => {
  return (
    <div>
        <RehabilitationOverview/>
        <InpatientRehab/>
        <OutpatientRehab/>
    </div>
  )
}

export default Rehabilitation