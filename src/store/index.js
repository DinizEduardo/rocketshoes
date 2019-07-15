import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
// para adicionar outros reducers cria a pasta e importa dentro do rootReducer

const store = createStore(rootReducer);

export default store;
