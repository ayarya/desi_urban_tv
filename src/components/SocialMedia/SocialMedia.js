import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import InstaPic1 from '../../assets/insta-pic1.jpeg';
import InstaPic2 from '../../assets/insta-pic2.jpg';
import InstaPic3 from '../../assets/insta-pic3.jpg';
import InstaPic4 from '../../assets/insta-pic4.jpg';
import InstaPic5 from '../../assets/insta-pic5.jpg';
import InstaPic6 from '../../assets/insta-pic6.jpg';
import InstaPic7 from '../../assets/insta-pic7.jpg';
import InstaPic8 from '../../assets/insta-pic8.jpg';
import InstaLogo from '../../assets/insta-logo.PNG';
import GridPic1 from '../../assets/grid-pic1.PNG';
import GridPic2 from '../../assets/grid-pic2.PNG';
import GridPic3 from '../../assets/grid-pic3.PNG';
import GridPic4 from '../../assets/grid-pic4.PNG';
import GridPic5 from '../../assets/grid-pic5.PNG';
import GridPic6 from '../../assets/grid-pic6.PNG';
import GridPic7 from '../../assets/grid-pic7.PNG';
import GridPic8 from '../../assets/grid-pic8.PNG';
import GridPic9 from '../../assets/grid-pic9.JPG';
import GridPic10 from '../../assets/grid-pic10.JPG';







export default class SocialMedia extends Component {


	render() {

		return (
			<div id="main-content" className="welcome">
				<main className="content ">
					 <div className="video-responsive">
						<iframe width="560" height="405" src="https://www.youtube.com/embed/qS8pwRQleS0" frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen></iframe>
					 </div>
					 <div className="youtube-container">
						<div className="netflix-row">
							<ul className="netflix-row--inner">
								<img src={GridPic1} className="netflix-row--item"></img>
								<img src={GridPic2} className="netflix-row--item"></img>
								<img src={GridPic3} className="netflix-row--item"></img>
								<img src={GridPic4} className="netflix-row--item"></img>
								<img src={GridPic5} className="netflix-row--item"></img>
								<img src={GridPic6} className="netflix-row--item"></img>
								<img src={GridPic7} className="netflix-row--item"></img>
								<img src={GridPic8} className="netflix-row--item"></img>
								<img src={GridPic9} className="netflix-row--item"></img>
								<img src={GridPic10} className="netflix-row--item"></img>
							</ul>
						</div>
					 </div>

					<section className="welcome-content fade-in visible" style={{backgroundColor:"white"}}>
						<div className="grid-container1" style={{paddingTop:"20px",paddingBottom:"20px"}}>
							<div className="grid-item " style={{justifyContent: "center", display: "inline-grid"}}>
								<p>#DesiUrbanTV on Instagram</p>
							</div>
							<div className="grid-item " style={{display:"flex", justifyContent:"center"}}>
								<img src={InstaLogo} style={{height:"20%",width:"20%"}}></img>
							</div>
						</div>
					</section>

					{/*<section className="welcome-content fade-in visible" style={{backgroundColor:"white", paddingBottom:"10px"}}>*/}
						{/*<div className="grid-container1">*/}
							{/*<div className="grid-item " style={{justifyContent: "center", display: "inline-grid"}}>*/}
								{/*<p>#DesiUrbanTV on Instagram</p>*/}
							{/*</div>*/}
							{/*/!*<div className="grid-item ">*!/*/}
								{/*/!*<p>"This is the right place for the dreamers, here you will find all*!/*/}
									{/*/!*the things related to study in Canada, travel Vlog, life-style*!/*/}
									{/*/!*and immigration to Canada"*!/*/}
								{/*/!*</p>*!/*/}
							{/*/!*</div>*!/*/}
						{/*</div>*/}
					{/*</section>*/}
					 <section className="welcome-content fade-in visible" style={{ paddingTop:"20px", paddingBottom:"20px"}}>
						 {/*<div >*/}
							 {/*<h3>#DesiUrbanTV on Instagram</h3>*/}
						 {/*</div>*/}
						 <div className="instagram-grid grid-container3">
							 <div className="grid-item img-border">
								 <img src={InstaPic1} style={{width:"100%",height:"100%"}}></img>
							 </div>
							 <div className="grid-item img-border ">
								 <img src={InstaPic2} style={{width:"100%",height:"100%"}}></img>
							 </div>
							 <div className="grid-item img-border ">
								 <img src={InstaPic3} style={{width:"100%",height:"100%"}}></img>
							 </div>
							 <div className="grid-item img-border">
								 <img src={InstaPic4} style={{width:"100%",height:"100%"}}></img>
							 </div>
							 <div className="grid-item img-border">
							 </div>
							 <div className="grid-item img-border">
							 </div>
							 <div className="grid-item img-border">
								 <img src={InstaPic5} style={{width:"100%",height:"100%"}}></img>
							 </div>
							 <div className="grid-item img-border">
								 <img src={InstaPic6} style={{width:"100%",height:"100%"}}></img>
							 </div>
							 <div className="grid-item img-border">
							 </div>
							 <div className="grid-item img-border">
								 <img src={InstaPic7} style={{width:"100%",height:"100%"}}></img>
							 </div>
							 <div className="grid-item img-border">
								 <img src={InstaPic8} style={{width:"100%",height:"100%"}}></img>
							 </div>
							 <div className="grid-item img-border">
							 </div>
						 </div>
					 </section>
					 <section className="welcome-content fade-in visible" style={{backgroundColor:"white", paddingBottom:"10px"}}>
						<div className="grid-container1">
							<div className="grid-item " style={{justifyContent: "center", display: "inline-grid"}}>
								<p>#DesiUrbanTV on Facebook</p>
							</div>
							{/*<div className="grid-item ">*/}
							{/*<p>"This is the right place for the dreamers, here you will find all*/}
							{/*the things related to study in Canada, travel Vlog, life-style*/}
							{/*and immigration to Canada"*/}
							{/*</p>*/}
							{/*</div>*/}
						</div>
					 </section>
				</main>
		 </div>

		)
	}
}


