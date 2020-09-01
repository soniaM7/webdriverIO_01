class ContactUsPhase2_Page{

	get firstName() { return $('//form/input[@name="first_name"]');}
	get lastName() { return $('//form/input[@name="last_name"]');}
	get emailAddress() { return $('//form/input[@name="email"]');}
	get comments() { return $('//form/textarea[@name="message"]');}
	get SuccessfulSubmissionHeader() { return $('//div/h1[text() = "Thank You for your Message!"]');}
	get unSuccessfulSubmissionHeader() {return $('body');}
	get submitButton(){ return $('//div/input[@type="submit"]');}
}

module.exports = new ContactUsPhase2_Page();