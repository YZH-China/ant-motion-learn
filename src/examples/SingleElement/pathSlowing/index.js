import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';

//准备路径数据
const p0 = "M0,100 L25,100 C34,20 40,0 100,0";
const p1 = "M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100";
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);

class PathSlowing extends Component {
	constructor() {
		super(...arguments);
		this.displayName="PathSlowing";
		this.animation = [
			{
				repeatDelay: 500,
				y: -70,
				repeat: -1,
				yoyo: true,
				ease: ease0,
				duration: 1000
			},
			{
				repeatDelay: 500,
				appearTo: 0,
				scaleX:0,
				scaleY: 2,
				repeat: -1,
				yoyo: true,
				ease: ease1,
				duration: 1000
			}
		]
	}

	render() {
		return (
			<div className="exampleContent">
				<TweenOne
					animation={this.animation}
					style={{
						width: '50px',
						height: '50px',
						backgroundColor: 'blue',
						borderRadius: '5px',
						position: 'absolute',
						transformOrigin: 'center bottom',
						marginTop: '100px'
					}}
				></TweenOne>
			</div>
		);
	}
}

export default PathSlowing;