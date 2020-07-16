import { ipcRenderer } from "electron";

const addVideos = (videos) => {
  return (dispatch) => {
    // ipcRenderer.send("videos:added", videos);
    // ipcRenderer.send("videos:metadata-complete", (event, values) => {
    //   dispatch({ type: "add_video", payload: values });
    // });

    dispatch({ type: "add_video", payload: {} });
  };
};

export { addVideos };
