import React from "react";
import VideoSelectScreen from "./VideoSelectScreen";
import VideoList from "../components/VideoList";

import { connect } from "react-redux";

class ConvertScreen extends React.Component {
  render() {
    return (
      <div>
        <VideoSelectScreen small />
        <VideoList videos={this.props.videos}></VideoList>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    videos: state.videos,
  };
};

export default connect(mapStateToprops)(ConvertScreen);
