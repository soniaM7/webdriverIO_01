var PracticeOne_Page = require('../pageObjects/PracticeOne_Page');
describe('Verify Contact-us page functionality',function(done){
	beforeEach(function(done){
		browser.url("/Contact-Us/contactus.html")
	})
	it('Verify functionality of successfulSubmission', function(){
		this.timeout(20000);
		PracticeOne_Page.submitAllInformationViaContactUsForm('sonia','Miglani','sonia.miglani33@gmail.com','October 1st practice')
	})
	it.only('Verify functionality of unSuccessfulSubmission',function(){
		PracticeOne_Page.setFirstName('Mayank')
		PracticeOne_Page.setLastName('Arora')
		PracticeOne_Page.setComments('October 1st practice')
		PracticeOne_Page.submitButton()
		PracticeOne_Page.confirmUnSuccessfulSubmission()
	})
})