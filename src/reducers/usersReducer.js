export default (state = [], action) => {
  // Here, the 'state' will be array of users
  switch (action.type) {
    case "FETCH_USER":
      // action.payload is a single user
      return [...state, action.payload];

    default:
      return state;
  }
};
