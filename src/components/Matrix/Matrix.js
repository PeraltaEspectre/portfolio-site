import React, { Component } from 'react';

import { animateBackground } from '../../util';

class Matrix extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    animateBackground(canvas);
  }

  render() {
    return (
      <div style={{zIndex: '-100', position: 'fixed'}}>
        <canvas ref={this.canvasRef} width={window.innerWidth} height={window.innerHeight}/>
      </div>
    );
  }
}

export default Matrix;