import React, { Component } from 'react';
import TweenOne from 'rc-tween-one';

class TimeAxis extends Component {
	constructor() {
		super(...arguments);
		this.displayName="TimeAxis";
		this.animation = [
			{ left: '-40%' },
			{ left: '40%' },
			{ top: '30px' },
			{ scale: '0.7' },
			{ scale: '1' },
			{ top: 0 },
			{ left: '0%' }
		];
		this.state = {
			moment: null
		}
	}

	onChange = (e) => {
		if(e.mode === "onComplete" && e.index === 6){
			setTimeout(() => {
				this.setState({
					moment: 0
				})
			}, 0)
		} else {
			this.setState({
				moment: null
			})
		}
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
						position: 'absolute'
					}}
					onChange={this.onChange}
					moment={this.state.moment}
				></TweenOne>
			</div>
		);
	}
}

export default TimeAxis;