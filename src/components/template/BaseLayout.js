import React from 'react'
import SideBar from './Sidebar';
import Header from './Header';

const BaseLayout = ({children}) => {
  return (
    <div className="flex bg-gray-50">
      <SideBar />
      <div className="flex flex-col w-full lg:w-[83%] h-screen px-5">
        <Header />
        {children}
      </div>
    </div>
  )
}
export default BaseLayout;
