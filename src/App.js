import Header from './components/Header';
import SideBar from './components/Sidebar';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="flex bg-gray-100">
      <SideBar />
      <div className="flex flex-col w-[80%] h-screen pl-6">
        <Header />
        <StudentList />
      </div>
    </div>
  );
}

export default App;