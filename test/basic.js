var assert = require('assert');
var qr = require('../');

test('basic', function() {
    var qrcode = qr('foo');
    assert.equal(qrcode.modules.length, 21);
});
