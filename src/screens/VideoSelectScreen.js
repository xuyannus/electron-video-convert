import React from "react";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";

class VideoSelectScreen extends React.Component {
  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
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
          {({ getRootProps, getInputProps }) => {
            return (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p className="drop-message">
                  {!isDragActive && "Click here or drop a file to upload!"}
                  {isDragActive && !isDragReject && "Drop it here!"}
                  {isDragReject && "File type not accepted, sorry!"}
                </p>
              </div>
            );
          }}
        </Dropzone>
      </div>
    );
  }
}

export default VideoSelectScreen;
