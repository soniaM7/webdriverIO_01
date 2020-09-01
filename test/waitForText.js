beforeEach(function() {
	browser.url('/Accordion/index.html');
})

describe('Verify the correct text is appear on the Accordion page', function(){
	it('Verify loading complete text is visible after a set duration of time', function(done){
		this.timeout(20000);
		elem = $('#hidden-text')
		console.log("Before the timeout text is: " + elem.getText());
		//elem.waitForText(7000);

		while(elem.getText() != 'LOADING COMPLETE.'){
			browser.pause(1000)
		}

		console.log("After the timeout text is: " + elem.getText())
	});
});