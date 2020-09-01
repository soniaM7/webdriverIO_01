class ContactUsPhase3_Page{

	get firstName() { return $('//form/input[@name="first_name"]');}
	get lastName() { return $('//form/input[@name="last_name"]');}
	get emailAddress() { return $('//form/input[@name="email"]');}
	get comments() { return $('//form/textarea[@name="message"]');}
	//get SuccessfulSubmissionHeader() { return $('//div/h1[text() = "Thank You for your Message!"]');}
	//get unSuccessfulSubmissionHeader() {return $('body');}
	get submitButton(){ return $('//div/input[@type="submit"]');}

	setFirstName(firstName){
		return this.firstName.setValue(firstName)
	}
	setLastName(lastName){
		return this.lastName.setValue(lastName)
	}
	setEmailAddress(emailAddress){
		return this.emailAddress.setValue(emailAddress)
	}
	setComments(comments){
		return this.comments.setValue(comments)
	}
	clickSubmitButton(){
		return this.submitButton.click()
	}
	submitAllInformationViaContactUsForm(firstName, lastName, emailAddress, comments){
		if(firstName){
			this.firstName.setValue(firstName)
		}
		if(lastName){
			this.lastName.setValue(lastName)
		}
		if(emailAddress){
			this.emailAddress.setValue(emailAddress)
		}
		if(comments){
			this.comments.setValue(comments)
		}
		this.submitButton.click();
		this.confirmSuccessfulSubmission();
	}
	confirmSuccessfulSubmission(){
		var SuccessfulSubmissionHeader = '//div/h1[text() = "Thank You for your Message!"]';
		var validateSubmissonHeader = browser.waitUntil(function(){
			return browser.getText(SuccessfulSubmissionHeader) == 'Thank You for your Message!'
		},2000);
		expect(validateSubmissonHeader,"Successful submission message does not exist").to.be.true;
	}
	confirmUnSuccessfullSubmission(){
		var unSuccessfulSubmissionHeader = 'body';
		var validateUnsuccessfulSubmissionHeader = browser.waitUntil(function(){
		return browser.getText(unSuccessfulSubmissionHeader) == 'Error: all fields are required\nError: Invalid email address' 
		},2000);
		expect (browser.getText(unSuccessfulSubmissionHeader)).to.include('Error: all fields are required')
	}
	confirmUnSuccessfullEmailSubmission (){
		var unSuccessfulSubmissionHeader = 'body';
		var validateUnsuccessfulSubmissionHeader = browser.waitUntil(function(){
			return browser.getText(unSuccessfulSubmissionHeader) == 'Error: Invalid email address'
		},2000);
		expect(validateUnsuccessfulSubmissionHeader).to.be.true;
	}
}
module.exports = new ContactUsPhase3_Page();