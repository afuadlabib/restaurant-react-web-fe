import { combineReducers } from 'redux';
import configReducer from './configReducer';
import itemReducer from './itemReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  config: configReducer,
  items: itemReducer,
  categories: categoryReducer,
});

export default rootReducer;
