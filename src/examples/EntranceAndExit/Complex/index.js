import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

class complex extends Component {
	constructor() {
		super(...arguments);
		this.displayName="complex";
		this.state = {
			show: true,
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
					<p className="buttons" style={{ marginBottom: 20 }}>
						<button type="primary" onClick={this.onClick}>切换</button>
					</p>
					<QueueAnim
						type={['right', 'left']}
						className="demo-content"
					>
						{
							this.state.show ? [
								<div className="demo-header" key="header">
									<div className="logo">
										<img src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" alt="logo1" height="15"/>
										<img src="https://zos.alipayobjects.com/rmsportal/glnFNVQMvQinmUr.svg" alt="logo2" height="8"/>
									</div>
								</div>,
								<div className="demo-banner" key="banner">
									<div className="point">
										<div>我来组成banner</div>
									</div>
								</div>,
								<QueueAnim
									className="demo-page"
									key="page"
									type="bottom"
								>
										<h1 key="h1">h1</h1>
										<p key="p">p</p>
										<div key="box" className="box">
											<QueueAnim
												type="bottom"
												component="ul"
											>
												<li key="1">1</li>
												<li key="2">2</li>
												<li key="3">3</li>
											</QueueAnim>
										</div>
									</QueueAnim>,
									<div className="demo-footer" key="footer">我来组成尾部</div>
							] : null
						}
					</QueueAnim>
				</div>
			</div>
		);
	}
}

export default complex;