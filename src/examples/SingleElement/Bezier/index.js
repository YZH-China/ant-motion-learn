import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
TweenOne.plugins.push(PathPlugin);

class Bezier extends Component {
	constructor() {
		super(...arguments);
		this.displayName="Bezier";
		this.animation = {
			path: "M0,100 Q50,10 100,100 T200,100",
			repeat:-1,
			duration: 5000,
			ease: 'linear'
		}
	}

	render() {
		return (
			<div className="exampleContent">
				<TweenOne
					animation={this.animation}
					style={{
						width: 20,
						height: 20,
						backgroundColor:'blue',
						borderRadius: 5,
						transform: 'translate(-10px, 10px)'
					}}
				></TweenOne>
				<svg width="200" height="300" version="1.2">
					<path d={this.animation.path} stroke="black" stroke-width="2" fill="none" />
				</svg>
			</div>
		);
	}
}

export default Bezier;