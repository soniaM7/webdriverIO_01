var webdriverio=require('webdriverio');
var options = {desiredCapabilities:{browserName: 'chrome'}};
var client = webdriverio.remote(options);

client
.init()
	.setViewportSize({
		width: 1200,
		height: 800
	})
	.url('http://webdriveruniversity.com/')
	.getTitle().then(function(title) {
		console.log('Title is ' + title);
	})
	.click('#login-portal')
	.pause(3000)
	//.getTitle().then(function(title1) {
		//console.log('Title is ' + title1);
	//})

.end();