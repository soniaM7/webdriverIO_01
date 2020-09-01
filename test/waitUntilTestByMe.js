describe("Verify loading functionality is working fine", function(){
	browser.url("/Accordion/index.html");
	it("Verify correct message display after loading", function(done){
		this.timeout(20000)
		var text = browser.getText('#hidden-text');
		console.log(text);
		browser.waitUntil(function(){
			return browser.getText('#hidden-text') === "LOADING COMPLETE.";
		},12000, 'expected a new text');
	});
});

