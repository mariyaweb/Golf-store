import { useLocation, Link, useParams } from 'react-router-dom';

export const useBreadcrumbs = () => {
  const location = useLocation();
  const params = useParams(); // for dynamic routes
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs = [{ name: 'Home', path: '/' }];

  pathnames.forEach((name, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    breadcrumbs.push({ name: formattedName, path: to });
  });

  return breadcrumbs;
};
