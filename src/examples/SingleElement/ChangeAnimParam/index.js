import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';

class ChangeAnimParam extends Component {
  constructor() {
    super(...arguments);
    this.displayName="ChangeAnimParam";
    this.moment = null;
    this.animation = {
      left: '70%',
      duration: 2000
    };
    this.state = {
      moment: null,
      paused: false,
      reverse: false
    }
  }

  onPause = () => {
    this.setState({
      paused: true,
      moment: null
    })
  }

  onReverse = () => {
    this.setState({
      paused: false,
      reverse: true,
      moment: null
    })
  }

  onRestart = () => {
    this.setState({
      paused: false,
      reverse: false,
      moment: 0
    }, () => {
      this.setState({
        moment: null
      })
    })
  }

  onClick = () => {
    this.setState({
      paused: false,
      reverse: false,
      moment: null
    })
  }

  render() {
    return (
      <div className="exampleContent">
        <TweenOne
          animation={this.animation}
          paused={this.state.paused}
          reverse={this.state.reverse}
          moment={this.state.moment}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'blue',
            borderRadius: '5px',
            position: 'absolute'
          }}
        ></TweenOne>
        <div style={{
          margin: '20% 0 0 0'
        }}>
          <button onClick={this.onClick}>播放</button>
          <button onClick={this.onPause}>暂停</button>
          <button onClick={this.onReverse}>反向</button>
          <button onClick={this.onRestart}>重播</button>
        </div>
      </div>
    );
  }
}

export default ChangeAnimParam;