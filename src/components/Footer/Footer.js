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
	// 				console.log("ad")
	// 				console.log(el);
	// 			}
	// 		}
	// 	);
	// 	console.log("ad")
	// }

	render() {

		return (

			<footer id="footer" role="contentinfo">
				<section>
					{/*<div className="grid-container2">*/}
					<div style={{display:"flex", justifyContent:"center"}}>
						{/*<div className="grid-item social-media-container">*/}
						<div>
							<div className="social-icons">
								<a className=" grid-item social-icon social-icon--youtube">
									<i className="fa fa-youtube"></i>
									<div className="tooltip">Youtube</div>
								</a>
							</div>
							{/*<div className="social-rectangles">*/}
								{/*<a href="#" className="btn youtube">*/}
									{/*<span className="label">YouTube</span>*/}
								{/*</a>*/}
							{/*</div>*/}
						</div>
						<div >
							<div className="social-icons">
								<a className="social-icon social-icon--instagram">
									<i className="fa fa-instagram"></i>
									<div className="tooltip">Instagram</div>
								</a>
							</div>
							{/*<div className="social-rectangles">*/}
								{/*<a href="#" className="btn instagram">*/}
									{/*<span className="label">Instagram</span>*/}
								{/*</a>*/}
							{/*</div>*/}
						</div>
						<div >
							<div className="social-icons">
								<a className="social-icon social-icon--facebook">
									<i className="fa fa-facebook"></i>
									<div className="tooltip">Facebook</div>
								</a>
							</div>
							{/*<div className="social-rectangles">*/}
								{/*<a href="#" className=" btn facebook">*/}
									{/*<span className="label">Facebook</span>*/}
								{/*</a>*/}
							{/*</div>*/}
						</div>
						<div >
							<div className="social-icons">
								<a className="social-icon social-icon--contact-us">
									<i className="far fa-envelope"></i>
									<div className="tooltip">Contact</div>
								</a>
							</div>
							{/*<div className="social-rectangles">*/}
								{/*<a href="#" className=" btn contact-us">*/}
									{/*<span className="label">Contact Us</span>*/}
								{/*</a>*/}
							{/*</div>*/}
						</div>
					</div>
				</section>
				<div id="footer-content" className="container">
					<div className="row1">
						<div className="copyright col-lg-12">
							<span className="content-center">Copyright © 2020 Desi Urban TV | All Rights Reserved.</span>
						</div>
					</div>
				</div>
			</footer>

		)
	}
}


