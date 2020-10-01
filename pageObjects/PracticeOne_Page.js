class PracticeOne_Page {
	get firstNameSelector() { return $('//input[@name="first_name"]');}
	get lastNameSelector() { return $('//input[@name="last_name"]');}
	get emailAddressSelector() { return $('//input[@name="email"]');}
	get commentsSelector() { return $('//textarea[@name="message"]');}
	get submitButtonSelector() { return $('//input[@type="submit"]');}

	submitAllInformationViaContactUsForm(firstName,lastName,email,comments){
		if(firstName){
			this.firstNameSelector.setValue(firstName)
		}
		if(lastName){
			this.lastNameSelector.setValue(lastName)
		}
		if(email){
			this.emailAddressSelector.setValue(email)
		}
		if(comments){
			this.commentsSelector.setValue(comments)
		}
		this.submitButtonSelector.click();
		this.confirmSuccessfulSubmission();
	}

	setFirstName(firstName){
		this.firstNameSelector.setValue(firstName)
	}
	setLastName(lastName){
		this.lastNameSelector.setValue(lastName)
	}
	setEmailAddress(email){
		this.emailAddressSelector.setValue(email)
	}
	setComments(comments){
		this.commentsSelector.setValue(comments)
	}
	submitButton(){
		this.submitButtonSelector.click()
	}
	confirmSuccessfulSubmission(){
		var successfulSubmissionSelector = 'h1';
		var successfulSubmissionValidation = browser.waitUntil(function(){
			return browser.getText(successfulSubmissionSelector) == 'Thank You for your Message!'
		},2000);
		expect(successfulSubmissionValidation).to.be.true;
	}
	confirmUnSuccessfulSubmission(){
		var unSuccessfulSubmissionSelector = 'body'
		var UnSuccessfulSubmissionValidation = browser.waitUntil(function(){
			return browser.getText(unSuccessfulSubmissionSelector) =='Error: all fields are required\nError: Invalid email address'
		},1000);
		expect(browser.getText(unSuccessfulSubmissionSelector)).to.include('Error: all fields are required')
	}

}

module.exports = new PracticeOne_Page();
