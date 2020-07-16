import { ipcRenderer } from "electron";

const addVideos = (videos) => {
  return (dispatch) => {
    ipcRenderer.send("videos:added", videos);
    ipcRenderer.on("videos:metadata-complete", (event, values) => {
      dispatch({ type: "add_videos", payload: values });
    });
  };
};

const setFormat = (video, format) => {
  return {
    type: "add_video",
    payload: { ...video, format, err: "" },
  };
};

const removeVideo = (video) => {
  return {
    type: "remove_video",
    payload: video,
  };
};

const showInFolder = (outputPath) => () => {
  ipcRenderer.send("folder:open", outputPath);
};

const convertVideos = (videos) => {
  return (dispatch) => {
    ipcRenderer.send("conversion:start", videos);

    ipcRenderer.on("conversion:end", (event, { video, outputPath }) => {
      dispatch({ type: "video_complete", payload: { ...video, outputPath } });
    });

    ipcRenderer.on("conversion:progress", (event, { video, timemark }) => {
      dispatch({ type: "video_progress", payload: { ...video, timemark } });
    });
  };
};

const removeAllVideos = () => {
  return {
    type: "remove_all_videos",
  };
};

export {
  addVideos,
  showInFolder,
  removeVideo,
  setFormat,
  removeAllVideos,
  convertVideos,
};
