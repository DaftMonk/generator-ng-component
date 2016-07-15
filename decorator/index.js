'use strict';
var path = require('path');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.prompting = function askFor() {
  var self = this;
  var prompts = [{
    name: 'moduleName',
    message: 'What module name would you like to use?',
    default: self.scriptAppName,
    when: function() {return self.config.get('modulePrompt');}
  }, {
    name: 'dir',
    message: 'Where would you like to create this decorator?',
    default: self.config.get('serviceDirectory')
  }];

  return this.prompt(prompts).then(function (props) {
    self.scriptAppName = props.moduleName || self.scriptAppName;
    self.dir = path.join(props.dir, self.name);
  });
};

Generator.prototype.writing = function createFiles() {
  ngUtil.copyTemplates(this, 'decorator');
};
