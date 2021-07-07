import { combineReducers } from "redux";
import getAllPostsReducer from "./reducers.getAllPosts";

const AppReducers = combineReducers({
  posts: getAllPostsReducer,
});

export default AppReducers;
