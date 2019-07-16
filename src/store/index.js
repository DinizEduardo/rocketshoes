import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
// para adicionar outros reducers cria a pasta e importa dentro do rootReducer

const SagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(SagaMiddleware)
      )
    : applyMiddleware(SagaMiddleware);

const store = createStore(rootReducer, enhancer);

SagaMiddleware.run(rootSaga);

export default store;
