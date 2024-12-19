const Header = () => {
  return (
    <div class="flex justify-between items-center h-[10%]">
      <input type="text" placeholder="Search your course"
        class="h-[60%] rounded-xl p-2 w-1/2" />
      <div className="flex justify-between">
        <div><img src="" alt="help" /></div>
        <div><img src="" alt="messages" /></div>
        <div><img src="" alt="settings" /></div>
        <div><img src="" alt="notifications" /></div>
        <div><img src="" alt="profile-picture" /></div>
        <div>Adeline H. Dancy</div>
      </div>
    </div>
  )
};

export default Header;
