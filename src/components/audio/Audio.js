import React from 'react';
import AudioLoop from './loop-audio.mp3';
let audio;

class Audio extends React.Component {

  componentDidMount() {
    audio = this.refs.audio;
    audio.play();
  }



  render() {
    return (
      <audio
      src={AudioLoop}
      type="audio/mp3"
      ref='audio'
      loop
      />
      );
  }
}

export default Audio;
