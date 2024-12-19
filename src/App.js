import BaseLayout from './components/template/BaseLayout';

// {containers / screens}
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