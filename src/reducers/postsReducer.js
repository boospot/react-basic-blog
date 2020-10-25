export default (state = [], action) => {
  // Here, the 'state' will be array opf posts
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
};
