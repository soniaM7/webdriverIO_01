describe("Testing the webdriver web page for enabled DOM", function() {

	browser.url("")

	it("Test the bullot button enabled on the page", function(done){
		this.timeout(20000);	
		browser.setViewportSize({
			width: 1200,
			height: 800

		})
		browser.click('//div/h1[starts-with(text() , "DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)")]')
		browser.pause(2000)
		var tabid = browser.getTabIds();
		console.log(tabid);
		browser.switchTab(tabid[1])
		var title = browser.getTitle();
		console.log(title);


		var bullot_1 = browser.isEnabled('//div/form/input[@value="lettuce"]')
		console.log("Buttot_1 is :" + bullot_1)
		browser.click('//div/form/input[@value="lettuce"]');
		var hasFocus = browser.hasFocus('//div/form/input[@value="lettuce"]')
		console.log("Buttot_1 has focus is : " + hasFocus)
		var isSelected = browser.isSelected('//div/form/input[@value="lettuce"]')
		console.log("Buttot_1 is selected state is : " + isSelected);

		var bullot_2 = browser.isEnabled('//div/form/input[@value="cabbage"]')
		console.log("Buttot_2 is :" + bullot_2)

		var bullot_3 = browser.isEnabled('//div/form/input[@value="pumpkin"]')
		console.log("Buttot_3 is :" + bullot_3)
		browser.close();

	});
	
});