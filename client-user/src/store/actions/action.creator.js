import { actionConfigItem, actionConfigItems } from '../actions/action.config'

export function fetchDataItem() {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    try {
      const response = await fetch(`${baseUrl}/items`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json()
      if(response.ok){
        dispatch(actionConfigItems({
            data,
            onSuccess: true,
            onError: false,
        }))
      } else {
        throw {...data}
      }
    } catch (error) {
        console.log(error.message);
        dispatch(actionConfigItems({
            data,
            onSuccess: true,
            onError: true,
        }))
    }
  };
}

export function detailItems(id){
  return async (dispatch, getState) =>{
    const state = getState();
    let { baseUrl } = state.config;
    try {
      const response = await fetch(`${baseUrl}/items/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json()
      if(response.ok){
        dispatch(actionConfigItem({
            data,
            onSuccess: true,
            onError: false,
        }))
      } else {
        throw {...data}
      }
    } catch (error) {
        console.log(error.message);
        dispatch(actionConfigItems({
            data,
            onSuccess: true,
            onError: true,
        }))
    }
  }
}