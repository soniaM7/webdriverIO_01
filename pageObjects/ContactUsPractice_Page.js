class ContactUsPractice_Page {
	get firstName() { return $('//form/input[@name="first_name"]');}
	get lastName() {return $('//form/input[@name="last_name"]');}
	get emailAddress() { return $('//form/input[@name="email"]');}
	get comments() { return $('//form/textarea[@name="message"]');}
	get submitButton_icon() {return $('//div/input[@type="submit"]');}
	//get SuccessfulSubmissionHeader() {return $('//div/h1[text() = "Thank You for your Message!"]');}
	//get unSuccessfulSubmissionHeader() {return $('body');}

	setFirstName(firstName){
		return this.firstName.setValue(firstName);
	}
	setLastName(lastName) {
		return this.lastName.setValue(lastName);
	}
	setEmailAddress(emailAddress) {
		return this.emailAddress.setValue(emailAddress);
	}
	setComments(comments) {
		return this.comments.setValue(comments);
	}
	submitButton() {
		return this.submitButton_icon.click();
	}
	confirmSuccessfulSubmission(){
		var SuccessfulSubmissionHeader = '//div/h1[text() = "Thank You for your Message!"]'
		var text = browser.waitUntil(function(){
			return browser.getText(SuccessfulSubmissionHeader) == "Thank You for your Message!"

		},2000);
		expect (text).to.be.true;
	}
	confirmUnSuccessfulSubmission(){
		var unSuccessfulSubmissionHeader = 'body'
		var text = browser.waitUntil(function(){
			//return this.unSuccessfulSubmissionHeader.getText() == "Error: all fields are required\nError: Invalid email address"
			return browser.getText(unSuccessfulSubmissionHeader) == "Error: all fields are required\nError: Invalid email address"
		},2000);
		expect (browser.getText(unSuccessfulSubmissionHeader)).to.include("Error: all fields are required");
	}
}
module.exports = new ContactUsPractice_Page();
