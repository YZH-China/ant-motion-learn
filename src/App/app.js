import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import './app.css';
import './index.css';

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
import ChangeAnimParam from '../examples/SingleElement/ChangeAnimParam';
import SvgLinear from '../examples/SingleElement/SvgLinear';
import SvgMorph from '../examples/SingleElement/SvgMorph';
import PathSlowing from '../examples/SingleElement/pathSlowing';
import CurvePath from '../examples/SingleElement/CurvePath';
import Bezier from '../examples/SingleElement/Bezier';

//引入进出场动画范例子组件
import Simple from '../examples/EntranceAndExit/Simple';
import EnterAndLeave1 from '../examples/EntranceAndExit/EnterAndLeave1';
import Addandremove from '../examples/EntranceAndExit/Addandremove';
import CustomAnim from '../examples/EntranceAndExit/CustomAnim';
import Complex from '../examples/EntranceAndExit/Complex';

//引入滚动动画范例子组件
import MyParallax from '../examples/ScrollAnim/Parallax';
import CustomParallax from '../examples/ScrollAnim/CustomParallax';
import ParallaxTimeLine from '../examples/ScrollAnim/ParallaxTimeLine';
import MyOverPack from '../examples/ScrollAnim/OverPack';

//引入Banner动画范例子组件
import SimpleBanner from '../examples/Banner/Simple';

//引入成品组件
import Edit from '../logoGather/Edit.js';

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
							<li>
								<Link to="/entrancsAndExit">进出场动画</Link>
							</li>
							<li>
								<Link to="/scrollAnim">滚动动画</Link>
							</li>
							<li>
								<Link to="/banner">Banner动画</Link>
							</li>
							<li>
								<Link to="/logoGather">logo 聚集与散开</Link>
							</li>
						</ul>
					</nav>
					<Route path="/apis" component={SubApi}></Route>
					<Route path="/singleElementAnimation" component={SubSingleElementAnimation}></Route>
					<Route path="/entrancsAndExit" component={SubEntrancsAndExit}></Route>
					<Route path="/scrollAnim" component={SubScrollAnim}></Route>
					<Route path="/banner" component={SubBanner}></Route>
					<Route path="/logoGather" component={Edit}></Route>
				</div>
			</Router>
		);
	}
}

const SubBanner = () => (
	<div>
		<ul className="subNav">
			<li>
				<Link to="/banner/simple">简单的例子</Link>
			</li>
		</ul>
		<Route path="/banner/simple" component={SimpleBanner}></Route>
	</div>
)

const SubScrollAnim = () => (
	<div>
		<ul className="subNav">
			<li>
				<Link to="/scrollAnim/parallax">Parallax示例</Link>
			</li>
			<li>
				<Link to="/scrollAnim/customParallax">自定义parallax</Link>
			</li>
			<li>
				<Link to="/scrollAnim/parallaxTimeLine">parallax时间轴动画</Link>
			</li>
			<li>
				<Link to="/scrollAnim/overpack">OverPack例子</Link>
			</li>
		</ul>
		<Route path="/scrollAnim/parallax" component={MyParallax}></Route>
		<Route path="/scrollAnim/customParallax" component={CustomParallax}></Route>
		<Route path="/scrollAnim/parallaxTimeLine" component={ParallaxTimeLine}></Route>
		<Route path="/scrollAnim/overpack" component={MyOverPack}></Route>
	</div>
)

const SubEntrancsAndExit = () => (
	<div>
		<ul className="subNav">
			<li>
				<Link to="/entrancsAndExit/simple">简单的例子</Link>
			</li>
			<li>
				<Link to="/entrancsAndExit/enterandleave1">进场和离场1</Link>
			</li>
			<li>
				<Link to="/entrancsAndExit/addandremove">添加与删除</Link>
			</li>
			<li>
				<Link to="/entrancsAndExit/customAnim">自定义动画进出场</Link>
			</li>
			<li>
				<Link to="/entrancsAndExit/complex">复杂的例子</Link>
			</li>
		</ul>
		<Route path="/entrancsAndExit/simple" component={Simple}></Route>
		<Route path="/entrancsAndExit/enterandleave1" component={EnterAndLeave1}></Route>
		<Route path="/entrancsAndExit/addandremove" component={Addandremove}></Route>
		<Route path="/entrancsAndExit/customAnim" component={CustomAnim}></Route>
		<Route path="/entrancsAndExit/complex" component={Complex}></Route> 
	</div>
)

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
		<Route path="/singleElementAnimation/changeAnimParam" component={ChangeAnimParam}></Route>
		<Route path="/singleElementAnimation/svgLinear" component={SvgLinear}></Route>
		<Route path="/singleElementAnimation/svgDeformation" component={SvgMorph}></Route>
		<Route path="/singleElementAnimation/pathSlowing" component={PathSlowing}></Route>
		<Route path="/singleElementAnimation/curvePath" component={CurvePath}></Route>
		<Route path="/singleElementAnimation/curveAnimation" component={Bezier}></Route>
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