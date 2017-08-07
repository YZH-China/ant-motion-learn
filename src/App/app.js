import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import './app.css';

//引入API学习子组件
import SingleElement from '../SingleElement';
import CssStyle from '../CssStyle';
import EnterAnimation from '../EnterAnimation';
import PageScrollingAnimation from '../PageScrollingAnimation';
import BannerAnimation from '../BannerAnimation';

//引入单元素动画范例子组件
import Displacement from '../examples/SingleElement/Displacement';
import Zoom from '../examples/SingleElement/Zoom';
import Rotate from '../examples/SingleElement/Rotate';
import Vague from '../examples/SingleElement/Vague';
import TimeAxis from '../examples/SingleElement/TimeAxis';

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
								<Link to="/apis">API学习</Link>
							</li>
							<li>
								<Link to="/singleElementAnimation">单元素动画范例</Link>
							</li>
						</ul>
					</nav>
					<Route path="/apis" component={SubApi}></Route>
					<Route path="/singleElementAnimation" component={SubSingleElementAnimation}></Route>
				</div>
			</Router>
		);
	}
}

const SubSingleElementAnimation = () => (
	<div>
		<ul className="subNav">
			<li>
				<Link to="/singleElementAnimation/displacement">位移效果</Link>
			</li>
			<li>
				<Link to="/singleElementAnimation/zoom">缩放效果</Link>
			</li>
			<li>
				<Link to="/singleElementAnimation/rotate">旋转效果</Link>
			</li>
			<li>
				<Link to="/singleElementAnimation/vague">模糊效果</Link>
			</li>
			<li>
				<Link to="/singleElementAnimation/timeAxis">时间轴效果</Link>
			</li>
			<li>
				<Link to="/singleElementAnimation/changeAnimParam">变更动画参数</Link>
			</li>
			<li>
				<Link to="/singleElementAnimation/svgLinear">SVG线性动画</Link>
			</li>
			<li>
				<Link to="/singleElementAnimation/svgDeformation">SVG变形动画</Link>
			</li>
			<li>
				<Link to="/singleElementAnimation/pathSlowing">路径缓动</Link>
			</li>
			<li>
				<Link to="/singleElementAnimation/curvePath">曲线路径动画</Link>
			</li>
			<li>
				<Link to="/singleElementAnimation/curveAnimation">曲线动画</Link>
			</li>
		</ul>
		<Route path="/singleElementAnimation/displacement" component={Displacement}></Route>
		<Route path="/singleElementAnimation/zoom" component={Zoom}></Route>
		<Route path="/singleElementAnimation/rotate" component={Rotate}></Route>
		<Route path="/singleElementAnimation/vague" component={Vague}></Route>
		<Route path="/singleElementAnimation/timeAxis" component={TimeAxis}></Route>
	</div>
)

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
		<Route path="/apis/cssStyleAnimation" component={CssStyle}></Route>
		<Route path="/apis/enterAnimation" component={EnterAnimation}></Route>
		<Route path="/apis/pageScrollingAnimation" component={PageScrollingAnimation}></Route>
		<Route path="/apis/bannerAnimation" component={BannerAnimation}></Route>
	</div>
)

export default App;