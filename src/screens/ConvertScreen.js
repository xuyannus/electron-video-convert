import React from "react";
import VideoSelectScreen from "./VideoSelectScreen";
import VideoList from "../components/VideoList";
import ConvertPanel from "../components/ConvertPanel";

import { connect } from "react-redux";
import {
  setFormat,
  removeVideo,
  showInFolder,
  convertVideos,
  removeAllVideos,
} from "../actions";

class ConvertScreen extends React.Component {
  backToMainWin = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <VideoSelectScreen small />
        <VideoList
          videos={this.props.videos}
          onFormatChange={this.props.setFormat}
          onFolderOpen={this.props.showInFolder}
          removeVideo={this.props.removeVideo}
        />
        <ConvertPanel
          videos={this.props.videos}
          onConvertVideos={this.props.convertVideos}
          onRemoveAllVideos={this.props.removeAllVideos}
          onCancelWindow={this.backToMainWin}
        />
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    videos: state.videos,
  };
};

export default connect(mapStateToprops, {
  setFormat,
  removeVideo,
  showInFolder,
  convertVideos,
  removeAllVideos,
})(ConvertScreen);
