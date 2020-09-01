var ContactUs_Page = require("../pageObjects/ContactUsPhase3_Page.js");

beforeEach(function(){
		browser.url('/Contact-Us/contactus.html');
	})

describe('Testing of contactus page', function(){		
	it('Successful to submit the detail', function(){
		this.timeout(20000);
		ContactUs_Page.submitAllInformationViaContactUsForm('sonia', 'Miglani', 'sonia.miglani33@gmail.com', 'Testing for Successful submit')
	});
	it('Should not be able to Successful submission via contactus form as all fields are required', function(){
		this.timeout(20000);
		ContactUs_Page.setFirstName('Mayank')
		ContactUs_Page.setComments('Testing of contactus page')
		ContactUs_Page.clickSubmitButton()
		ContactUs_Page.confirmUnSuccessfullSubmission()
	});
	it('Should not be able to Successful submission via contactus form as all fields are required', function(){
		this.timeout(20000);
		ContactUs_Page.setFirstName('Mukta')
		ContactUs_Page.setLastName('Pahwa')
		ContactUs_Page.clickSubmitButton()
		ContactUs_Page.confirmUnSuccessfullSubmission()
	});
	it('Should not be able to Successful submission via contactus form as all fields are required', function(){
		this.timeout(20000);
		ContactUs_Page.setFirstName('Kanika')
		ContactUs_Page.setLastName('Girdhar')
		ContactUs_Page.setEmailAddress('girdhar.Kanika')
		ContactUs_Page.setComments('Incorrect email')
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnSuccessfullEmailSubmission()
	});
	});