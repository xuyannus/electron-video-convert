import React from "react";
import Dropzone from "react-dropzone";

class VideoSelectScreen extends React.Component {
  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  renderChildren(isDragActive, isDragReject) {
    if (isDragActive && !isDragReject) {
      return <h4>Omnomnom, let me have those videos!</h4>;
    } else if (isDragActive && isDragReject) {
      return <h4>Uh oh, I don't know how to deal with that type of file!</h4>;
    } else {
      return <h4>Drag and drop some files on me, or click to select.</h4>;
    }
  }

  render() {
    return (
      <div>
        <Dropzone
          onDrop={this.onDrop}
          multiple
          accept="video/*"
          activeClassName="dropzone-active"
          rejectClassName="dropzone-reject"
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {this.renderChildren(isDragActive, isDragReject)}
            </div>
          )}
        </Dropzone>
      </div>
    );
  }
}
