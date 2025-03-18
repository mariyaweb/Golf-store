import { Provider } from 'react-redux';
import { store } from 'shared/store';

function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
