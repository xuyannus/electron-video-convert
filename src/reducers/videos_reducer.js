import _ from "lodash";

const reducers = (state = {}, action) => {
  switch (action.type) {
    case "add_video":
      return { ...state, [action.payload.path]: action.payload };
    case "add_videos":
      return { ...state, ..._.mapKeys(action.payload, "path") };
    case "remove_video":
      return _.omit(state, action.payload.path);
    case "video_complete":
      return {
        ...state,
        [action.payload.path]: { ...action.payload, complete: true },
      };
    case "video_progress":
      return { ...state, [action.payload.path]: action.payload };
    case "remove_all_videos":
      return {};
    default:
      return state;
  }
};

export default reducers;
