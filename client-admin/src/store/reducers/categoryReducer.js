import { EDIT_CATEGORY, FETCH_DATA_CATEGORIES } from '../actions/action.type';

const initialState = {
  categories: [],
  category: null,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case EDIT_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}
