describe('test radio button size', function(){
	beforeEach(function(){
		browser.url('/Dropdown-Checkboxes-RadioButtons/index.html')
	})
	it('Should be able to focus on the radio button elements',function(done){
		this.timeout(20000);
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.pause(2000)
		browser.click('//div/label[text()="Option 1"]')
		//browser.click('div#checkboxes > label:nth-of-type(1)')

		browser.pause(2000);
		var checkboxButtonOne = browser.hasFocus('input[value="option-1"]');
		console.log("Checkbox button 1 hasFocus value is : " + checkboxButtonOne);
		var checkboxButtonOne = browser.isSelected('input[value="option-1"]');
		console.log("Checkbox button 1 isSelected value is : " + checkboxButtonOne);
		

		//expect(checkboxButtonOne, "The Checkbox(one) Should have focus !") .to.be.true;
		var checkboxButtonTwo = browser.hasFocus('//div/label[text()="Option 3"]');
		console.log("Checkbox button Two has a value : " + checkboxButtonTwo)

	})
	


});