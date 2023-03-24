import i18next from 'i18next';
import { displayPopup } from './commonData';
import { logoutUser } from './userSlice';
import { StoreLabs } from './constants';

export function isEmptyObject(obj) {
  let result;
  if (obj !== undefined) {
    result = !Object.keys(obj).length;
  }
  return result;
}

export const handleResponse = (err, isSuccess, directValue) => async (dispatch) => {
  let value = '';
  let type = '';
  let time = 2000;
  let blob = err;
  if (isSuccess) {
    value = err ? err : '';
    type = 'success';
  } else {
    blob = blob && blob.response ? blob.response : {}
    if (!isEmptyObject(blob) && blob.data && blob.data == "Authentication Invalid") {
      value = 'SESSIONEXPIRED';
      type = 'error';
      time = 5000;
      dispatch(logoutUser());
    } else {
      value = 'SOMEWENTWRNG'; // err ? err : '';
      type = 'warning';
    }
  }

  if (value == '') {
    value = 'FISHY';
    type = 'warning';
  }

  if (window.location.pathname == '/login' && !isSuccess) {
    type = 'warning';
  }
  if (!directValue) {
    value = i18next.t(`navigation:${value}`)
  }
  else {
    if (directValue) {
      type = 'info';
      time = 4000;
    }
  }
  dispatch(displayPopup(value, type, time));
};