import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BaseLayout from './components/template/BaseLayout';

// {containers / screens}
import ROUTES from './const/routes';
import Students from './containers/Students';
import Dashboard from './containers/Dashboard';
import Chapters from './containers/Chapters';
import Help from './containers/Help';
import Report from './containers/Report';
import Settings from './containers/Settings';
import NotFound from './containers/NotFound';

function App() {
  return (
    <Router>
      <BaseLayout>
        {/* wrapping different screens with base layout */}
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Dashboard />} />
          <Route exact path={ROUTES.STUDENTS} element={<Students />} />
          <Route exact path={ROUTES.CHAPTERS} element={<Chapters />} />
          <Route exact path={ROUTES.HELP} element={<Help />} />
          <Route exact path={ROUTES.REPORT} element={<Report />} />
          <Route exact path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;