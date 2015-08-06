'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.askFor = function askFor() {
  var self = this;
  var done = this.async();
  var prompts = [
    {
      name: 'dir',
      message: 'Where would you like to create this config provider?',
      default: self.config.get('serviceDirectory')
    }
  ];

  this.prompt(prompts, function (props) {
    // No need for a separate folder for the component this.dir = path.join(props.dir, this.name);
    this.dir = props.dir;
    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
  ngUtil.copyTemplates(this, 'configprovider');
};
