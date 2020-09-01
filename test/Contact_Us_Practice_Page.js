class ContactUsPractice_Page {
	get firstName() { return $('//form/input[@name="first_name"]');}
	get lastName() {return $('//form/input[@name="last_name"]');}
	get emailAddress() { return $('//form/input[@name="email"]');}
	get comments() { return $('//form/textarea[@name="message"]');}
	get submitButton() {return $('//div/input[@type="submit"]');}
	get SuccessfulSubmissionHeader() {return $('//div/h1[text() = "Thank You for your Message!"]');}
	get unSuccessfulSubmissionHeader() {return $('body');}
}

module.exports = new ContactUsPractice_Page();

