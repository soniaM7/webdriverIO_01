var request = require('sync-request');
browser.addCommand('submitDataViaContactUsForm',function(firstName,lastName,emailAddress,comments){
	if(firstName){
		browser.setValue('//form/input[@name="first_name"]' , firstName);
	}
	if(lastName){
		browser.setValue('//form/input[@name="last_name"]' , lastName);
	}
	if(emailAddress){
		browser.setValue('//form/input[@name="email"]' , emailAddress);
	}
	if(comments){
		browser.setValue('//form/textarea[@name="message"]' , comments);
	}
	browser.click('//div/input[@type="submit"]');
})

describe('Testing of contactus page', function(){
	var res = request('GET','http://jsonplaceholder.typicode.com/post/1/comments');
	var contactusDetails = JSON.parse(res.getBody().toString('utf8'))

	beforeEach(function(){
		browser.url('/Contact-Us/contactus.html');
	})

contactusDetails.forEach(function (contactDetail) {				
	it.only('Successful to submit the detail', function(){
		this.timeout(20000);
		//browser.setValue('//form/input[@name="first_name"]' , 'sonia');
		//browser.setValue('//form/input[@name="last_name"]' , lastName);
		//browser.setValue('//form/input[@name="email"]' , contactDetail.email);
		//browser.setValue('//form/textarea[@name="message"]' , contactDetail.body);
		//browser.debug();
		//browser.click('//div/input[@type="submit"]');

		browser.submitDataViaContactUsForm('Sonia','Miglani',contactDetail.email,contactDetail.body)

		browser.pause(2000);

		var isMessageExisted = browser.isExisting("//div/h1[text() = 'Thank You for your Message!']");
		expect(isMessageExisted, 'Successful submit message does not exist').to.be.true;

		var isMessageExisted = browser.isVisible("//div/h1[text() = 'Thank You for your Message!']");
		expect(isMessageExisted, 'Successful submit message does not exist').to.be.true;

		var text = browser.getText("//div/h1[text() = 'Thank You for your Message!']")
		//console.log(text);
		expect(text).to.equal('Thank You for your Message!')
	});
		
	});
	it('UnSuccessful to submit the detail', function(){
		browser.setValue('//form/input[@name="first_name"]' , 'sonia');
		browser.setValue('//form/input[@name="last_name"]' , 'Miglani');
		browser.setValue('//form/input[@name="email"]', '');
		browser.setValue('//form/textarea[@name="message"]' , 'I am testing selectors and sending them value');
		browser.click('//div/input[@type="submit"]');
		browser.pause(1000);

		var text = browser.getText('body');
		//console.log(text);
		expect(text).to.equal('Error: all fields are required\nError: Invalid email address');
		expect(text).to.include('Error: all fields are required');

		
	});
	it('UnSuccessful to submit the detail', function(){
		browser.setValue('//form/input[@name="first_name"]' , 'sonia');
		browser.setValue('//form/input[@name="last_name"]', '');
		browser.setValue('//form/input[@name="email"]' , 'sonia.miglani33@gmail.com');
		browser.setValue('//form/textarea[@name="message"]' , 'I am testing selectors and sending them value');
		browser.click('//div/input[@type="submit"]');
		browser.pause(1000);

		var isMessageExisted = browser.isVisible("//div/h1[text() = 'Thank You for your Message!']");
		expect(isMessageExisted, 'Successful submit message does not exist').to.be.false;

		var text = browser.getText('body');
		//console.log(text);
		expect(text).to.equal('Error: all fields are required');
	});

})