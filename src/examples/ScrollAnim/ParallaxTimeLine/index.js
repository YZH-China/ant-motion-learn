import React, { Component } from 'react';
import { Parallax } from 'rc-scroll-anim';

class ParallaxTimeLine extends Component {
  constructor() {
    super(...arguments);
    this.displayName="ParallaxTimeLine";
  }
  
  render() {
    return (
      <div className="exampleContent" style={{
        height: 1500,
        padding: '500px 0 0 0'
      }}>
        <Parallax
          animation={[
            { x: 0, opacity: 1, playScale: [0.2, 0.4] },
            { y: 100, playScale: [0.4, 0.6] },
            { blur: '10px', playScale: [0.6, .7] },
          ]}
          style={{
            transform: 'translateX(-100px)', filter: 'blur(0px)', opacity: 0,
            width: 50,
            height: 50,
            backgroundColor: 'blue',
            borderRadius: 5
          }}
        ></Parallax>
      </div>
    );
  }
}

export default ParallaxTimeLine;