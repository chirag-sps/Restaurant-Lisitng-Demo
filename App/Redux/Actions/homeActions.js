import {insertNewRestaurant} from '../../Database/allSchema';
import {ApiConfig} from '../../Service/api';
import {baseUrl, restaurantListing} from '../../Service/apiConfig';

export const actionTypes = {
  RESTAURANT_LIST: 'RESTAURANT_LIST',
};

export const getRestaurantList = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.RESTAURANT_LIST,
      value: true,
      data: [],
    });

    new ApiConfig()
      .getJSON(baseUrl + restaurantListing)
      .then(response => {
        insertDataIntoDb(response);
        dispatch({
          type: actionTypes.RESTAURANT_LIST,
          value: false,
          data: response?.data?.data,
        });
      })
      .catch(ERROR => {
        dispatch({
          type: actionTypes.RESTAURANT_LIST,
          value: false,
          data: [],
        });
      });
  };
};

const insertDataIntoDb = response => {
  if (response?.data?.data && response?.data?.data.length > 0) {
    response?.data?.data.forEach(function (restaurant) {
      let data = {
        id: restaurant?.id,
        title: restaurant?.title,
        address: restaurant?.address,
        latitude: restaurant?.latitude,
        longitude: restaurant?.longitude,
        rating: restaurant?.rating,
        total_review: restaurant?.total_review,
        description: restaurant?.description,
        mobile: restaurant?.mobile,
        images: restaurant?.images,
        //page : 1
      };
      insertNewRestaurant(data)
        .then(res => {})
        .catch(error => {
          console.log('insert error===', error);
        });
    });
  }
};

export const fetchDbRestaurants = list => {
  return async dispatch => {
    dispatch({
      type: actionTypes.RESTAURANT_LIST,
      value: false,
      data: list,
    });
  };
};
