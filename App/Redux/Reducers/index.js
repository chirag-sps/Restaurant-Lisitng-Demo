const {combineReducers} = require('redux');
import {loginReducer} from './loginReducer';
import {homeReducer} from './homeReducer'

export default combineReducers({
  loginReducer,
  homeReducer
});
