import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import combinedReducers from './reducer';
import initialState from './initial-state';

const logger = createLogger();

const currentStore = null;

const setStore = () => {
    if(currentStore !== null) {
        return currentStore;
    }
        
    return createStore(combinedReducers, initialState, applyMiddleware(logger, ReduxThunk));
}

export default setStore();
