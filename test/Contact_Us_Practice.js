var Contact_Us = require("../pageObjects/ContactUsPractice_Page.js");

beforeEach(function(){
		browser.url('/Contact-Us/contactus.html')
	})

describe("Testing of POM on contactUs page", function(){
	it("Successfull submission",function(done){
		this.timeout(20000);
		browser.pause(2000);
		Contact_Us.setFirstName('sonia')
		Contact_Us.setLastName('Miglani')
		Contact_Us.setEmailAddress('sonia.miglani33@gmail.com')
		Contact_Us.setComments('Practice for POM')
		Contact_Us.submitButton();
		Contact_Us.confirmSuccessfulSubmission();
	});

	it("Test if firstName and lastName is given",function(done){
		this.timeout(20000);
		browser.pause(2000);
		Contact_Us.setFirstName('sonia')
		Contact_Us.setLastName('Miglani')
		Contact_Us.submitButton();
		Contact_Us.confirmUnSuccessfulSubmission();
	});


});