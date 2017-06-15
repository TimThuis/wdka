import React from 'react';
import PropTypes from 'prop-types';
import './Video.css';
import Gif from './loading-gif.gif';
import AudioLoop from '../audio/loop-audio.mp3';
import { TweenMax } from "gsap";
let video;
let audio;

class Video extends React.Component {

  componentDidMount() {
    video = this.refs.video;
    audio = this.refs.audio;
    video.play();
  // video.volume = 0;
  // video.playbackRate = 10;
  }

  videoClose() {
    video.webkitExitFullScreen();
    this.props.startAnimation();
    // audio.play();
    TweenMax.from(audio, 2, {
      volume: 0,
      delay: 1,
    })
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
