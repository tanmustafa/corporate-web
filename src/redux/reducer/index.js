import { combineReducers } from "redux";
import token from "./tokenReducer";
import department from "./departmentReducer";
import product from "./productReducer";
import filter from "./filterReducer";

export default combineReducers({
  token,
  department,
  product,
  filter,
});
