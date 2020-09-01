beforeEach(function(){
	browser.url("/Hidden-Elements/index.html")
})

describe("Test weather element is visible within the viewport", function(){
	it("Should resize the current viewport", function(done){
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.pause(2000)
		size = browser.windowHandleSize();
		console.log(size);
		});

	it("Should defect if element is visible", function(done){
		var isVisibleWithinViewport = browser.isVisibleWithinViewport('div[id="not-displayed"]');
		console.log(isVisibleWithinViewport);
		expect(isVisibleWithinViewport).to.be.false;

		var isVisibleWithinViewport = browser.isVisibleWithinViewport('div[id="visibility-hidden"]');
		console.log(isVisibleWithinViewport);
		expect(isVisibleWithinViewport).to.be.false;

		var isVisibleWithinViewport = browser.isVisibleWithinViewport('div[id="zero-opacity"]');
		console.log(isVisibleWithinViewport);
		expect(isVisibleWithinViewport).to.be.false;

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("h1");
		console.log(isVisibleWithinViewport);
		expect(isVisibleWithinViewport).to.be.true;

		var width = browser.getViewportSize('width')
    	console.log(width);

    	var height = browser.getViewportSize('height')
    	console.log(height);

	});
});