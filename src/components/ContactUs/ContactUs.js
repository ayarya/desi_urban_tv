import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import HeaderNav from "../header/HeaderNav";



export default class ContactUs extends Component {

	render() {

		return (

				<div id="main-content" className="contact-us-welcome">
					<main className="content ">
						<section >
										<div className="grid-container1 contact-us-grid">
											<div className="grid-item centered welcome-content ">
												<h3>I'D LOVE TO HEAR FROM YOU</h3>
												<p> PR & MANAGEMENT      : info@mysite.com</p>
												<p>FOR BUSINESS INQUIRIES: info@mysite.com</p>
											</div>
											<div className="grid-item" style={{  borderRadius: "25px"}}>

												<div id="form-main">
													<div id="form-div">
														<form className="form" id="form1">

															<p className="name">
																<input name="name" type="text"
																	   className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
																	   placeholder="Name" id="name"/>
															</p>

															<p className="email">
																<input name="email" type="text"
																	   className="validate[required,custom[email]] feedback-input"
																	   id="email" placeholder="Email"/>
															</p>

															<p className="text">
																<textarea name="text"
																		  className="validate[required,length[6,300]] feedback-input"
																		  id="comment" placeholder="Comment"></textarea>
															</p>


															<p className="submit">
																<input type="submit" value="SEND" id="button-blue"/>
																<div className="ease"></div>
															</p>
														</form>
													</div>
												</div>
											</div>
										</div>
						</section>
					</main>
				</div>

		)
	}
}


{/*<div className="wrapper">*/}
{/*<div className="contact-form-container">*/}
{/*<h2>Contact us</h2>*/}
{/*<div id="error_message">*/}
{/*</div>*/}
{/*<form action="" id="myform" onSubmit="return validate();">*/}
{/*<div className="input_field">*/}
{/*<input type="text" placeholder="Name" id="name"/>*/}
{/*</div>*/}
{/*<div className="input_field">*/}
{/*<input type="text" placeholder="Subject" id="subject"/>*/}
{/*</div>*/}
{/*<div className="input_field">*/}
{/*<input type="text" placeholder="Phone" id="phone"/>*/}
{/*</div>*/}
{/*<div className="input_field">*/}
{/*<input type="text" placeholder="Email" id="email"/>*/}
{/*</div>*/}
{/*<div className="input_field">*/}
{/*<textarea placeholder="Message" id="message"></textarea>*/}
{/*</div>*/}
{/*<div className="btn">*/}
{/*<input type="submit"/>*/}
{/*</div>*/}
{/*</form>*/}
{/*</div>*/}
{/*</div>*/}