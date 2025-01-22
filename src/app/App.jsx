import { AppRouter } from 'providers/router/';
import { Navbar } from 'widgets/Navbar';
import './styles/index.css';

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
