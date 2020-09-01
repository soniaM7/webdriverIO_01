var ContactUs_Page = require("../pageObjects/ContactUsPhase2_Page.js");

beforeEach(function(){
		browser.url('/Contact-Us/contactus.html');
	})

describe('Testing of contactus page', function(){
	
	function setFirstName(firstNam){
		return ContactUs_Page.firstName.setValue(firstNam)
	}

	function setLastName(lastName){
		return ContactUs_Page.lastName.setValue(lastName)
	}

	function setEmailAddress(emailAddress){
		return ContactUs_Page.emailAddress.setValue(emailAddress)
	}

	function setComments(comments){
		return ContactUs_Page.comments.setValue(comments)
	}

	function clickSubmitButton(){
		return ContactUs_Page.submitButton.click()
	}

	function confirmSuccessfulSubmission(){
		var validateSubmissonHeader = browser.waitUntil(function(){
			return ContactUs_Page.SuccessfulSubmissionHeader.getText() == 'Thank You for your Message!'
		},1000);
		expect(validateSubmissonHeader,"Successful submission message does not exist").to.be.true;
	}

	function confirmUnSuccessfullSubmission(){
		var validateUnsuccessfulSubmissionHeader = browser.waitUntil(function(){

			return ContactUs_Page.unSuccessfulSubmissionHeader.getText() == 'Error: all fields are required\nError: Invalid email address' 
		},1000);
		expect (ContactUs_Page.unSuccessfulSubmissionHeader.getText()).to.include('Error: all fields are required')
	}

	function confirmUnSuccessfullEmailSubmission (){
		var validateUnsuccessfulSubmissionHeader = browser.waitUntil(function(){
			return ContactUs_Page.unSuccessfulSubmissionHeader.getText() == 'Error: Invalid email address'
		},2000);
		expect(validateUnsuccessfulSubmissionHeader).to.be.true;
	}
		
	it.only('Successful to submit the detail', function(){
		this.timeout(20000);
		browser.pause(2000);
		setFirstName('sonia')
		setLastName('Miglani')
		setEmailAddress('sonia.miglani33@gmail.com')
		setComments('Testing for Successful submit')
		clickSubmitButton();
		confirmSuccessfulSubmission()
	});


	it('Should not be able to Successful submission via contactus form as all fields are required', function(){
		this.timeout(20000);
		setFirstName('Mayank')
		setComments('Testing of contactus page')
		clickSubmitButton()
		confirmUnSuccessfullSubmission()
		
	});

	it('Should not be able to Successful submission via contactus form as all fields are required', function(){
		this.timeout(20000);
		setFirstName('Mukta')
		setLastName('Pahwa')
		clickSubmitButton()
		confirmUnSuccessfullSubmission()
	});

	it('Should not be able to Successful submission via contactus form as all fields are required', function(){
		this.timeout(20000);
		setFirstName('Kanika')
		setLastName('Girdhar')
		setEmailAddress('girdhar.Kanika')
		setComments('Incorrect email')
		clickSubmitButton();
		confirmUnSuccessfullEmailSubmission()
	});

	});