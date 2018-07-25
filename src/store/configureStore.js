import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import productsReducer from '../reducers/products';
import filterReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      products: productsReducer,
      filters: filterReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
