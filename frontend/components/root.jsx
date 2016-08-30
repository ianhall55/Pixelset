import React from 'react';
import AppRouter from './app_router.jsx';
import { Provider } from 'react-redux';


const Root = ({store}) => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

export default Root;
