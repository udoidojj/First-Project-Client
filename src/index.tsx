import './assets/css/vendor/bootstrap.min.css';
import './assets/css/vendor/bootstrap.rtl.only.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './serviceWorker';
import './assets/css/sass/themes/gogo.light.purplemonster.scss';
// @ts-ignore
import * as React from 'react';
// @ts-ignore
import { Suspense } from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
// @ts-ignore
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import reportWebVitals from './reportWebVitals';

const App = React.lazy(() => import('./App'));

const Main = () => {
  return (
    <Provider store={configureStore()}>
      <Suspense fallback={<div className="loading" />}>
        <App />
      </Suspense>
    </Provider>
  );
};

// @ts-ignore
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
