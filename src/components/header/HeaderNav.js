import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import BlackLogo from '../../assets/desi-urban-tv-black.png';
import WhiteLogo from '../../assets/desi-urban-tv-white.png';


export default class HeaderNavForMobile extends Component {

	// componentWillMount() {
	// 	var docWidth = document.documentElement.getBoundingClientRect();
	//
	// 	[].forEach.call(
	// 		document.querySelectorAll('*'),
	// 		function(el) {
	// 			if (el.getBoundingClientRect() > docWidth) {
	// 				console.log("ac")
	// 				console.log(el);
	// 			}
	// 		}
	// 	);
	// 	console.log("ac")
	// }
	render() {

		return (


				<nav id="pageSubtitleBar" className="subtitleBar">
					<ul className="col col__col-sm-12 col__isSingleLine subtitleBar__wrapper fullbleed__1540">
						<div className="subtitleBar__container">
						<li className="navigation__container">
							<a className="navigation__text" href="/home">Home</a>
						</li>
						<li className="navigation__container">
							<a className="navigation__text" href="/social-media">Social Media</a>
						</li>
						<li className="navigation__container">
							<a className="navigation__text" href="/ebooks">E-Books</a>
						</li>
						<li className="navigation__container">
							<a className="navigation__text" href="/merchandise">Merchandise</a>
						</li>
						<li className="navigation__container">
							<a className="navigation__text" href="/services">Services</a>
						</li>
						<li className="navigation__container">
							<a className="navigation__text" href="/resources">Resources</a>
						</li>
						<li className="navigation__container">
							<a className="navigation__text" href="/contact-us">Contact-Us</a>
						</li>
						</div>
					</ul>
				</nav>


		)
	}
}


