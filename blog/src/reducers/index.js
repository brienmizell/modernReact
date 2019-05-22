import { combineReducers } from "redux";
import postReducer from "../../../blog/src/reducers/postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postReducer,
  users: usersReducer
});
