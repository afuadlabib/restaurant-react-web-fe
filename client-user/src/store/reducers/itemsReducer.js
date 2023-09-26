import { FETCH_DATA_ITEMS, FETCH_DATA_ITEM } from '../actions/action.type';
const initialState = {
  items: null,
  item: null,
  onError: false,
  onLoad: false,
  onSuccess: false,
};

/**
 * 
 * const items = {
 * items,
 * item,
 * ...
 * }

 */

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_ITEMS:
      return {
        ...state,
        items: action.payload.data,
        onError: action.payload.onError,
        onLoad: action.payload.onLoad,
        onSuccess: action.payload.onSuccess,
      };
    case FETCH_DATA_ITEM:
      return {
        ...state,
        item: action.payload.data,
        onError: action.payload.onError,
        onLoad: action.payload.onLoad,
        onSuccess: action.payload.onSuccess,
      };
    default:
      return state
  }
}
