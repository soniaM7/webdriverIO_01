//this is a async code with promises. in wdio change sync=False
describe("Verify webdriveruniversity links page are working fine", function(){
	it("check the contact us button open the contact-us page",function(done){
		return browser
	.setViewportSize({
		width: 1200,
		height: 800
	})
	.url('http://webdriveruniversity.com/')
	.getTitle().then(function(title){
		console.log('Title is ' + title);
	})
	.click('#contact-us')
	.pause(2000)
	});

	it("check the login button open the login-portal page",function(done){
		return browser
	.setViewportSize({
		width: 1200,
		height: 800
	})
	.url('http://webdriveruniversity.com/')
	.getTitle().then(function(title) {
		console.log('Title is ' + title);
	})
	.click('#login-portal')
	.pause(2000)

	});
});