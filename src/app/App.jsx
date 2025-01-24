import { AppRouter } from 'providers/router/';
import './styles/index.scss';
import { Header } from 'widgets/Header/';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
