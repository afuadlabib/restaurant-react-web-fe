import {
  FETCH_DATA_ITEM,
  EDIT_CATEGORY,
  ERROR,
  FETCH_DATA_CATEGORIES,
  FETCH_DATA_ITEMS,
  IS_LOADING,
  IS_LOGIN,
} from './action.type';

export function actionConfigIsLogin(payload) {
  return {
    type: IS_LOGIN,
    payload,
  };
}

export function actionConfigError(payload) {
  return {
    type: ERROR,
    payload,
  };
}

export function actionConfigIsLoading(payload) {
  return {
    type: IS_LOADING,
    payload,
  };
}

export function actionItems(payload) {
  return {
    type: FETCH_DATA_ITEMS,
    payload,
  };
}
export function actionCategories(payload) {
  return {
    type: FETCH_DATA_CATEGORIES,
    payload,
  };
}
export function actionDetailCategory(payload) {
  return {
    type: EDIT_CATEGORY,
    payload,
  };
}
export function actionDetailItem(payload) {
  return {
    type: FETCH_DATA_ITEM,
    payload,
  };
}
