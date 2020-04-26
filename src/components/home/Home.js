import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// import BlackLogo from '../../assets/desi-urban-tv-black.png';
// import WhiteLogo from '../../assets/desi-urban-tv-white.png';
import Video from '../../assets/front-page-video.mp4';
import HeaderNav from '../../components/header/HeaderNav'
// import StudyBook1 from '../../assets/study-book-1.png';
// import ImmiBook1 from '../../assets/immi-book-1.png'
// import CheckBox from '../../assets/check-box.jpeg'
import Books from '../../assets/books.png'
import YoutubeIcon from'../../assets/youtube-icon.png'
import InstagramIcon from '../../assets/Instagram-icon.png'


export default class Home extends Component {

	// componentWillMount() {
	// 	var docWidth = document.documentElement.getBoundingClientRect();
	//
	// 	[].forEach.call(
	// 		document.querySelectorAll('*'),
	// 		function(el) {
	// 			if (el.getBoundingClientRect() > docWidth) {
	// 				console.log("ab")
	// 				console.log(el);
	// 			}
	// 		}
	// 	);
	// 	console.log("ab")
	// }

	render() {

		return (

				<div id="main-content">
					<main className="content">
						<div className="row videoBlock">
							<div className="col col__fullBleed col__isSingleLine videoBlock__container">
								<video id="video-src" autoPlay muted loop playsInline controls
									   className="videoBlock__player" width="100%" height="100%">
									<source
										src={Video}
										type="video/mp4"/>
								</video>
							</div>
						</div>
						<section className="welcome-content fade-in visible">
							<div className="grid-container1">
								<div className="grid-item " style={{justifyContent: "center", display: "inline-grid"}}>
									<h1>Desi Urban TV</h1>
								</div>
								<div className="grid-item ">
									<p>"This is the right place for the dreamers, here you will find all
										the things related to study in Canada, travel Vlog, life-style
										and immigration to Canada"
									</p>
								</div>
							</div>
						</section>
						<div className="welcome">
							<section className="welcome-content fade-in visible">
								<div className="grid-container1">
									<div className="grid-item ">
										<img src={Books}/>
									</div>
									<div className="grid-item centered">
										<h3>Download E-Books</h3>
										<p>Real Gem to achieve your dream to come to Canada</p>
										<p>Absolutely Free</p>
										<div className="social-rectangles" style={{justifyContent: "center"}}>
											<a href="#" className=" btn instagram">
												<span className="label">Download</span>
											</a>
										</div>
										{/*<button className="arrow-btn">Download more<span></span></button>*/}
									</div>
								</div>
							</section>
							{/*<section className="fashion fade-in visible ">*/}
							{/*<div className="fashion-grid grid-container2">*/}
							{/*<div className="grid-item">*/}
							{/*<div className="img-container ">*/}
							{/*<div className="libro placeholder-container " data-visible="false">*/}
							{/*/!*<span></span>*!/*/}
							{/*<img*/}
							{/*src={StudyBook1} className="book img-placeholder" alt=""/>*/}

							{/*</div>*/}
							{/*<img className="book img-lazy loaded"*/}
							{/*data-src="https://images.unsplash.com/photo-1532072433133-6c4bc8ccbef7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=420&amp;h=420&amp;q=80"*/}
							{/*src={StudyBook1}*/}
							{/*alt=""/>*/}
							{/*/!*<div className="img-overlay">*!/*/}
							{/*/!*<a href="#"><span>B</span><span>u</span><span>y</span></a>*!/*/}
							{/*/!*</div>*!/*/}

							{/*<div className="social-rectangles">*/}
							{/*<a href="#" className="btn instagram">*/}
							{/*<span className="label">Instagram</span>*/}
							{/*</a>*/}
							{/*</div>*/}
							{/*</div>*/}
							{/*<h2>DownLoad</h2>*/}
							{/*</div>*/}
							{/*<div className="grid-item">*/}
							{/*<div className="img-container">*/}
							{/*<div className="placeholder-container" data-visible="false">*/}
							{/*<img*/}
							{/*src={ImmiBook1}*/}
							{/*className="img-placeholder" alt=""/>*/}
							{/*</div>*/}
							{/*<img className="img-lazy loaded"*/}
							{/*data-src="https://images.unsplash.com/photo-1532072485171-c53a112f8cd0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=420&amp;h=420&amp;q=80"*/}
							{/*src={ImmiBook1}*/}
							{/*alt=""/>*/}
							{/*<div className="img-overlay">*/}
							{/*/!*<a href="#"><span>B</span><span>u</span><span>y</span></a>*!/*/}
							{/*/!*</div>*!/*/}
							{/*</div>*/}
							{/*<h2>DownLoad</h2>*/}
							{/*</div>*/}
							{/*<div className="grid-item centered">*/}
							{/*<h3>Download E-Books</h3>*/}
							{/*<p>Real Gem to achieve your dream to come to Canada</p>*/}
							{/*<button className="arrow-btn">Download more<span></span></button>*/}
							{/*</div>*/}
							{/*<div className="grid-item">*/}

							{/*</div>*/}

							{/*</div>*/}

							{/*</section>*/}


							<section className="welcome-content fade-in visible"
									 style={{backgroundColor: "white", paddingTop: "2.5px", paddingBottom: "2.5px"}}>
								<div className="grid-container1">
									<div className="grid-item ">
										<p>"We don't stop here! We have launched a 3-part series on YouTube,
											where we discuss each immigration step in detail. So please subscribe!"
										</p>

									</div>
									<div className="grid-item " style={{display: "flex", justifyContent: "center"}}>
										<img src={YoutubeIcon} style={{height: "200px", width: "200px"}}/>
									</div>
								</div>
							</section>
							{/*<div style={}*/}
							<section className="welcome-content fade-in visible">
								<div className="grid-container1">
									<div className="grid-item ">
										<p>"This is the right place for the dreamers, here you will find all
											the things related to study in Canada, travel Vlog, life-style
											and immigration to Canada"</p>
									</div>
								</div>
							</section>
						</div>
						<section className="welcome-content fade-in visible"
								 style={{backgroundColor: "white", paddingTop: "10px", paddingBottom: "10px"}}>
							<div className="grid-container1">
								<div className="grid-item "
									 style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
									<img src={InstagramIcon} style={{height: "150px", width: "150px"}}/>
								</div>
								<div className="grid-item ">
									<p>"We don't stop here! We have launched a 3-part series on YouTube,
										where we discuss each immigration step in detail. So please subscribe!"
									</p>
								</div>

							</div>
						</section>
						{/*<nav id="pageSubtitleBar" className="subtitleBar" aria-label="Secondary">*/}
						{/*<div*/}
						{/*className="col col__col-sm-12 col__isSingleLine subtitleBar__wrapper fullbleed__1540">*/}
						{/*<button className="subtitleBar__small subtitleBar__button"*/}
						{/*type="button">JUMP TO SECTION<i className="icon-chevron-down"*/}
						{/*aria-hidden="true"></i></button>*/}
						{/*<div className="subtitleBar__container"><a href="/"><img*/}
						{/*src={BlackLogo} alt="Conde Nast"*/}
						{/*className="subtitleBar__logo"/></a>*/}
						{/*<div className="subtitleBar__textContainer"><a*/}
						{/*className="subtitleBar__button subtitleBar__button--active"*/}
						{/*href="#our-brands">Our Brands</a><a className="subtitleBar__button"*/}
						{/*href="#our-people2">Our*/}
						{/*People</a><a className="subtitleBar__button" href="#our-markets">Our*/}
						{/*Markets</a></div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*</nav>*/}
						{/*<div className="row">*/}
						{/*<div*/}
						{/*className="col col__col-md-10 col__col-lg-8 col__col-xl-6 col__col-md-offset-1 col__col-lg-offset-2 col__col-xl-offset-3 subtitle intersecting--subtitle"*/}
						{/*id="our-brands"><h1 className="subtitle__title">Our Brands</h1></div>*/}
						{/*</div>*/}
						{/*<div className="row copy-block">*/}
						{/*<div*/}
						{/*className="col col__col-md-10 col__col-lg-8 col__col-xl-6 col__col-md-offset-1 col__col-lg-offset-2 col__col-xl-offset-3 col__isSingleLine">*/}
						{/*<div className="formatMarkdown copy-block__copy"><p>Condé Nast is home to*/}
						{/*some of the world’s most iconic brands, including <em>Vogue</em>, <em>The*/}
						{/*New Yorker</em>, <em>GQ</em>, <em>Vanity*/}
						{/*Fair</em>, <em>Wired</em>, <em>Architectural*/}
						{/*Digest</em> (<em>AD</em>), <em>Condé Nast Traveler</em> and <em>La*/}
						{/*Cucina Italiana</em>.</p><p>We are here to entertain, surprise, and*/}
						{/*empower. We provide exclusive access. And we are trusted to lead the*/}
						{/*way. From the iconic brands we cultivate to the world-leading talents we*/}
						{/*engage, we are committed to the best of the best.</p></div>*/}
						{/*<div className="copy-block__buttonsContainer"><a className="genericButton"*/}
						{/*href="/brands-and-markets">*/}
						{/*<p className="genericButton__text">Visit our brands<span*/}
						{/*className="ourTeamsButton__no-arrow">⟶</span></p></a></div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*<div className="row genericImageBlock">*/}
						{/*<div*/}
						{/*className="col col__fullBleed col__isSingleLine genericImageBlock__carousel">*/}
						{/*<div className="slick-slider slick-initialized" dir="ltr">*/}
						{/*<div className="slick-list">*/}
						{/*<div className="slick-track"*/}
						{/*style={{opacity: "1", transform: "translate3d(0px, 0px, 0px);"}}>*/}
						{/*<div data-index="0"*/}
						{/*className="slick-slide slick-active slick-current"*/}
						{/*tabIndex="-1" aria-hidden="false"*/}
						{/*style={{outline: "none", width: "0px;"}}>*/}
						{/*<div>*/}
						{/*<div tabIndex="-1"*/}
						{/*style={{width: "100%", display: "inline-block"}}><img*/}
						{/*className="genericImageBlock__picture"*/}
						{/*src="https://images.ctfassets.net/hbmwn5pbkdff/6MQZjhnQ9iHNhSZu1YUvuN/9d90bc65ed76ce82858ac5d8902b4d0f/HOME_PAGE_IMAGE_PAGE__germany_.jpg?w=600"*/}
						{/*alt=""/></div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*<div data-index="1" className="slick-slide slick-active"*/}
						{/*tabIndex="-1" aria-hidden="false"*/}
						{/*style={{outline: "none", width: "0px;"}}>*/}
						{/*<div>*/}
						{/*<div tabIndex="-1"*/}
						{/*style={{width: "100%", display: "inline-block"}}><img*/}
						{/*className="genericImageBlock__picture"*/}
						{/*src="https://images.ctfassets.net/hbmwn5pbkdff/jFJXQBE8QyaegWJLRc4aF/d6c320517e9446c6ff928dc7948119dd/COMMERCIAL_IMAGE_BLOCK_1__usa_.jpg?w=600"*/}
						{/*alt=""/></div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*<div*/}
						{/*className="col col__fullBleed col__isSingleLine genericImageBlock__container">*/}
						{/*<div*/}
						{/*className="col col__col-sm-12 col__col-md-6 col__col-lg-6 col__col-xl-6 col__col-xxl-6 col__isSingleLine genericImageBlock__container__left">*/}
						{/*<img className="genericImageBlock__picture"*/}
						{/*src="https://images.ctfassets.net/hbmwn5pbkdff/6MQZjhnQ9iHNhSZu1YUvuN/9d90bc65ed76ce82858ac5d8902b4d0f/HOME_PAGE_IMAGE_PAGE__germany_.jpg?w=1000"*/}
						{/*alt=""/></div>*/}
						{/*<div*/}
						{/*className="col col__col-sm-12 col__col-md-6 col__col-lg-6 col__col-xl-6 col__col-xxl-6 col__isSingleLine genericImageBlock__container__right">*/}
						{/*<img className="genericImageBlock__picture"*/}
						{/*src="https://images.ctfassets.net/hbmwn5pbkdff/jFJXQBE8QyaegWJLRc4aF/d6c320517e9446c6ff928dc7948119dd/COMMERCIAL_IMAGE_BLOCK_1__usa_.jpg?w=1000"*/}
						{/*alt=""/></div>*/}
						{/*</div>*/}
						{/*<div*/}
						{/*className="col col__col-md-10 col__col-lg-8 col__col-xl-6 col__fullBleed col__col-md-offset-1 col__col-lg-offset-2 col__col-xl-offset-3 col__isSingleLine genericImageBlock__info__mobile"></div>*/}
						{/*<div className="row genericImageBlock__info">*/}
						{/*<div className="col col__isSingleLine genericImageBlock__info__left"></div>*/}
						{/*<div className="col col__isSingleLine genericImageBlock__info__right"></div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*<div className="row">*/}
						{/*<div*/}
						{/*className="col col__col-md-10 col__col-lg-8 col__col-xl-6 col__col-md-offset-1 col__col-lg-offset-2 col__col-xl-offset-3 subtitle intersecting--subtitle"*/}
						{/*id="our-people2"><h1 className="subtitle__title">Our People</h1></div>*/}
						{/*</div>*/}
						{/*<div className="row copy-block">*/}
						{/*<div*/}
						{/*className="col col__col-md-10 col__col-lg-8 col__col-xl-6 col__col-md-offset-1 col__col-lg-offset-2 col__col-xl-offset-3 col__isSingleLine">*/}
						{/*<div className="formatMarkdown copy-block__copy"><p>We connect a network of*/}
						{/*passionate people, an international network as excited as we are by*/}
						{/*movement and progress. Working at Condé Nast puts you at the forefront*/}
						{/*of change, at an industry-leading company with incredible global reach*/}
						{/*and influence.</p></div>*/}
						{/*<div className="copy-block__buttonsContainer"><a className="genericButton"*/}
						{/*href="/careers"><p*/}
						{/*className="genericButton__text">Join one of our teams<span*/}
						{/*className="ourTeamsButton__no-arrow">⟶</span></p></a></div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*<div className="row genericImageBlock">*/}
						{/*<div*/}
						{/*className="col col__fullBleed col__isSingleLine genericImageBlock__carousel">*/}
						{/*<div className="slick-slider slick-initialized" dir="ltr">*/}
						{/*<div className="slick-list">*/}
						{/*<div className="slick-track"*/}
						{/*style={{opacity: "1", transform: "translate3d(0px, 0px, 0px);"}}>*/}
						{/*<div data-index="0"*/}
						{/*className="slick-slide slick-active slick-current"*/}
						{/*tabIndex="-1" aria-hidden="false"*/}
						{/*style={{outline: "none", width: "0px;"}}>*/}
						{/*<div>*/}
						{/*<div tabIndex="-1"*/}
						{/*style={{width: "100%", display: "inline-block"}}><img*/}
						{/*className="genericImageBlock__picture"*/}
						{/*src="https://images.ctfassets.net/hbmwn5pbkdff/472oVIieJFSXwT6OYqiNMj/4a017d08daffc9badd449da1defc255b/home_our-markets_50-50_16-9_left.jpg?w=600"*/}
						{/*alt=""/></div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*<div data-index="1" className="slick-slide slick-active"*/}
						{/*tabIndex="-1" aria-hidden="false"*/}
						{/*style={{outline: "none", width: "0px;"}}>*/}
						{/*<div>*/}
						{/*<div tabIndex="-1"*/}
						{/*style={{width: "100%", display: "inline-block"}}><img*/}
						{/*className="genericImageBlock__picture"*/}
						{/*src="https://images.ctfassets.net/hbmwn5pbkdff/0QS4yJuaGz1DvI4vYb213/fac7e330d36148a4940b9c57ba3e592f/brand_summary_wired_large.jpg?w=600"*/}
						{/*alt=""/></div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*<div*/}
						{/*className="col col__fullBleed col__isSingleLine genericImageBlock__container">*/}
						{/*<div*/}
						{/*className="col col__col-sm-12 col__col-md-6 col__col-lg-6 col__col-xl-6 col__col-xxl-6 col__isSingleLine genericImageBlock__container__left">*/}
						{/*<img className="genericImageBlock__picture"*/}
						{/*src="https://images.ctfassets.net/hbmwn5pbkdff/472oVIieJFSXwT6OYqiNMj/4a017d08daffc9badd449da1defc255b/home_our-markets_50-50_16-9_left.jpg?w=1000"*/}
						{/*alt=""/></div>*/}
						{/*<div*/}
						{/*className="col col__col-sm-12 col__col-md-6 col__col-lg-6 col__col-xl-6 col__col-xxl-6 col__isSingleLine genericImageBlock__container__right">*/}
						{/*<img className="genericImageBlock__picture"*/}
						{/*src="https://images.ctfassets.net/hbmwn5pbkdff/0QS4yJuaGz1DvI4vYb213/fac7e330d36148a4940b9c57ba3e592f/brand_summary_wired_large.jpg?w=1000"*/}
						{/*alt=""/></div>*/}
						{/*</div>*/}
						{/*<div*/}
						{/*className="col col__col-md-10 col__col-lg-8 col__col-xl-6 col__fullBleed col__col-md-offset-1 col__col-lg-offset-2 col__col-xl-offset-3 col__isSingleLine genericImageBlock__info__mobile"></div>*/}
						{/*<div className="row genericImageBlock__info">*/}
						{/*<div className="col col__isSingleLine genericImageBlock__info__left"></div>*/}
						{/*<div className="col col__isSingleLine genericImageBlock__info__right"></div>*/}
						{/*</div>*/}
						{/*</div>*/}
						{/*<div className="row">*/}
						{/*<div*/}
						{/*className="col col__col-md-10 col__col-lg-8 col__col-xl-6 col__col-md-offset-1 col__col-lg-offset-2 col__col-xl-offset-3 subtitle intersecting--subtitle"*/}
						{/*id="our-markets"><h1 className="subtitle__title">Our Markets</h1></div>*/}
						{/*</div>*/}
						{/*<div className="row copy-block">*/}
						{/*<div*/}
						{/*className="col col__col-md-10 col__col-lg-8 col__col-xl-6 col__col-md-offset-1 col__col-lg-offset-2 col__col-xl-offset-3 col__isSingleLine">*/}
						{/*<div className="formatMarkdown copy-block__copy"><p>Headquartered in New*/}
						{/*York and London, Condé Nast operates in 31 markets.*/}
						{/*Our markets include China, France, Germany, India, Italy, Japan, Mexico*/}
						{/*and Latin America, Russia, Spain, Taiwan, the U.K. and the U.S., with*/}
						{/*additional license partners around the globe.</p></div>*/}
						{/*<div className="copy-block__buttonsContainer"><a className="genericButton"*/}
						{/*href="about#markets"><p*/}
						{/*className="genericButton__text">View our map<span*/}
						{/*className="ourTeamsButton__no-arrow">⟶</span></p></a></div>*/}
						{/*</div>*/}
						{/*</div>*/}
					</main>
				</div>

		)
	}
}