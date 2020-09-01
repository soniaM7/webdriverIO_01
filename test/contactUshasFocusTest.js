describe('Test hasfocus on contact us page',function(){
	browser.url('/Contact-Us/contactus.html');

	it('While entering text textbox should returen true on hasfocus method', function(done){
		browser.setValue('//form/input[@name="first_name"]', 'sonia');
		console.log(browser.hasFocus('//form/input[@name="first_name"]'));

	})

})