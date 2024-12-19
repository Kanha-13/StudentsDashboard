import logo from '../assets/icons/logo.png'
import dashboardIcon from '../assets/icons/dashboard.png'
import { NavList } from '../const/sidebar';
import SiderBarCards from './SiderBarCards';
const SideBar = () => {
  return (
    <div className="w-[17%] h-screen bg-white shadow-sm hidden lg:block">
      <div className="p-4 mt-5">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="w-full mt-4">
        <div className='w-full'>
          {NavList.map((nav,index)=><SiderBarCards key={index+'navlist'} {...nav} />)}
        </div>
      </nav>
    </div>
  )
}

export default SideBar;