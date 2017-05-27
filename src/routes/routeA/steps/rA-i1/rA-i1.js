import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from '../../../../images/1.png';

class RAI1 extends Component {
  render() {
    return (
      <div>
        <h3>Route A image 1</h3>
          <img src={Image} alt=""/>
          <div className="container-buttons-image">
            <Link to="/route-a/step-5" >cancel</Link>
            <Link to="/route-a/step-5" >post</Link>
          </div>
          <p>Tweede instagram post</p>
      </div>
      );
  }
}

export default RAI1;
