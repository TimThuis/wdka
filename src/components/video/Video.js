import React from 'react';
import PropTypes from 'prop-types';
import './Video.css';
import Gif from './loading-gif.gif';
import AudioLoop from '../audio/loop-audio.mp3';
let video;
let audio;

class Video extends React.Component {

  constructor() {
    super();
    this.videoClose = this.videoClose.bind(this);
  }

  componentDidMount() {
    video = this.refs.video;
    audio = this.refs.audio;
    video.play();
    audio.play();
    audio.muted = true
  }

  videoClose() {
    audio.muted = false;
    video.webkitExitFullScreen();
    this.props.startAnimation();
  }

  render() {

    return (
      <div>
        <video
      onEnded={this.videoClose.bind(this)}
      ref='video'
      src={this.props.location}
      type="video/mp4"
      preload="auto"
      poster={Gif}
      ></video>

        <audio
      src={AudioLoop}
      type="audio/mp3"
      ref='audio'
      loop
      />
      </div>
      );

  }
}

export default Video;

Video.propTypes = {
  location: PropTypes.string,
};
