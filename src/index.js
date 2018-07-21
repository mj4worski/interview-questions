import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import App from './App';
import rootReducer from './reducers';
import { saveState, loadState } from './localStorage';
import './index.css';

const persistedStore = loadState();

let store = createStore(
  rootReducer,
  persistedStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
