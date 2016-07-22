

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var myStepDefinitionsWrapper = function () {


  'use strict';
  var page;

  console.log('Ooga Booga!');

  this.Given(/^some thing$/, function (callback) {

    browser.get('http://localhost:3000/#/');
    page = require('./footer.po.js');

    callback();
  });

  this.When(/^some other thing$/, function (callback) {
    callback();
  });

  this.Then(/^a differen thing$/, function (myText, callback) {
    //
    // expect(myText).to.equal("Copyright 2016 WoJ");
    //
    //
    // (2 + 2).should.equal(4);
    // (myText).should.equal('Copyright 2016 WoJ');

    page.textContainer.getText().then(function(value) {
      // expect(value).to.eventually.equal('hello there, sir');

      console.log('$$$$$$$$$$$ ' + value)
    });


    // expect().to.eventually.equal(myText);

    // expect(page.textContainer.getAttribute('value')).to.eventually.equal(myText);

      // .and.notify(callback);


    callback();
  });

};
module.exports = myStepDefinitionsWrapper;
