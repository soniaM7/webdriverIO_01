describe("Validate message appears after each operation", function(){
	browser.url("/Contact-Us/contactus.html")
	it("Validate a message appears after sumbit a form", function(done){
		this.timeout(20000);
		//console.log(browser.waitForValue('//form/input[@name="first_name"]', 2000));
		browser.setValue("//form/input[@name='first_name']","sonia");
		browser.waitForValue('//form/input[@name="first_name"]', 2000)
		browser.setValue("//form/input[@name='last_name']", "miglani")
		browser.setValue("//form/input[@name='email']", "sonia.miglani33@gmail.com");
		browser.setValue("//textarea[@name='message']", "testing of waitForExist function")
		browser.click('//div/input[@value="SUBMIT"]')
		browser.pause(1000);
		var text = browser.getText('h1');
		console.log(text);
		var text_selector = "h1"
		browser.waitForExist(text_selector,1000,false);
		browser.waitForVisible(text_selector,5000,false);
	});


	it("Testing of execute funtion",function(){
		browser.execute(function(){
			var button = document.getElementsByClassName('contact_button')
			button[1].click();
			console.log("Submit button is clicked")
			
		})
		browser.pause(2000);
	})

	it.only("Testing for waitForValue",function(){

		var value = browser.waitForValue('//form/input[@name="first_name"]', 2000);
		console.log(value)
	})
});