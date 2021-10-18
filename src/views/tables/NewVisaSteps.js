/* eslint-disable react/style-prop-object */
/* eslint-disable no-loop-func */
import React, { Component } from 'react'
import $ from 'jquery'
import { Row, Col, Card, Table } from 'react-bootstrap';
import jQuery from 'jquery'
import './Steps.css'
import './visa.scss'
import PhotoUpload from './PhotoUpload';
export default class App extends Component {
  jQuerycode = () => {
  
  }
  componentDidMount(){
    this.jQuerycode()
    jQuery(document).ready(function() {
	// click on next button
	jQuery('.form-wizard-next-btn').click(function() {
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		var next = jQuery(this);
		var nextWizardStep = true;
		parentFieldset.find('.wizard-required').each(function(){
			var thisValue = jQuery(this).val();

			if( thisValue == "") {
				jQuery(this).siblings(".wizard-form-error").slideDown();
				nextWizardStep = false;
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
		if( nextWizardStep) {
			next.parents('.wizard-fieldset').removeClass("show","400");
			currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
			next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
			jQuery(document).find('.wizard-fieldset').each(function(){
				if(jQuery(this).hasClass('show')){
					var formAtrr = jQuery(this).attr('data-tab-content');
					jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
						if(jQuery(this).attr('data-attr') == formAtrr){
							jQuery(this).addClass('active');
							var innerWidth = jQuery(this).innerWidth();
							var position = jQuery(this).position();
							jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
						}else{
							jQuery(this).removeClass('active');
						}
					});
				}
			});
		}
	});
	//click on previous button
	jQuery('.form-wizard-previous-btn').click(function() {
		var counter = parseInt(jQuery(".wizard-counter").text());;
		var prev =jQuery(this);
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		prev.parents('.wizard-fieldset').removeClass("show","400");
		prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
		currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
		jQuery(document).find('.wizard-fieldset').each(function(){
			if(jQuery(this).hasClass('show')){
				var formAtrr = jQuery(this).attr('data-tab-content');
				jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
					if(jQuery(this).attr('data-attr') == formAtrr){
						jQuery(this).addClass('active');
						var innerWidth = jQuery(this).innerWidth();
						var position = jQuery(this).position();
						jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
					}else{
						jQuery(this).removeClass('active');
					}
				});
			}
		});
	});
	//click on form submit button
	jQuery(document).on("click",".form-wizard .form-wizard-submit" , function(){
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		parentFieldset.find('.wizard-required').each(function() {
			var thisValue = jQuery(this).val();
			if( thisValue == "" ) {
				jQuery(this).siblings(".wizard-form-error").slideDown();
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
	});
	// focus on input field check empty or not
	jQuery(".form-control").on('focus', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().addClass("focus-input");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
		}
	}).on('blur', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().removeClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideDown("3000");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideUp("3000");
		}
	});
});

  }
  render() {
    return (
      <div>
<section class="wizard-section">
		
		
			<div class="col-12">
				<div class="form-wizard">
					<form action="" method="post" role="form">
						<div class="form-wizard-header">
							<p>Fill all form field to go next step</p>
							<ul class="list-unstyled form-wizard-steps clearfix">
								<li class="active"><span>1</span></li>
								<li><span>2</span></li>
								<li><span>3</span></li>
								<li><span>4</span></li>
							</ul>
						</div>
						<fieldset class="wizard-fieldset show">
							<h5>Visa Information</h5>
							<div class="form-group">
							<div class="row">
							
							
							</div>
							<div class="row">
							
								<div class="col-lg-4 col-md-4 col-sm-4">
									<div class="form-group">
										<select class="form-control " id="at">
											<option value="">Aplication Type</option>
											<option value="">Family</option>
											<option value="">Individual</option>
											<option value="">Business</option>
										</select>
                                                  
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-4">
									<div class="form-group">
										<select class="form-control " id="vt">
											<option value="">Visa Type</option>
											<option value="">14-days </option>
											<option value="">30-days</option>
                                                       <option value="">90-days</option>
										</select>
                                                 
									</div>
								</div>
								<div class="col-lg-4 col-md-4 col-sm-4">
									<div class="form-group">
										<select class="form-control " id="ent">
											<option value="">Entry</option>
											<option value="">2019</option>
											<option value="">2020</option>
											<option value="">2021</option>
											<option value="">2022</option>
											
										</select>
                                                
									</div>
								</div>
							</div>
							</div>
                         
                                 
						
							{/* <div class="form-group">
								Gender
								<div class="wizard-form-radio">
									<input name="radio-name" id="radio1" type="radio"/>
									<label for="radio1">Male</label>
								</div>
								<div class="wizard-form-radio">
									<input name="radio-name" id="radio2" type="radio"/>
									<label for="radio2">Female</label>
								</div>
							</div> */}
			                     {/* <PhotoUpload/> */}
                                    <PhotoUpload/>
							<div class="form-group clearfix">
                                   <small>All field are required</small>   
								<a href="javascript:;" class="form-wizard-next-btn float-right">Next</a>
							</div>
						</fieldset>	
						<fieldset class="wizard-fieldset">
							<h5>Personal Information</h5>
                                   <div class="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
								<input type="text" class="form-control wizard-required" id="date"/>
								<label for="date" class="wizard-form-text-label">First Name*</label>
								<div class="wizard-form-error"></div>
							</div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
								<input type="text" class="form-control wizard-required" id="date"/>
								<label for="date" class="wizard-form-text-label">Last Name*</label>
								<div class="wizard-form-error"></div>
							</div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
								<input type="email" class="form-control wizard-required" id="date"/>
								<label for="date" class="wizard-form-text-label">Email*</label>
								<div class="wizard-form-error"></div>
							</div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
								<input type="email" class="form-control wizard-required" id="date"/>
								<label for="date" class="wizard-form-text-label">Phone Number*</label>
								<div class="wizard-form-error"></div>
							</div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
								<input type="email" class="form-control wizard-required" id="date"/>
								<label for="date" class="wizard-form-text-label">Passport Number*</label>
							</div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
								<input type="email" class="form-control wizard-required" id="date"/>
								<label for="date" class="wizard-form-text-label">Street*</label>
							</div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
								<input type="email" class="form-control wizard-required" id="date"/>
								<label for="date" class="wizard-form-text-label">Country*</label>
							</div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div class="form-group">
								<input type="email" class="form-control wizard-required" id="date"/>
								<label for="date" class="wizard-form-text-label">Occupation*</label>
							</div>
                                        </div>
                                   </div>
						
							{/* <div class="form-group">
								<input type="password" class="form-control wizard-required" id="pwd"/>
								<label for="pwd" class="wizard-form-text-label">Password*</label>
								<div class="wizard-form-error"></div>
								<span class="wizard-password-eye"><i class="far fa-eye"></i></span>
							</div> */}
						
							<div class="form-group clearfix">
								<a href="javascript:;" class="form-wizard-previous-btn float-left">Previous</a>
								<a href="javascript:;" class="form-wizard-next-btn float-right">Next</a>
							</div>
						</fieldset>	
						<fieldset class="wizard-fieldset">
                              <h5>Journey Information</h5>
                                   <div className="row">
                                   <div class="col-lg-4 col-md-4 col-sm-4">
                                   <div class="form-group">
                                   <label for="disabledSelect" class="form-label">Departure</label>
								<input type="date" class="form-control wizard-required" id="lname"/>
								
								<div class="wizard-form-error"></div>
							</div>
                                   </div>
                                   <div class="col-lg-4 col-md-4 col-sm-4">
                                   <div class="form-group">
                                   <label for="disabledSelect" class="form-label">Arrival</label>
								<input type="date" class="form-control wizard-required" placeholder="cuhcuh" id="zcode" onfocus="(this.type='date')" onblur="(this.type='text')"/>
       
								
								<div class="wizard-form-error"></div>
							</div>
                                   </div>
                                   </div>
                              
							
							<div class="form-group clearfix">
								<a href="javascript:;" class="form-wizard-previous-btn float-left">Previous</a>
								<a href="javascript:;" class="form-wizard-next-btn float-right">Next</a>
							</div>
						</fieldset>	
						<fieldset class="wizard-fieldset">
							<h5 className="text-center">Comfirmation</h5>
						<p className="text-center"> You are Going to send the previous details that you have given. <br/>
                              ake sure that they are all correct, Otherwise Click on the Previous button to edit.
                              </p>
 
             
							
						
							
							<div class="form-group clearfix">
								<a href="javascript:;" class="form-wizard-previous-btn float-left">Previous</a>
								<a href="javascript:;" class="form-wizard-submit float-right">Submit</a>
							</div>
						</fieldset>	
					</form>
				</div>
			</div>
		
	</section>
      </div>
    )
  }
}
