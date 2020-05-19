import { createStore } from 'redux';
import { sourcesReducer } from './sourcesReducer';

const store = createStore(sourcesReducer);
export default store;
