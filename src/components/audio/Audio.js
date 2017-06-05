import React from 'react';
import AudioLoop from './loop-audio.wav';

class Audio extends React.Component {

  render() {
    return (
      <audio
      src={AudioLoop}
      type="audio/wav"
      ref='audio'
      loop
      autoPlay
      />
      );
  }
}

export default Audio;
