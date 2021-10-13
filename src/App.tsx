import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth } from 'src/context/AuthContext';

import Loader from 'src/components/Core/Loader';
import CustomizedSnackbars from 'src/components/Core/CustomizedSnackbars';
import PrivateRoute from 'src/components/Route/PrivateRoute';
import PublicRoute from 'src/components/Route/PublicRoute';

// public routes
const Login = lazy(() => import('src/views/public/Login'));
const Page404 = lazy(() => import('src/views/public/Page404'));

// routes private
const Main = lazy(() => import('src/views/private/Main'));

export default function App() {
  const { isLogged } = useAuth();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <PrivateRoute
              isSignedIn={isLogged}
              exact
              path="/"
              component={Main}
            />
            <PublicRoute
              isSignedIn={isLogged}
              exact
              path="/identificate"
              component={Login}
            />
            <Route path="*" component={Page404} />
          </Switch>
        </Suspense>
      </Router>
      <CustomizedSnackbars />
    </>
  );
}
