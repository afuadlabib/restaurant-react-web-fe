import {FETCH_DATA_ITEMS, FETCH_DATA_ITEM} from './action.type'
export function actionConfigItems(payload) {
    return {
      type: FETCH_DATA_ITEMS,
      payload
    };
  }
export function actionConfigItem(payload) {
    return {
      type: FETCH_DATA_ITEM,
      payload
    };
  }