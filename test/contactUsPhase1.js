var request = require('sync-request');

beforeEach(function(){
		browser.url('/Contact-Us/contactus.html');
	})

describe('Testing of contactus page', function(){


	var res = request('GET','http://jsonplaceholder.typicode.com/post/1/comments');
	var contactusDetails = JSON.parse(res.getBody().toString('utf8'))
	
	var firstNameSelector = '//form/input[@name="first_name"]'
	var lastNameSelector = '//form/input[@name="last_name"]'
	var emailAddressSelector = '//form/input[@name="email"]'
	var commentsSeclector = '//form/textarea[@name="message"]'
	var SuccessfulSubmissionSelector = '//div/h1[text() = "Thank You for your Message!"]'
	var unSuccessfulSubmissionSelector = 'body'
	var submitButtonSelector = '//div/input[@type="submit"]'

	function setFirstName(firstName){
		return browser.setValue(firstNameSelector,firstName)
	}

	function setLastName(lastName){
		return browser.setValue(lastNameSelector,lastName)
	}

	function setEmailAddress(emailAddress){
		return browser.setValue(emailAddressSelector,emailAddress)
	}

	function setComments(comments){
		return browser.setValue(commentsSeclector,comments)
	}

	function clickSubmitButton(){
		return browser.click(submitButtonSelector)
	}

	function confirmSuccessfulSubmission(){
		var validateSubmissonHeader = browser.waitUntil(function(){
			return browser.getText(SuccessfulSubmissionSelector) == 'Thank You for your Message!'
		},1000);
		expect(validateSubmissonHeader,"Successful submission message does not exist").to.be.true;
	}

	function confirmUnSuccessfullSubmission(){
		var validateUnsuccessfulSubmissionHeader = browser.waitUntil(function(){

			return browser.getText(unSuccessfulSubmissionSelector) == 'Error: all fields are required\nError: Invalid email address' 
		},1000);
		expect (browser.getText(unSuccessfulSubmissionSelector)).to.include('Error: all fields are required')
	}

	function confirmUnSuccessfullEmailSubmission (){
		var validateUnsuccessfulSubmissionHeader = browser.waitUntil(function(){
			return browser.getText(unSuccessfulSubmissionSelector) == 'Error: Invalid email address'
		},2000);
		expect(validateUnsuccessfulSubmissionHeader).to.be.true;
	}


	
contactusDetails.forEach(function (contactDetail) {				
	it('Successful to submit the detail', function(){
		this.timeout(20000);
		setFirstName('sonia')
		setLastName('Miglani')
		setEmailAddress(contactDetail.email)
		setComments(contactDetail.body)
		clickSubmitButton();
		confirmSuccessfulSubmission()
	});
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

})