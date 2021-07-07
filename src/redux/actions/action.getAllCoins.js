import { GET_ALL_POSTS } from "../contants";
import { getAllPosts } from "../services/services.getAllPosts";
export function getAllPostsList() {
  return (dispatch) => {
    dispatch(requestgetAllPostsList());
    let url = GET_ALL_POSTS;
    return getAllPosts(url)
      .then((response) => {
        dispatch(getAllPostsListSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getAllPostsListFailure(error.message));
      });
  };
}

function requestgetAllPostsList(data) {
  return {
    type: "REQUEST_ALL_POSTS_LIST",
    data,
  };
}

function getAllPostsListSuccess(data) {
  return {
    type: "GET_POSTS_LIST_SUCCESS",
    data,
  };
}

function getAllPostsListFailure(errorMessage) {
  return {
    type: "GET_POSTS_LIST_FAILURE",
    errorMessage,
  };
}
