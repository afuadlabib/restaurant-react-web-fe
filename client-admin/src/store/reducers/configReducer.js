import { IS_LOADING, IS_LOGIN, ERROR } from '../actions/action.type';

// const baseUrl = 'http://localhost:3000/api';
const baseUrl = 'https://react-project.labcenter.site/api';

const initialState = {
  baseUrl: baseUrl,
  isLogin: false,
  isLoading: false,
  status: true,
  error: '',
};

export default function configReducer(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        status: action.payload.status,
      };
    case IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload.error,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
