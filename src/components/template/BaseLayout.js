import React, { useState } from 'react'
import SideBar from './Sidebar';
import Header from './Header';

const BaseLayout = ({ children }) => {
  const [isNavOpen, setNav] = useState(false)
  const handleNavbar = () => {
    setNav(state => !state)
  }
  return (
    <div className="flex bg-gray-50">
      <SideBar onclose={()=>setNav(false)} visible={isNavOpen} />
      <div className="flex flex-col w-full lg:w-[83%] h-screen px-5">
        <Header onOpen={handleNavbar} />
        {children}
      </div>
    </div>
  )
}
export default BaseLayout;
