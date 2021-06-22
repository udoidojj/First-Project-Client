import * as React from 'react';
import { Suspense } from 'react';
// @ts-ignore
import { connect } from 'react-redux';
// @ts-ignore
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { NotificationContainer } from './components/common/react-notifications';
import { adminRoot } from './constants/defaultValues';

const ViewHome = React.lazy(() => import('./views/Login'));
const ViewApp = React.lazy(() => import('./views/app'));
const ViewError = React.lazy(() => import('./views/error'));

const App = () => {
  return (
    <div className="h-100">
      <NotificationContainer />
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <Route
              path={adminRoot}
              render={(props: any) => <ViewApp {...props} />}
            />
            <Route
              path="/error"
              exact
              render={(props: any) => <ViewError {...props} />}
            />
            <Route
              path="/"
              exact
              render={(props: any) => <ViewHome {...props} />}
            />
            <Redirect to="/error" />
            {/*
              <Redirect exact from="/" to={adminRoot} />
              */}
            <Redirect to="/error" />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
