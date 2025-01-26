import { AppRouter } from 'providers/router/';
import './styles/index.scss';
import { Header } from 'widgets/Header/';
import { Footer } from 'widgets/Footer/';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
