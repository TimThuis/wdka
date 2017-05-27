import React, { Component } from 'react';
import { Link } from 'react-router';
import Image from '../../../../images/2.png';

class R0I2 extends Component {
  render() {
    return (
      <div>
        <h3>Route 0 image 2</h3>
        <img src={Image} alt=""/>

        <div className="container-buttons-image">
          <Link to="/route-0/step-3" >yes</Link>
          <Link to="/route-0/step-3" >no</Link>
        </div>
        
        <p>spel uitleg & instagram login</p>
      </div>
      );
  }
}

export default R0I2;
