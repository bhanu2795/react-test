import { persistStore } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from "../reducers/rootReducer";

const enhancer = compose(
  applyMiddleware(thunk),
  devToolsEnhancer({ realtime: true }),
);

const configureStore = () => {
  const store = createStore(
    rootReducer,
    undefined,
    enhancer,
  );

  const persistor = persistStore(store);
  // persistor.purge ();
  return { persistor, store };
};

export const { persistor, store } = configureStore();
