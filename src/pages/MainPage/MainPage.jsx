import { Categories } from './ui/Categories';
import { Collection } from './ui/Collection';
import { MainScreen } from './ui/MainScreen';
import { Subscribe } from './ui/Subscribe';
import { Timer } from './ui/Timer';
import { Instagram } from './ui/Instagram';

function MainPage() {
  return (
    <>
      <MainScreen />
      <Categories />
      <Timer />
      <Collection />
      <Subscribe />
      <Instagram />
    </>
  );
}

export default MainPage;
