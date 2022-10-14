import NavigationService from '../../Navigation/NavigationService';
import * as storage from '../../Service/AsyncStoreConfig';

export const actionTypes = {
  LOGIN: 'SESSION_LIST',
  LOADER: 'LOADER',
  SHOW_SPLASH: 'SHOW_SPLASH',
};

export const setLoader = isLoader => {
  return {
    type: actionTypes.LOADER,
    value: isLoader,
  };
};

export const setSplash = show => {
  return {
    type: actionTypes.SHOW_SPLASH,
    value: show,
  };
};

export const setLogin = email => {
  return async dispatch => {
    await storage.setItem('userEmail', email).then(res => {
      dispatch({
        type: actionTypes.LOGIN,
        data: email,
        value: false,
      });
      NavigationService.navigate('HomeScreen');
    });
  };
};
