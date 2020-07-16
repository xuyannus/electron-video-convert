import { combineReducers } from "redux";
import videosReducer from "./videos_reducer";

const reducers = combineReducers({
  videos: videosReducer,
});

export default reducers;
