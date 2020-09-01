describe('Test the webdriveruniversity home page', function(){
	it('Output the height of the homepage carousel' , function(){
		//browser.setViewportSize({
		//	width: 1200,
		//	height: 800
		//})
		browser.url('./');
		browser.pause(2000);
		//var carouselCssProperty = browser.getCssProperty('#udemy-promo-thumbnail','height')
		//console.log(carouselCssProperty);
		const elem = $('#udemy-promo-thumbnail')
    	const height = elem.getCssProperty('height')
    	console.log(height)

	});


});