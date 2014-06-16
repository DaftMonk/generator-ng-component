/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');
var fs = require('fs');

describe('ng-component generator', function () {
  var gen;

  function generatorTest(generatorType, name, mockPrompt, callback) {
    var ngGenerator;
    var deps = [path.join('../..', generatorType)];
    ngGenerator = helpers.createGenerator('ng-component:' + generatorType, deps, [name]);

    helpers.mockPrompt(ngGenerator, mockPrompt);
    ngGenerator.run([], function () {
      callback();
    });
  }

  describe('with default configuration', function() {
    beforeEach(function (done) {
      helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
        if (err) {
          return done(err);
        }

        fs.writeFileSync(path.join(__dirname, 'temp', '.yo-rc.json'), fs.readFileSync('../fixtures/.yo-rc.default.json'));
        gen = helpers.createGenerator('ng-component:app', [
          '../../app'
        ]);
        done();
      }.bind(this));
    });

    describe('Route', function () {
      it('should generate a new route', function (done) {
        generatorTest('route', 'foo', { route: '/foo'}, function() {
          helpers.assertFile([
            path.join('app/components/foo', 'foo.html'),
            path.join('app/components/foo', 'foo.scss'),
            path.join('app/components/foo', 'foo.controller.js'),
            path.join('app/components/foo', 'foo.controller.spec.js'),
            path.join('app/components/foo', 'foo.js')
          ]);
          done();
        });
      });
    });

    describe('Directive', function () {
      it('should generate a new complex directive', function (done) {
        generatorTest('directive', 'foo', { complex: true }, function() {
          helpers.assertFile([
            path.join('app/components/foo', 'foo.html'),
            path.join('app/components/foo', 'foo.scss'),
            path.join('app/components/foo', 'foo.directive.js'),
            path.join('app/components/foo', 'foo.directive.js')
          ]);
          done();
        });
      });

      it('should generate a new simple directive', function (done) {
        generatorTest('directive', 'foo', { complex: false }, function() {
          helpers.assertFile([
            path.join('app/components/foo', 'foo.directive.js'),
            path.join('app/components/foo', 'foo.directive.spec.js')
          ]);
          helpers.assertNoFile([
            path.join('app/components/foo', 'foo.scss'),
            path.join('app/components/foo', 'foo.html')
          ]);
          done();
        });
      });
    });

    describe('Service', function () {
      it('should generate a new service', function (done) {
        generatorTest('service', 'foo', {}, function() {
          helpers.assertFile([
            path.join('app/components/foo', 'foo.service.js'),
            path.join('app/components/foo', 'foo.service.spec.js')
          ]);
          done();
        });
      });
    });

    describe('Factory', function () {
      it('should generate a new factory', function (done) {
        generatorTest('factory', 'foo', {}, function() {
          helpers.assertFile([
            path.join('app/components/foo', 'foo.service.js'),
            path.join('app/components/foo', 'foo.service.spec.js')
          ]);
          done();
        });
      });
    });

    describe('Filter', function () {
      it('should generate a new filter', function (done) {
        generatorTest('filter', 'foo', {}, function() {
          helpers.assertFile([
            path.join('app/components/foo', 'foo.filter.js'),
            path.join('app/components/foo', 'foo.filter.spec.js')
          ]);
          done();
        });
      });
    });
  });

  describe('with custom configuration', function() {
    beforeEach(function (done) {
      helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
        if (err) {
          return done(err);
        }

        fs.writeFileSync(path.join(__dirname, 'temp', '.yo-rc.json'), fs.readFileSync('../fixtures/.yo-rc.custom.json'));
        gen = helpers.createGenerator('ng-component:app', [
          '../../app'
        ]);
        done();
      }.bind(this));
    });

    describe('Route', function () {
      it('should generate a new route', function (done) {
        generatorTest('route', 'foo', { route: '/foo'}, function() {
          helpers.assertFile([
            path.join('client/app/foo', 'foo.html'),
            path.join('client/app/foo', 'foo.scss'),
            path.join('client/app/foo', 'foo.controller.js'),
            path.join('client/app/foo', 'foo.controller.spec.js'),
            path.join('client/app/foo', 'foo.js')
          ]);
          done();
        });
      });
    });

    describe('Directive', function () {
      it('should generate a new complex directive', function (done) {
        generatorTest('directive', 'foo', { complex: true }, function() {
          helpers.assertFile([
            path.join('client/app/foo', 'foo.html'),
            path.join('client/app/foo', 'foo.scss'),
            path.join('client/app/foo', 'foo.directive.js'),
            path.join('client/app/foo', 'foo.directive.js')
          ]);
          done();
        });
      });

      it('should generate a new simple directive', function (done) {
        generatorTest('directive', 'foo', { complex: false }, function() {
          helpers.assertFile([
            path.join('client/app/foo', 'foo.directive.js'),
            path.join('client/app/foo', 'foo.directive.spec.js')
          ]);
          helpers.assertNoFile([
            path.join('client/app/foo', 'foo.scss'),
            path.join('client/app/foo', 'foo.html')
          ]);
          done();
        });
      });
    });

    describe('Service', function () {
      it('should generate a new service', function (done) {
        generatorTest('service', 'foo', {}, function() {
          helpers.assertFile([
            path.join('client/app/foo', 'foo.service.js'),
            path.join('client/app/foo', 'foo.service.spec.js')
          ]);
          done();
        });
      });
    });

    describe('Factory', function () {
      it('should generate a new factory', function (done) {
        generatorTest('factory', 'foo', {}, function() {
          helpers.assertFile([
            path.join('client/app/foo', 'foo.service.js'),
            path.join('client/app/foo', 'foo.service.spec.js')
          ]);
          done();
        });
      });
    });

    describe('Filter', function () {
      it('should generate a new filter', function (done) {
        generatorTest('filter', 'foo', {}, function() {
          helpers.assertFile([
            path.join('client/app/foo', 'foo.filter.js'),
            path.join('client/app/foo', 'foo.filter.spec.js')
          ]);
          done();
        });
      });
    });
  });
});
