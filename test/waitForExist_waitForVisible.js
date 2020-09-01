beforeEach(function(){
	browser.url("/Ajax-Loader/index.html")
})
describe("Validate weather Click Me button is visible", function(){
	it("Validate weather Click Me button code is visible within the DOM",function(done){
		this.timeout(20000);
		var clickMeButton = '//p[text() ="CLICK ME!"]';
		browser.waitForExist(clickMeButton,1000,false);
	});

	it("Validate Click Me button appears once the Ajax-Loader load fully", function(done){
		this.timeout(20000);
		var clickMeButton = '//p[text() ="CLICK ME!"]';
		browser.waitForVisible(clickMeButton,8000,false);
	});
});