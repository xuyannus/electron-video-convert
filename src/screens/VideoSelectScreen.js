import React from "react";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import { addVideos } from "../actions";
import _ from "lodash";

class VideoSelectScreen extends React.Component {
  onDrop = (acceptedFiles) => {
    const videos = _.map(acceptedFiles, ({ name, path, size, type }) => {
      return { name, path, size, type };
    });

    if (videos.length > 0) {
      this.props.addVideos(videos);
      if (!this.props.small) {
        this.props.history.push("./convert");
      }
    }
  };

  render() {
    return (
      <div
        className={
          this.props.small ? "video-select-screen-small" : "video-select-screen"
        }
      >
        <Dropzone
          onDrop={this.onDrop}
          multiple
          accept="video/*"
          activeClassName="dropzone-active"
          rejectClassName="dropzone-reject"
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
            return (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <h4 className="drop-message">
                  {!isDragActive && "Click here or drop a file to upload!"}
                  {isDragActive && !isDragReject && "Drop it here!"}
                  {isDragReject && "File type not accepted, sorry!"}
                </h4>
              </div>
            );
          }}
        </Dropzone>
      </div>
    );
  }
}

export default connect(null, { addVideos: addVideos })(VideoSelectScreen);
