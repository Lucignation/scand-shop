import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.component';
import { Provider } from 'react-redux';
import { store } from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
