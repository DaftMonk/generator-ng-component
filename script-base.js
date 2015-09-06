'use strict';
var util = require('util');
var path = require('path');
var lodash = require('lodash');
var s = require('underscore.string');
var yeoman = require('yeoman-generator');
var ngUtils = require('./util.js');

// extend lodash with underscore.string
lodash.mixin(s.exports());

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  this.lodash = lodash;

  try {
    this.appname = require(path.join(process.cwd(), 'bower.json')).name;
  } catch (e) {
    this.appname = path.basename(process.cwd());
  }
  this.appname = lodash.slugify(lodash.humanize(this.appname));
  this.scriptAppName = this.config.get('moduleName') || lodash.camelize(this.appname) + ngUtils.appName(this);

  this.cameledName = lodash.camelize(this.name);
  this.classedName = lodash.classify(this.name);

  this.hasFilter = function(filter) {
    return this.config.get('filters').indexOf(filter) !== -1;
  }.bind(this);

  // dynamic assertion statements
  this.expect = function() {
    return this.hasFilter('expect') ? 'expect(' : '';
  }.bind(this);
  this.to = function() {
    return this.hasFilter('expect') ? ').to' : '.should';
  }.bind(this);

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'app';
  }

  this.sourceRoot(path.join(__dirname, '/templates'));
};

util.inherits(Generator, yeoman.generators.NamedBase);
