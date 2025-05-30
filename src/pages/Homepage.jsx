import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Chatcontainer from '../components/Chatcontainer'
import Rightsidebar from '../components/Rightsidebar'

const Homepage = () => {

  const [selecteduser,setselecteduser]=useState(false);

  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
        <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overfloww-hidden h-[100%] grid grid-cols-1 relative ${selecteduser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]': 'md:grid-cols-2'}`}>
          <Sidebar selecteduser={selecteduser} setselecteduser={setselecteduser}/>
          <Chatcontainer selecteduser={selecteduser} setselecteduser={setselecteduser}/>
          <Rightsidebar selecteduser={selecteduser} setselecteduser={setselecteduser}/>
        </div>
    </div>
  )
}

export default Homepage