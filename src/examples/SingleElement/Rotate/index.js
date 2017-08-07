import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';

class Rotate extends Component {
	constructor() {
		super(...arguments);
		this.displayName="Rotate";
		this.animation = {
			rotate: 360,
			yoyo: true,
			repeat: -1,
			duration: 1000
		};
		this.state = {
			paused: false
		}
	}

	render() {
		return (
			<div className="exampleContent">
				<TweenOne
					animation={this.animation}
					paused={this.state.paused}
					style={{
						width: '50px',
						height: '50px',
						backgroundColor: 'blue',
						borderRadius: '5px'
					}}
					onMouseEnter={(e) => {this.setState({paused: true})}}
					onMouseLeave={(e) => {this.setState({paused: false})}}
				></TweenOne>
			</div>
		);
	}
}

export default Rotate;