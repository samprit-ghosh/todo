import React from 'react';
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export const Contact = () => {
	return (


		<>
			<section id="contact">
				<div class="section-content">
					<h1 class="section-header contact-h4">Get in <span class="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
					<h4 class="contact-h4">Contact with us for more information about Todo app.For further details please stay tunned.</h4>
				</div>
				<div class="contact-section">
					<div class="container ">
						<form>
							<div class="col-md-6 form-line">
								<div class="form-group">
									<label for="exampleInputUsername">Your name</label>
									<input type="text" class="form-control" id="" placeholder=" Enter Name" required />
								</div>
								<div class="form-group">
									<label for="exampleInputEmail">Email Address</label>
									<input type="email" class="form-control" id="exampleInputEmail" placeholder=" Enter Email id" required/>
								</div>
								<div class="form-group">
									<label for="telephone">Mobile No.</label>
									<input type="tel" class="form-control" id="telephone" placeholder=" Enter 10-digit mobile no."required />
								</div>
							</div>
							<div class="">
								
							<div>
							<button type="submit" className='btn btn-success mt-3 m-3 '>Success</button>
								<br/>	<br/>	<br/>	

								</div>

							</div>
						</form>
					</div>
				</div>
			</section>
		</>


	)
}