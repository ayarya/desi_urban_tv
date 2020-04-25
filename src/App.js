import Home from './components/home/Home';
import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HeaderNavForMobile from './components/header/HeaderNavForMobile';
import Footer from './components/Footer/Footer'
import HeaderNav from "./components/header/HeaderNav";
import ContactUs from "./components/ContactUs/ContactUs";
import SocialMedia from './components/SocialMedia/SocialMedia'



// const mapStateToProps=state=>({
// 	...state.login
//
// })

class App extends Component{

	// componentWillMount() {
	// 	var docWidth = document.documentElement.getBoundingClientRect();
	//
	// 	[].forEach.call(
	// 		document.querySelectorAll('*'),
	// 		function(el) {
	// 			if (el.getBoundingClientRect() > docWidth) {
	// 				console.log("aa")
	// 				console.log(el);
	// 			}
	// 		}
	// 	);
	// 	console.log("aa")
	// }


	render(){
		return(
			<Router>
				{

						<div>
							<div className="layout__wrapper body-wrapper">
								{<HeaderNavForMobile/>}
								<div id="page-content">
									{<HeaderNav/>}
									<Switch>
										<Route exact path="/" component={Home}/>
										<Route exact path="/home" component={Home}/>
										<Route path="/contact-us" component={ContactUs}/>
										<Route path="/social-media" component={SocialMedia}/>
									</Switch>
								</div>
							</div>
							{<Footer/>}
						</div>
				}
			</Router>

		)
	}
}
export default App;



