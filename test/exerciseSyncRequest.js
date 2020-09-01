var request = require("sync-request");

beforeEach(function(){
	browser.url("/Contact-Us/contactus.html");
})

describe("Testing with json File",function(){
	var res = request('Get','http://jsonplaceholder.typicode.com/post/1/comments');
	var contactusDetails = JSON.parse(res.getBody().toString('utf8'));

	var firstNameSelector = '//form/input[@name="first_name"]'
	var lastNameSelector = '//form/input[@name="last_name"]'
	var emailAddressSelector = '//form/input[@name="email"]'
	var commentsSeclector = '//form/textarea[@name="message"]'
	var SuccessfulSubmissionSelector = '//div/h1[text() = "Thank You for your Message!"]'
	var unSuccessfulSubmissionSelector = 'body'
	var submitButtonSelector = '//div/input[@type="submit"]'

	function firstName(firstName){
		return browser.setValue(firstNameSelector,firstName)
	}
	function lastName(lastName){
		return browser.setValue(lastNameSelector,lastName)
	}
	function emailAddress(email){
		return browser.setValue(emailAddressSelector,email)
	}
	function comments(comment){
		return browser.setValue(commentsSeclector,comment)
	}
	function submitButton(){
		return browser.click(submitButtonSelector)
	}
	function confirmSuccessfulSubmission(){
		var res = browser.waitUntil(function(){
			return browser.getText(SuccessfulSubmissionSelector) == 'Thank You for your Message!'
		},2000);
		expect(res).to.be.true;
	}

contactusDetails.forEach(function(contactUs){
	it("Without json file submit form ", function(done){
		this.timeout(20000);
		firstName('sonia')
		lastName('Miglani')
		emailAddress(contactUs.email)
		comments(contactUs.body)
		submitButton()
		confirmSuccessfulSubmission()
	})
})
})