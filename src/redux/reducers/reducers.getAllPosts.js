let initialState = {
  postsList: [],
  status: "PENDING",
};

export default function getAllPostsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ALL_POSTS_LIST":
      return {
        ...state,
        status: "PENDING",
      };
    case "GET_POSTS_LIST_SUCCESS":
      return {
        ...state,
        postsList: action.data,
        status: "SUCCESS",
      };
    default:
      return { ...state };
  }
}
