import Counter from 'components/Counter';
import { AppRouter } from 'providers/router/';
import { Navbar } from 'widgets/Navbar';
import HomeIcon from 'widgets/assets/icons/main-20-20.svg';
import UserImg from 'widgets/assets/icons/user-32-32.png';
import './styles/index.css';

function App() {
  return (
    <div>
      <Navbar />
      <HomeIcon />
      <div className="user"><img src={UserImg} alt="" /></div>
      <AppRouter />
      <Counter />
    </div>
  );
}

export default App;
