browser.addCommand("isVideopaused",function(){
	var ispaused = browser.execute(function(){

		console.log("Muted video is set by default")
		var video = document.getElementById('video1');
		return video.paused;
	})
	return ispaused.value;
})

describe("Video Test",function(){
	this.timeout(20000)
	browser.url('https://www.w3schools.com/html/html5_video.asp')
	it("Validate video is pause when accessing the page",function(){
		browser.pause(2000);
		var ispaused = browser.isVideopaused();
		expect(ispaused).to.be.true;

	})

	it("Altering the width of the video",function(){
		this.timeout(20000)
		browser.execute(function(){
			var video = document.getElementById("video1")
			video.style.width="300px"
		})
		browser.pause(2000);
	})


})