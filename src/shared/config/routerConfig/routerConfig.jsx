import AboutPage from '../../../pages/AboutPage/AboutPage.async';
import MainPage from '../../../pages/MainPage/MainPage.async';
import { NotFoundPage } from '../../../pages/NotFoundPage';

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  NOT_FOUND: 'not_found',
};

export const RoutePath = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
