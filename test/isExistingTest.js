beforeEach(function() {
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', function() {
  it('Button display is set to non display but still exists in html dom therefore should return true', function(done) {
    //not-displayed
    var isexisting = browser.isExisting('#not-displayed');
    console.log(isexisting);
    expect(isexisting).to.equal(true);
  });

  it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function(done) {
    //visibility-hidden
    var isexisting = browser.isExisting('#visibility-hidden');
    expect(isexisting).to.equal(true);
  });

  it('Button display is set to zero opacity but still exists in html dom therefore should return true', function(done) {
    //zero-opacity
      var isexisting = browser.isExisting("#zero-opacity");
      expect(isexisting).to.equal(true);
  });

  it('Header text is visible and exists in the html dom therefore should return true', function(done) {
    //h1
    var isexisting = browser.isExisting("h1");
    expect(isexisting).to.equal(true);
  });
  
  it('There is no such element with the id of #no-such-element within the html dom therefore should return false', function(done) {
    //no-such-element
    var isexisting = browser.isExisting("#no-such-element");
    expect(isexisting).to.equal(true);
  });
});



