/* global describe, it*/
'use strict';
import assert from 'assert';

describe('ng-component generator', function() {
  it('can be imported without blowing up', function() {
    assert(require('../generators/app') !== undefined);
  });
});
