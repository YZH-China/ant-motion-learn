import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import img from './fengjing1.jpg';

class Vague extends Component {
  constructor() {
    super(...arguments);
    this.displayName="Vague";
  }

  render() {
    return (
      <div className="exampleContent">
        <TweenOne
          animation={{
            blur: '10px',
            yoyo: true,
            repeat: -1,
            duration: 1000
          }}
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '5px'
          }}
        >
          <img src={img} alt="风景1"/>
        </TweenOne>
      </div>
    );
  }
}

export default Vague;