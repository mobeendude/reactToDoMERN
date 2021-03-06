/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Todo/pages/TodoListPage');
  require('./modules/Auth/pages/SignUpPage');
   require('./modules/Auth/pages/LoginPage');
   require('./modules/App/components/WelcomePage');
}
// remove tap delay, essential for MaterialUI to work properly

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (

  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Todo/pages/TodoListPage').default);
        });
      }}
    />
    <Route
      path="/todo" component={App}
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Todo/pages/TodoListPage').default);
        });
      }}
    />
     <Route
      path="/login"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/pages/LoginPage').default);
        });
      }}
    />
     <Route
      path="/signup"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/pages/SignUpPage').default);
        });
      }}
    />
  <Route
      path="/wel"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/App/components/WelcomePage').default);
        });
      }}
    />

  </Route>



     
);
