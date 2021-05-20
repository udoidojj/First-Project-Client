import * as React from 'react';
import { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { NotificationContainer } from './components/common/react-notifications';
import { adminRoot } from './constants/defaultValues';

const ViewHome = React.lazy(() => import('./views/login'));
const ViewApp = React.lazy(() => import('./views/app'));
const ViewError = React.lazy(() => import('./views/error'));

const App = () => {
  return (
    <div className="h-100 rounded">
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

const mapStateToProps = () => {};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
