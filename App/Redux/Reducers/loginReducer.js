import { actionTypes } from "../Actions/loginAction"

export const Initail_State = {
  isLoading: true,
  userEmail: null,
  loader: false,
  showSplash: true,
};

export const loginReducer = (state = Initail_State, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        showSplash: action.value,
        userEmail: action.data,
      };
      case actionTypes.SHOW_SPLASH:
      return {
        ...state,
        showSplash: action.value,
      };
    default:
      return state;
  }
};
