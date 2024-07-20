import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// Constants
import { ROUTES } from 'constants/routes';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

// Layouts
import BaseLayout from 'layouts/BaseLayout';

// Contexts
import { ThemeProvider } from 'contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route
            key={ROUTES.HOME}
            path={ROUTES.HOME}
            element={
              <Suspense fallback={"Loading ...."}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            key={ROUTES.PRODUCTS}
            path={ROUTES.PRODUCTS}
            element={
              <Suspense fallback={"Loading ...."}>
                <ProductsPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
