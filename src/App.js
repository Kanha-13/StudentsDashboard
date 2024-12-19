import Header from './components/Header';
import SideBar from './components/Sidebar';
import StudentList from './components/StudentList';
import BaseLayout from './components/template/BaseLayout';
import Students from './containers/Students';

function App() {
  return (
    <BaseLayout>
      {/* wrapping different screens with base layout */}
      <Students />
    </BaseLayout>
  );
}

export default App;