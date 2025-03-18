import { AppRouter } from 'providers/router/';
import { Footer } from 'widgets/Footer/';
import { Cart } from 'features/Cart/ui/Cart/Cart';
import { Header } from 'widgets/Header/';
import './styles/index.scss';

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
