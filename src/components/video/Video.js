import React from 'react';
import PropTypes from 'prop-types';
import './Video.css';
import Gif from './loading-gif.gif';

class Video extends React.Component {

  componentDidMount() {
    this.refs.video.play();
  }

  render() {

    return (
      <video
      onEnded={this.props.startAnimation}
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
