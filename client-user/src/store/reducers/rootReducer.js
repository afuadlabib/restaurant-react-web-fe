import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import configReducer from './configReducer';

 const rootReducer = combineReducers({
  items: itemsReducer,
  config: configReducer,
});

export default rootReducer


/**
 * state = {
 * items: { 
 *      items: action.payload.data,
 *      item: action.payload.data
        onError: action.payload.onError,
        onLoad: action.payload.onLoad,
        onSuccess: action.payload.onSuccess, },
   config: {
        items: action.payload.data,
        onError: action.payload.onError,
        onLoad: action.payload.onLoad,
        onSuccess: action.payload.onSuccess, }
   }
 */