describe("Testing the webdriver web page for enabled DOM", function() {
	
	beforeEach(function(){
		browser.url("/Dropdown-Checkboxes-RadioButtons/index.html")	
		console.log("count")
	}) 
	

	browser.setViewportSize({
		width: 1200,
		height: 800
	})
	
	//browser.pause(2000);

	it("Test the 1st bullot_button enabled status", function(done){

		this.timeout(20000);	
		
		var bullot_1 = browser.isEnabled('//div/form/input[@value="lettuce"]')
		console.log("Buttot_1 is :" + bullot_1)
		browser.click('//div/form/input[@value="lettuce"]');
		var hasFocus = browser.hasFocus('//div/form/input[@value="lettuce"]')
		console.log("Buttot_1 has focus is : " + hasFocus)
		var isSelected = browser.isSelected('//div/form/input[@value="lettuce"]')
		console.log("Buttot_1 is selected state is : " + isSelected);
		});

		
	it("Test the 2nd bullot_button enabled status", function(done){
		var bullot_2 = browser.isEnabled('//div/form/input[@value="cabbage"]')
		console.log("Buttot_2 is :" + bullot_2)
	})
		
	it("Test the 3rd bullot_button enabled status", function(done){
		var bullot_3 = browser.isEnabled('//div/form/input[@value="pumpkin"]')
		console.log("Buttot_3 is :" + bullot_3)
		
	});		
	
});