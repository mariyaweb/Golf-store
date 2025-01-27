import { Categories } from './ui/Categories';
import { Collection } from './ui/Collection';
import { MainScreen } from './ui/MainScreen';
import { Timer } from './ui/Timer';

function MainPage() {
  return (
    <>
      <MainScreen />
      <Categories />
      <Timer />
      <Collection />
    </>
  );
}

export default MainPage;
