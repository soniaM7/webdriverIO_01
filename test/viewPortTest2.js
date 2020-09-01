describe("Test the viewport size of different tab", function(){
	beforeEach(function(){
		browser.url("");
	})
	it.only("Test the home window size",function(done){
		var size = browser.windowHandleSize();
		console.log("Home page width and height" + JSON.stringify(size));
		console.log("Home page width and height" + size['height']);
	})
	it("Test the viewport size after setting the portsize", function(){
		browser.click('//div/h1[starts-with(text(), "HIDDEN ELEMENT")]')
		var tabids = browser.getTabIds();
		//console.log(tabids)
		browser.switchTab(tabids[1]);
		var title = browser.getTitle();
		console.log(title)
		expect(title).to.equal("Hidden Elements");

		var size = browser.windowHandleSize('{CDwindow-1A6D053FB051BC0C9354D9599304BCC9}')
		 //var size = browser.windowHandleSize('{dc30381e-e2f3-9444-8bf3-12cc44e8372a}');
		console.log(size);
		//browser.switchTab(tabids[1])
		//browser.pause(2000);

		browser.close();
	});

});