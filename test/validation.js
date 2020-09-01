
describe("Validate the websit",function(){
	it("title",function(done){
		this.timeout(30000);
		browser.url('/')
		var title = browser.getTitle()
		expect(title).to.equal('WebDriverUniversity.com');
		console.log('Title of the main page is ' + title);
		//browser.click('#contact-us')

		//var tabid = browser.getTabIds();
		//console.log(tabid);
		//browser.switchTab(tabid[1])
    	//var newPageTitle=browser.getTitle() // outputs: "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
    	//console.log("Contact-us page title is " + newPageTitle);
    	//expect(newPageTitle).to.equal('WebDriver | Contact Us');

    	var isexisting = browser.isExisting('//div/h1[text() = "BUTTON CLICKS" ]')
    	 console.log(isexisting);
		//browser.pause(2000);
		//var con_title=browser.getTitle()
		//console.log(con_title);
		//const elem = $('[name="contactme"]');
		//console.log(elem.getValue());
		
		});




		//browser.url("/")
		//var title = browser.getTitle();
		//console.log("title is " +title);
		//assert.equal(title, 'WebDriverUniversity.com');
		//browser.click('#contact-us')
		//console.log("break start");
	   // browser.pause(2000)
		//console.log("break over");
		//const elem = $('[name="contactme"]');
		//console.log("2");
    	//console.log(elem);
		
	//});
//

	});