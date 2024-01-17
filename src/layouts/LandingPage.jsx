import React from 'react'
import Sidebar from '../components/Sidebar'
import MainPageLand from '../components/MainPageLand'

const LandingPage = () => {
  return (
   <div className='flex flex-wrap justify-betwee p-[5rem] '>
    <div className='basis-3/12'>
    <Sidebar/>
    </div>
    <div className='basis-3/4'>
     <MainPageLand/>
   </div>
    </div>
  )
}

export default LandingPage