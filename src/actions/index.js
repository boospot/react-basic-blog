import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log("About to Fetch Posts");
  const startTime = Date.now();

  await dispatch(fetchPosts());

  console.log("Fetch Posts Complete");
  console.log(`Fetching Posts took milli seconds: ${Date.now() - startTime}`);

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value(); // Its required for processing the _.chain method

  // put await in front of _.chain to see how much time the chaining took
  // console.log(`Lodash Chaining took milli seconds: ${Date.now() - startTime}`);
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

export const fetchUsers = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("users");
  dispatch({
    type: "FETCH_USERS",
    payload: response.users,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
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
