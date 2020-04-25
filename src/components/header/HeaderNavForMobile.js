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
	// 				console.log("ae")
	// 				console.log(el);
	// 			}
	// 		}
	// 	);
	// 	console.log("ae")
	// }
	constructor(props){
		super(props);
		this.state = {
			barIcon:false
		}
	}
	onBarClick = (event) => {
		event.preventDefault();
		if(this.state.barIcon) {
			this.setState({
				barIcon:false
			})
		}
		else{
			this.setState({
				barIcon:true
			})
		}
	}
	render() {
		const {barIcon}= this.state;

		return (
						<header>
							<div className="row header__container">
								<div className="col header">
									<div className="layout__wrapper header__top-container">
										<a className="header__logo-link" href="/">
											<img className="header__logo" src={BlackLogo} alt="Urban Desi Tv"/>
										</a>
										<a href="/">
											<img className="header__mobile-logo" src={BlackLogo} alt="Urban Desi Tv"/>
										</a>
										<button className={`${barIcon ? 'header__burger-button header__burger-button-hide-outline' : 'header__burger-button'}`} type="button" aria-label="Menu">
											<i className="fas fa-bars fa-lg" aria-hidden="true" onClick={this.onBarClick}></i>
										</button>
										<a className="header__skip-main" href="#main-content">Skip to main content</a>
									</div>
									<nav className={`${barIcon ? 'burgerMenuOverlay__burger-menu--active' : 'burgerMenuOverlay__burger-menu'}`}>
										<div className="layout__wrapper burgerMenuOverlay__top-container">
											<a className="burgerMenuOverlay__logo-link" href="/">
												<img className="burgerMenuOverlay__logo" src={WhiteLogo} alt="Desi Urban TV"/>
											</a>
											<a href="/">
												<img className="burgerMenuOverlay__mobile-logo" src={WhiteLogo} alt="Desi Urban TV"/></a>
											<button className="burgerMenuOverlay__burger-button-close" type="button" aria-label="Menu Close">
												<i className="fas fa-times fa-lg"  aria-hidden="true" onClick={this.onBarClick}></i>
											</button>
										</div>
										<div className="layout__wrapper">
											<div className="row">
												<div
													className="col col__col-sm-11 col__col-lg-5 col__col-xl-4 col__col-xl-offset-1 col__isSingleLine">
													<div className="burgerMenuOverlay__burger-menu-container">
														<ul className="burgerMenuOverlay__burger-menu-list">
															<li className="burgerMenuOverlay__burger-menu-items">
																<a className="burgerMenuOverlay__burger-menu-text"
																   href="/home">Home
																</a>
															</li>
															<li className="burgerMenuOverlay__burger-menu-items">
																<a className="burgerMenuOverlay__burger-menu-text"
																href="/social-media">Social Media
																</a>
															</li>
															<li className="burgerMenuOverlay__burger-menu-items">
																<a className="burgerMenuOverlay__burger-menu-text"
																href="/ebooks">E-Books
																</a>
															</li>
															<li className="burgerMenuOverlay__burger-menu-items">
																<a className="burgerMenuOverlay__burger-menu-text"
																href="/merchandise">Merchandise
																</a>
															</li>
															<li className="burgerMenuOverlay__burger-menu-items">
																<a className="burgerMenuOverlay__burger-menu-text"
																href="/services">Services
																</a>
															</li>
															<li className="burgerMenuOverlay__burger-menu-items">
																<a className="burgerMenuOverlay__burger-menu-text"
																href="/resources">Resources
																</a>
															</li>
															<li className="burgerMenuOverlay__burger-menu-items">
																<a className="burgerMenuOverlay__burger-menu-text"
																href="/contact-us">Contact-Us
																</a>
															</li>
														</ul>
														<div className="burgerMenuOverlay__burger-menu-list"></div>
													</div>
													<div className="burgerMenuOverlay__burger-menu-footer-container">
														<div className="burgerMenuOverlay__burger-menu-footer"><p
															className="burgerMenuOverlay__footer__title">CONNECT WITH
															US</p>
															<ul className="list burgerMenuOverlay__footer__social-links">
																<li className="burgerMenuOverlay__footer__social-links-item">
																	<a className="burgerMenuOverlay__footer__social-link" href="https://twitter.com/condenast" aria-label="Twitter">
																		<i className="fab fa-youtube fa" aria-hidden="true"></i>
																	</a>
																</li>
																<li className="burgerMenuOverlay__footer__social-links-item">
																	<a className="burgerMenuOverlay__footer__social-link"
																	   href="https://www.instagram.com/condenast"
																	   aria-label="Instagram"><i
																		className="fab fa-instagram fa-lg"
																		aria-hidden="true"></i></a></li>
																<li className="burgerMenuOverlay__footer__social-links-item">
																	<a className="burgerMenuOverlay__footer__social-link"
																	   href="https://www.linkedin.com/company/conde-nast-international"
																	   aria-label="Linkedin">

																			<i className="fab fa-facebook-f fa-lg"
																			aria-hidden="true" style={{width:"22px"}}></i>
																	</a>
																</li>
															</ul>
														</div>
														<div
															className="burgerMenuOverlay__burger-menu-footer-empty"></div>
													</div>
												</div>
											</div>
										</div>
									</nav>
								</div>
							</div>
						</header>

		)
	}
}


