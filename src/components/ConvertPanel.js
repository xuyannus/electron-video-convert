import React from "react";
import { connect } from "react-redux";
import { convertVideos } from "../actions";

class ConvertPanel extends React.Component {
  onCancelPressed = () => {
    this.props.onRemoveAllVideos();
    this.props.onCancelWindow();
  };

  ConvertVideoActions = () => {
    this.props.onConvertVideos(_.map(this.props.videos));
  };

  render() {
    return (
      <div className="convert-panel">
        <button className="btn red" onClick={this.onCancelPressed}>
          Cancel
        </button>
        <button className="btn" onClick={this.ConvertVideoActions}>
          Convert!
        </button>
      </div>
    );
  }
}

export default ConvertPanel;
