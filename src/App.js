import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { NotificationContainer } from './components/common/react-notifications';
import { adminRoot } from './constants/defaultValues';

const ViewHome = React.lazy(() =>
  import(/* webpackChunkName: "views" */ './views/login')
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/app')
);

const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error')
);

class App extends React.Component {
  constructor(props) {
    super(props);
    document.body.classList.add('ltr');
  }

  render() {
    return (
      <div className="h-100">
        <IntlProvider>
          <>
            <NotificationContainer />
            <Suspense fallback={<div className="loading" />}>
              <Router>
                <Switch>
                  <Route
                    path={adminRoot}
                    render={(props) => <ViewApp {...props} />}
                  />
                  <Route
                    path="/error"
                    exact
                    render={(props) => <ViewError {...props} />}
                  />
                  <Route
                    path="/"
                    exact
                    render={(props) => <ViewHome {...props} />}
                  />
                  <Redirect to="/error" />
                  {/*
                  <Redirect exact from="/" to={adminRoot} />
                  */}
                  <Redirect to="/error" />
                </Switch>
              </Router>
            </Suspense>
          </>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = () => {};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
