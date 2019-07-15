import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
// para adicionar outros reducers cria a pasta e importa dentro do rootReducer

const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
