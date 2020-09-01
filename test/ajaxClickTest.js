describe("Test the Ajex button is clickable once the Ajax loader complete loading",function(){
	it("Attempt to click the button asap", function(done){
		browser.url('/Ajax-Loader/index.html')
		browser.click('#button166');
	});

	it("Attempt to click the button after 7 sec", function(done){
		browser.url('/Ajax-Loader/index.html')
		this.timeout(20000);
		browser.pause(7000);
		browser.click('#button1')
		browser.pause(2000);
	});
});