import React from 'react';
import PropTypes from 'prop-types';
import './Video.css';
import Gif from './loading-gif.gif';
let video;

class Video extends React.Component {

  componentDidMount() {
    video = this.refs.video;
    this.refs.video.play();
  }

  videoClose() {
    video.webkitExitFullScreen();
    this.props.startAnimation();
  }

  render() {

    return (
      <video
      onEnded={this.videoClose.bind(this)}
      ref='video'
      src={this.props.location}
      type="video/mp4"
      preload="auto"
      poster={Gif}
      ></video>
      );

  }
}

export default Video;

Video.propTypes = {
  location: PropTypes.string,
};
