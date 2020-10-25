// import jsonPlaceholder from "../api/jsonPlaceholder";
import wpPosts from "../api/wpPosts";

import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log("Making API request");

  await dispatch(fetchPosts());

  console.log("Post Fetching Complete");

  _.chain(getState().posts)
    .map("author")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();

  console.log("completed API request");
};

export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const response = await wpPosts.get("/posts/?per_page=50");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

export const fetchUsers = () => async (dispatch) => {
  const response = await wpPosts.get("users");
  dispatch({
    type: "FETCH_USERS",
    payload: response.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await wpPosts.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

/**
 * Memoize the function to fetch API call just once
 * @type {(function(*, *): Promise<void>) & MemoizedFunction}
 * @private
 */
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });
//
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };
