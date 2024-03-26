import ds from 'app/services/DataService';
import { setInitialSettings } from 'app/store/fuse/settingsSlice';
import history from '@history';
import { evenOrOdd, handleResponse, isEmptyObject } from './commonMethods';
import { ReqColorCodes } from './constants';
import { setDashboardLoader, setLoadersInitial } from './loadersSlice';
import { displayPopup, setDashData } from './commonData';
//react icon removed due to depriction of some icon and relevant packages
export const logoutServiceProvider = () => async (dispatch) => {
  return ds
    .logoutService()
    .then((res) => {
      dispatch(setLoadersInitial());
      dispatch(setInitialSettings());
      history.push({
        pathname: '/login',
      });
      console.log('LOGOUT_DONE');
      window.location.reload();
    })
    .catch((e) => {
      window.location.reload();
      dispatch(setLoadersInitial());
      dispatch(setInitialSettings());
      history.push({
        pathname: '/login',
      });
    });
};

export const dashboardDataService = () => async (dispatch) => {
  return ds
    .getDataService()
    .then((res) => {
      dispatch(setDashboardLoader(false));
      if (res && res.data && res.data.length > 0) {
        let valueABove = false;
        let senseValue = '';
        res.data.map(ss => {
          if (ss && ss.sensorName && ss.sensorName == 'Gas Sensor') {
            if (ss.sensorValue && parseInt(ss.sensorValue) > 1600) {
              valueABove = true;
              senseValue = ss.sensorValue;
            }
          }
        });
        if (valueABove) {
          dispatch(displayPopup(`Gas leakage value ${senseValue}, kindly check`, 'error', 3000));
        }
        dispatch(setDashData(res.data));
      } else {
        dispatch(setDashData([]));
      }
    })
    .catch(e => {
      dispatch(setDashboardLoader(false));
      dispatch(handleResponse(e, false));
    });
};
