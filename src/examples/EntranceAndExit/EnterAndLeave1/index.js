import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

class EnterAndLeave1 extends Component {
	constructor() {
		super(...arguments);
		this.displayName="EnterAndLeave1";
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
		/**
		 * 通过将配置属性写为数组来表示出场和入场
		 */
		return (
			<div className="exampleContent">
				<div className="queue-demo">
					<p className="buttons">
						<button className="primary" onClick={this.onClick}>切换</button>
					</p>
					<QueueAnim
						className="demo-content"
						type={['right', 'left']}
						ease={['easeOutQuart', 'easeInOutQuart']}
					>
						{
							this.state.show ? [
								<div className="demo-thead" key="a">
									<ul>
										<li>1</li>
										<li>2</li>
										<li>3</li>
									</ul>
								</div>,
								<div className="demo-tbody" key="b">
									<ul>
										<li>a</li>
										<li>b</li>
										<li>className</li>
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

export default EnterAndLeave1;