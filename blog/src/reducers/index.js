import { combineReducers } from "redux";
import postReducer from "../../../blog/src/reducers/postsReducer";

export default combineReducers({
  posts: postReducer
});
