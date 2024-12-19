import helpIcon from '../../assets/icons/help.png'
import messagesIcon from '../../assets/icons/messages.png'
import settingstopIcon from '../../assets/icons/settingstop.png'
import notificationIcon from '../../assets/icons/notification.png'
import searchIcon from '../../assets/icons/Search.png'
import userImage from '../../assets/images/user.png'
const Header = () => {
  return (
    <div className="flex justify-between items-center h-[10%] w-full">
      <div className='flex lg:hidden'>
        <div className='cursor-pointer text-4xl -mt-2'>&equiv;</div>
      </div>
      <div className='flex bg-white px-5 items-center h-[60%] rounded-xl p-2 w-2/3 sm:w-3/4 md:w-[58%]'>
        <img className='mr-2' src={searchIcon} alt="search" />
        <input type="text" placeholder="Search your course"
          className="focus:outline-none w-full font-notoSans placeholder:text-searchBarPlaceText" />
      </div>
      <div className="w-1/4 sm:w-1/4 md:w-1/2 items-center flex justify-evenly">
        <div className='hidden md:flex items-center pl-6 justify-evenly w-[80%] xl:w-[55%]'>
          <div className='cursor-pointer relative'>
            <img src={helpIcon} alt="help" />
          </div>
          <div className='cursor-pointer relative'>
            <img src={messagesIcon} alt="messages" />
            <span className="absolute -top-1.5 -right-2 block w-[11px] h-[11px] bg-red-500 rounded-full ring-2 ring-white"></span>
          </div>
          <div className='cursor-pointer relative'>
            <img src={settingstopIcon} alt="settings" />
          </div>
          <div className='cursor-pointer relative'>
            <span className="absolute -top-1.5 -right-1 block w-[11px] h-[11px] bg-red-500 rounded-full ring-2 ring-white"></span>
            <img src={notificationIcon} alt="notifications" />
          </div>
        </div>
        <div className='flex flex-grow items-center justify-end'>
          <div className='cursor-pointer sm:mr-6'><img src={userImage} alt="profile-picture" /></div>
          <div className='hidden xl:block font-semibold text-userName font-notoSans text-lg'>Adeline H. Dancy</div>
        </div>
      </div>
    </div>
  )
};

export default Header;
