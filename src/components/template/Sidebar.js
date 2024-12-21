import logo from '../../assets/icons/logo.png'
import { NavList } from '../../const/sidebar';
import SiderBarCards from './SiderBarCards';
const SideBar = ({ visible, onclose }) => {
  const getMobileDesign = () => {
    return "z-10 absolute w-3/4 sm:w-1/3 md:w-1/4 lg:w-[17%] shadow-lg"
  }

  const handleSideBar = () => {
    onclose();
  }
  return (
    <div className={`w-[17%] h-screen bg-white shadow-sm ${visible ? getMobileDesign() : "hidden"} lg:block`}>
      <div className="p-4 mt-5">
        <img src={logo} alt="Logo" />
      </div>
      {visible?<div onClick={handleSideBar} className='cursor-pointer absolute right-7 top-7 font-semibold text-2xl'>x</div>:<></>}
      <nav className="w-full mt-4">
        <div className='w-full'>
          {NavList.map((nav, index) => <SiderBarCards onclick={handleSideBar} key={index + 'navlist'} {...nav} />)}
        </div>
      </nav>
    </div>
  )
}

export default SideBar;