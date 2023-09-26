import {
  actionConfigIsLogin,
  actionConfigIsLoading,
  actionItems,
  actionCategories,
  actionConfigError,
  actionDetailCategory,
  actionDetailItem,
} from './action.config';
import Swal from 'sweetalert2';

export function userLoginAdmin(inputForm) {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(`${baseUrl}/users/login-admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputForm),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.access_token = data?.access_token;
        dispatch(actionConfigIsLoading({ isLoading: false, status: true }));
        dispatch(actionConfigIsLogin({ isLogin: true }));
        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: `Welcome`,
            text: '',
            toast: true,
            position: 'top-end',
            grow: 'row',
            timer: 2000,
            showConfirmButton: false,
          });
        }, 1000);
        dispatch(actionConfigError({ error: '', status: true }));
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
      dispatch(actionConfigError({ error: error.message, status: false }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}

export function userRegisterAdmin(inputForm, navigate) {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(`${baseUrl}/users/register-admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        body: JSON.stringify(inputForm),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(actionConfigIsLoading({ isLoading: false, status: true }));
        dispatch(actionConfigError({ error: '', status: true }));
        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: `register new admin`,
            text: `${data.username}`,
            toast: true,
            position: 'top-end',
            grow: 'row',
            timer: 2000,
            showConfirmButton: false,
          });
        }, 1000);
        navigate({status: true})
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
      dispatch(actionConfigError({ error: error.message, status: false }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}

export function getDataItems(filter) {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(`${baseUrl}/items`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(actionConfigError({ error: '', status: true }));
        dispatch(actionItems(data));
        dispatch(actionConfigIsLoading({ isLoading: false, status: true }));
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
      dispatch(actionConfigError({ error: error.message, status: false }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}

export function getDataCategories() {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(`${baseUrl}/categories`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(actionCategories(data));
        dispatch(actionConfigIsLoading({ isLoading: false, status: true }));
        dispatch(actionConfigError({ error: '', status: true }));
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
      dispatch(actionConfigError({ error: error.message, status: false }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}

export function deleteItem(id) {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(`${baseUrl}/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(getDataItems());
        dispatch(actionConfigIsLoading({ isLoading: false, status: true }));
        dispatch(actionConfigError({ error: '', status: true }));
        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: `${data.message}`,
            text: '',
            toast: true,
            position: 'top-end',
            grow: 'row',
            timer: 2000,
            showConfirmButton: false,
          });
        }, 1000);
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
      dispatch(actionConfigError({ error: error.message, status: false }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}
export function deleteCategory(id) {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(`${baseUrl}/categories/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(getDataCategories());
        dispatch(actionConfigIsLoading({ isLoading: false, status: true }));
        dispatch(actionConfigError({ error: '', status: true }));
        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: `${data.message}`,
            text: '',
            toast: true,
            position: 'top-end',
            grow: 'row',
            timer: 2000,
            showConfirmButton: false,
          });
        }, 1000);
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
      dispatch(actionConfigError({ error: error.message, status: false }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}

export function addCategory(categoryInput, routeNavigate) {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(`${baseUrl}/categories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        body: JSON.stringify(categoryInput),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(getDataCategories());
        dispatch(actionConfigIsLoading({ isLoading: false, status: true }));
        dispatch(actionConfigError({ error: '', status: true }));
        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: `success add category`,
            text: `${data.name}`,
            toast: true,
            position: 'top-end',
            grow: 'row',
            timer: 2000,
            showConfirmButton: false,
          });
        }, 1000);
        routeNavigate({ status: true });
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
      dispatch(actionConfigError({ error: error.message, status: false }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}

export function detailCategory(id) {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(`${baseUrl}/categories/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(actionDetailCategory(data));
        dispatch(actionConfigIsLoading({ isLoading: false, status: true }));
        dispatch(actionConfigError({ error: '', status: true }));
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
      dispatch(actionConfigError({ error: error.message, status: true }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}

export function editCategory(categoryInput, navigateRoute) {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(
        `${baseUrl}/categories/${categoryInput.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.access_token}`,
          },
          body: JSON.stringify(categoryInput),
        }
      );
      const data = await response.json();
      if (response.ok) {
        dispatch(getDataCategories());
        dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
        dispatch(actionConfigError({ error: '', status: true }));
        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: `${data.message}`,
            text: `${data.data.name}`,
            toast: true,
            position: 'top-end',
            grow: 'row',
            timer: 2000,
            showConfirmButton: false,
          });
        }, 1000);
        navigateRoute({ status: true });
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false }));
      dispatch(actionConfigError({ error: error.message, status: false }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}

export function addItem(itemInput,ingredient, navigateRoute) {
  let newIngredient = []
  for(let el in ingredient){
    if(el !== "length"){
      let temp = {name: ingredient[el]}
      newIngredient.push(temp)
    }
  }
  itemInput = {
    ...itemInput,
    price: parseInt(itemInput.price),
    ingredients: newIngredient
  };
  !itemInput.price? itemInput.price = 0 : itemInput.price
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(`${baseUrl}/items-ingredients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        body: JSON.stringify(itemInput),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(getDataItems());
        dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
        dispatch(actionConfigError({ error: '', status: true }));
        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: `success add new item `,
            text: `${data.name}`,
            toast: true,
            position: 'top-end',
            grow: 'row',
            timer: 2000,
            showConfirmButton: false,
          });
        }, 1000);
        navigateRoute({ status: true });
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false }));
      dispatch(actionConfigError({ error: error.message, status: false }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}

export function itemDetail(id) {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(`${baseUrl}/items/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(actionDetailItem(data));
        dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
        dispatch(actionConfigError({ error: '', status: true }));
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false }));
      dispatch(actionConfigError({ error: error.message, status: false }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}

export function editItem(itemInput, navigateRoute) {
  return async (dispatch, getState) => {
    const state = getState();
    let { baseUrl } = state.config;
    dispatch(actionConfigIsLoading({ isLoading: true, status: true }));
    try {
      const response = await fetch(`${baseUrl}/items/${itemInput.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.access_token}`,
        },
        body: JSON.stringify(itemInput),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(getDataCategories());
        dispatch(actionConfigIsLoading({ isLoading: false, status: false }));
        dispatch(actionConfigError({ error: '', status: true }));
        setTimeout(() => {
          Swal.fire({
            icon: 'success',
            title: `${data.message}`,
            text: `${data.data.name}`,
            toast: true,
            position: 'top-end',
            grow: 'row',
            timer: 2000,
            showConfirmButton: false,
          });
        }, 1000);
        if (typeof navigateRoute === 'function') {
          navigateRoute({ status: true });
        }
      } else {
        throw { ...data };
      }
    } catch (error) {
      dispatch(actionConfigIsLoading({ isLoading: false }));
      dispatch(actionConfigError({ error: error.message, status: false }));
      setTimeout(() => {
        Swal.fire({
          icon: 'error',
          title: `Upss ... `,
          text: `${error.message}`,
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false,
        });
      }, 1000);
    }
  };
}
