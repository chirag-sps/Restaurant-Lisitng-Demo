import {actionTypes} from '../Actions/homeActions';

export const Initial_State = {
  loader: false,
  restaurantList: [],
};

export const homeReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case actionTypes.RESTAURANT_LIST:
      return {
        ...state,
        loader: action.value,
        restaurantList: [...state.restaurantList, ...action.data],
      };
    default:
      return state;
  }
};
