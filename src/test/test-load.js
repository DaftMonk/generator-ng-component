/*global describe, beforeEach, it*/
'use strict';
import assert from 'assert';

describe('ng-component generator', function() {
  it('can be imported without blowing up', function() {
    var app = require('../generators/app');
    assert(app !== undefined);
  });
});
