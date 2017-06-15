import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {

  render() {
    return (
      <div className="App">
        {this.props.children}
        <Link className="btn-return" to="/"> return </Link>
      </div>
      );
  }
}

export default App;

// <div className="links">
// <Link to="/route-0"> Route 0 </Link>
// <Link to="/route-a"> Route A </Link>
// <Link to="/route-b"> Route B </Link>
// </div>
