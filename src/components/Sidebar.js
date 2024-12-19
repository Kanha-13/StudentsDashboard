const SideBar = () => {
  return (
    <div class="w-[20%] h-screen bg-white shadow-md">
      <div class="p-4">
        <h1 class="text-xl font-bold text-gray-800">Quyl.</h1>
      </div>
      <nav class="mt-4">
        <ul>
          <li class="p-4 text-gray-600 hover:bg-gray-200"><i
            class="fas fa-tachometer-alt"></i> Dashboard</li>
          <li class="p-4 text-gray-600 bg-gray-200"><i
            class="fas fa-user-graduate"></i> Students</li>
          <li class="p-4 text-gray-600 hover:bg-gray-200"><i
            class="fas fa-book"></i> Chapter</li>
          <li class="p-4 text-gray-600 hover:bg-gray-200"><i
            class="fas fa-question-circle"></i> Help</li>
          <li class="p-4 text-gray-600 hover:bg-gray-200"><i
            class="fas fa-file-alt"></i> Reports</li>
          <li class="p-4 text-gray-600 hover:bg-gray-200"><i
            class="fas fa-cog"></i> Settings</li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar;