"use strict";

var expect = require('expect.js'),
    index = require('../index.js');

describe('index', function() {
    it('can require sub parts', function() {
        var r = index('ramda', 'src', ['zipObj.js', 'min.js']);
        expect(Object.getOwnPropertyNames(r)).to.eql(['zipObj', 'min']);
        expect(r.zipObj(['a'], ['1'])).to.eql({a: 1});
        expect(r.min([3, 1, 5, 3])).to.equal(1);
    });

    it('can strip extensions', function() {
        expect([
            index.stripExtensions('a'),
            index.stripExtensions('a.js'),
            index.stripExtensions('a.js.jsx')
        ]).to.eql(['a', 'a', 'a']);
    });
});
