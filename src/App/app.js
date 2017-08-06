import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import './app.css';

//引入子组件
import SingleElement from '../SingleElement';

class App extends Component {
	constructor(props){
		super(props);
		this.displayName="App";
	}

	render() {
		return (
			<Router>
				<div className="container">
					<nav>
						<ul>
							<li>
								<Link to="/apis">动效组件</Link>
							</li>
						</ul>
					</nav>
					<Route path="/apis" component={SubApi}></Route>
				</div>
			</Router>
		);
	}
}

const SubApi = () => (
	<div>
		<ul className="subNav">
			<li>
				<Link to="/apis/singleElementAnimation">单元素动画</Link>
			</li>
			<li>
				<Link to="/apis/cssStyleAnimation">css样式动画</Link>
			</li>
			<li>
				<Link to="/apis/enterAnimation">进出场动画</Link>
			</li>
			<li>
				<Link to="/apis/pageScrollingAnimation">页面滚动动画</Link>
			</li>
			<li>
				<Link to="/apis/bannerAnimation">Banner动画</Link>
			</li>
		</ul>
		<Route path="/apis/singleElementAnimation" component={SingleElement}></Route>
	</div>
)

export default App;