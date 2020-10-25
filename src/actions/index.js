import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

export const fetchUsers = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("users");
  dispatch({
    type: "FETCH_USERS",
    payload: response.users,
  });
};

// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// };
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
});

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};
