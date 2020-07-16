import _ from "lodash";

const reducers = (state = {}, action) => {
  switch (action.type) {
    case "add_video":
      console.log(state);
      console.log(action.payload);
      console.log(_.mapKeys(action.payload, "path"));
      return { ...state, ..._.mapKeys(action.payload, "path") };

    default:
      return state;
  }
};

export default reducers;
