import React, { Component } from 'react';
import { Parallax } from 'rc-scroll-anim';

class MyParallax extends Component {
	constructor() {
		super(...arguments);
		this.displayName="MyParallax";
	}

	render() {
		return (
			<div id="warp" className="exampleContent" style={{
				height: 1000
			}}>
				<Parallax
					animation={{ x: 0 }}
					style={{
						transform: 'translateX(-100px)',
						margin: '100px auto',
						width: 50,
						height: 50,
						backgroundColor: 'blue',
						borderRadius: 5
					}}
				></Parallax>
				<Parallax
					animation={{ scale: 1 }}
					style={{
						transform: 'scale(0)',
						margin: '10px auto',
						width: 50,
						height: 50,
						backgroundColor: 'blue',
						borderRadius: 5
					}}
				></Parallax>
				<Parallax
					animation={{ rotate: 360 }}
					style={{
						margin: '10px auto',
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

export default MyParallax;