import { AppRouter } from 'providers/router/';
import './styles/index.scss';
import { Header } from 'widgets/Header/';
import { Footer } from 'widgets/Footer/';
import { Cart } from 'features/Cart/ui/Cart/Cart';

function App() {
  return (
    <>
      <Cart />
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
