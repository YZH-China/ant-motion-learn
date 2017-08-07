import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';

class Zoom extends Component {
	constructor() {
		super(...arguments);
		this.displayName="Zoom";
		this.animation = {
			scaleX: 0,
			yoyo: true,
			repeat: -1,
			duration: 1000,
			ease: 'easeInOutQuad'
		}
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
						borderRadius: '5px',
						transform: 'scaleX(1)',
					}}
					onMouseEnter={(e) => {this.setState({paused: true})}}
					onMouseLeave={(e) => {this.setState({paused: false})}}
				></TweenOne>
			</div>
		);
	}
}

Zoom.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	paused: PropTypes.bool,
};

export default Zoom;