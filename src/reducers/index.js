import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  // These will be the keys for the state object
  posts: postsReducer,
  users: usersReducer,
});
