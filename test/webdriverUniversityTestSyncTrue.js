// this is a sync code and change wdio file sync = true. heloo soediiokk
// const assert = require('assert');

describe("Verify webdriveruniversity links page are working fine", function(){
	it("check the contact us button open the contact-us page",function(done){
	browser.setViewportSize({
		width: 1200,
		height: 800
	})
	this.timeout(20000);
	browser.url('/')
	var title = browser.getTitle()
	console.log('Main page title is '  + title );
	expect(title).to.equal('WebDriverUniversity.com')
	//browser.debug();
	browser.click('#contact-us')

	var tabid = browser.getTabIds();
	console.log(tabid);
	browser.switchTab(tabid[1])
    var newPageTitle=browser.getTitle() // outputs: "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
    console.log("Contact-us page title is " + newPageTitle );
    expect(newPageTitle).to.equal('WebDriver | Contact Us')

    var url = browser.getUrl();
    expect(url).to.include('Contact-Us' , 'url Mismatch')
    browser.close();
	});

	it("check the login button open the login-portal page",function(done){
		 
	browser.setViewportSize({
		width: 1200,
		height: 800
	})
	this.timeout(20000);
	browser.url('/')
	var title=browser.getTitle()
	console.log('Title is ' + title);
	//expect(title).to.equal('WebDriverUniversity.com')
	title.should.equal('WebDriverUniversity.com');
	browser.click('#login-portal')

	var tabid = browser.getTabIds();
	console.log(tabid);
	browser.switchTab(tabid[1])
	var newPageTitle = browser.getTitle();
	console.log("Login page title is " + newPageTitle);
	expect(newPageTitle).to.equal('WebDriver | Login Portal')

	var url = browser.getUrl();
    expect(url).to.include('Login-Portal' , 'url Mismatch')
	browser.close();

	});
});