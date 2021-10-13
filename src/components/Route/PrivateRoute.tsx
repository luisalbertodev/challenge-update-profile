/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-curly-newline */
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
  isSignedIn: undefined | any;
  reedirectPath?: string;
}

export default function PrivateRoute({
  component: Component,
  isSignedIn,
  reedirectPath = '/identificate',
  ...rest
}: PrivateRouteProps) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const { from } = props.location.state || ({ from: { pathname: reedirectPath } } as any);
        return isSignedIn ? <Component {...props} /> : <Redirect to={from} />;
      }}
    />
  );
}
