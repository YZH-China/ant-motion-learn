import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

class CustomAnim extends Component {
	constructor() {
		super(...arguments);
		this.displayName="CustomAnim";
		this.state = {
			show: true
		}
	}
	
	onClick = () => {
		this.setState({
			show: !this.state.show
		})
	}

	render() {
		return (
			<div className="exampleContent">
				<div className="queue-demo">
					<p className="buttons">
						<button onClick={this.onClick}>切换</button>
					</p>
					<QueueAnim
						className="demo-content"
						animConfig={[
							{ opacity: [1, 0], translateY: [0, 50] },
							{ opacity: [1, 0], translateY: [0, -50] }
						]}
					>
						{
							this.state.show ? [
								<div className="demo-thead" key="a">
									<ul>
										<li>我来组成头部</li>
									</ul>
								</div>,
								<div className="demo-tbody" key="b">
									<ul>
										<li>1</li>
										<li>2</li>
										<li>3</li>
									</ul>
								</div>
							] : null
						}
					</QueueAnim>
				</div>
			</div>
		);
	}
}

export default CustomAnim;