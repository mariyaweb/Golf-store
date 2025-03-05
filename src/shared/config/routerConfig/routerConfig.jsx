import AboutPage from '../../../pages/AboutPage/AboutPage.async';
import ShopPage from '../../../pages/ShopPage/CatalogPage.async';
import MainPage from '../../../pages/MainPage/MainPage.async';
import { NotFoundPage } from '../../../pages/NotFoundPage';

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  SHOP: 'shop',
  SHOP_CATEGORY: 'shop_category',
  NOT_FOUND: 'not_found',
};

const routes = [
  { key: AppRoutes.MAIN, path: '/', component: <MainPage /> },
  { key: AppRoutes.ABOUT, path: '/about', component: <AboutPage /> },
  { key: AppRoutes.SHOP, path: '/shop', component: <ShopPage /> },
  // { key: AppRoutes.SHOP_CATEGORY, path: '/shop/:category', component: <CategoryPage /> },
  { key: AppRoutes.NOT_FOUND, path: '*', component: <NotFoundPage /> },
];

export const routeConfig = Object.fromEntries(
  routes.map(({ key, path, component }) => [key, { path, element: component }]),
);
