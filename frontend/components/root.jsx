import React from 'react';
import AppRouterContainer from './app_router/app_router_container.jsx';
import { Provider } from 'react-redux';


const Root = ({store}) => (
  <Provider store={store}>
    <AppRouterContainer/>
  </Provider>
);

export default Root;
