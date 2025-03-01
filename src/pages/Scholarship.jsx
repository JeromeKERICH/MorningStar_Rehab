import React from 'react'
import ScholarshipOverview from '../components/scholarship/Overview'
import ScholarshipCategories from '../components/scholarship/Categories'
import EligibilityCriteria from '../components/scholarship/Criteria'
import HowToApply from '../components/scholarship/Application'



const Scholarship = () => {
  return (
    <div>
       <ScholarshipOverview/>
       <ScholarshipCategories/>
       <EligibilityCriteria/>
       <HowToApply/>
    </div>
  )
}

export default Scholarship