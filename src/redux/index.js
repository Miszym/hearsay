import { createStore } from 'redux';
import { vendorsReducer } from './vendorsReducer';

const store = createStore(vendorsReducer);
export default store;
