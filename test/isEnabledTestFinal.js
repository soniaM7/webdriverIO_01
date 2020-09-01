beforeEach(function(){
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html")
})
browser.setViewportSize({
  width:1200,
  height:800
})

browser.pause(2000)

describe('Test Enabled Dropdown Menus, Checkboxes & Radio Buttons', function() {
  
  it('Dropdown item orange is disabled therefore should return false', function(done) {
    var enabled = browser.isEnabled('//select/option[@value="orange"]');
    console.log(enabled)
    expect(enabled).to.be.false;
  });
  
  it('Dropdown item grape is enabled therefore should return true', function(done) {
    
    var enabled = browser.isEnabled('//select/option[@value="grape"]');
    console.log(enabled)
    expect(enabled).to.be.true;
  });
  
  it('Option2 is enabled therefore should return true', function(done) {
    var enabled = browser.isEnabled('input[value="option-2"]');
    console.log(enabled)
    expect(enabled).to.be.true;
  });
  
  it('Radio button pumpkin is enabled therefore should be true', function(done) {
    var enabled = browser.isEnabled('//div/form/input[@value="pumpkin"]');
    console.log(enabled)
    expect(enabled , "pumkin is").to.be.true;
    
  });
  
  it('Radio button cabbage is disabled therefore should be false', function(done) {
    var enabled = browser.isEnabled('//div/form/input[@value="cabbage"]');
    console.log(enabled)
    expect(enabled).to.equal(false);
  });
});