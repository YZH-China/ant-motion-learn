import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';

class Displacement extends Component {
	constructor() {
		super(...arguments);
		this.displayName="Displacement";
		this.animation = {
			left: '40%',
			yoyo: true,
			repeat: -1,
			duration: 1000
		}
	}

	render() {
		return (
			<div className="exampleContent">
				<TweenOne
					animation={this.animation}
					paused={this.props.paused}
					style={{
						left: '20%',
						width:'50px',
						height: '50px',
						backgroundColor: 'blue',
						borderRadius: '5px',
						position: 'absolute'
					}}
				></TweenOne>
			</div>
		);
	}
}

Displacement.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	paused: PropTypes.bool
}

export default Displacement;