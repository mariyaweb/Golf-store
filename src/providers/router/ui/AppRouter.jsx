import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';

function AppRouter() {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <main className="page-wrapper">
                {element}
              </main>
            </Suspense>
          )}
        />
      ))}
    </Routes>

  );
}

export default AppRouter;
