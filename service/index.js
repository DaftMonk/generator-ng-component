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
  this.dir = path.join(this.config.get('serviceDirectory'), this.name);
};

Generator.prototype.createFiles = function createFiles() {
  ngUtil.copyTemplates(this, 'service');
};
