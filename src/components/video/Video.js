import React from 'react';
import PropTypes from 'prop-types';
import './Video.css';
import Gif from './loading-gif.gif';
import AudioLoop from '../audio/loop-audio.wav';
let video;
let audio;

class Video extends React.Component {

  componentDidMount() {
    video = this.refs.video;
    audio = this.refs.audio;
    video.play();
    video.playbackRate = 10;
  }

  videoClose() {
    video.webkitExitFullScreen();
    this.props.startAnimation();
    audio.play();
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
      type="audio/wav"
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
