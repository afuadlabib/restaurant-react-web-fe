import { FETCH_DATA_ITEMS, FETCH_DATA_ITEM } from '../actions/action.type';

const initialState = {
  items: [],
  item: null,
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_ITEMS:
      return {
        ...state,
        items: action.payload,
        
      };
    case FETCH_DATA_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
