var assert = require('assert');
var qr = require('../');
var ErrorCorrectLevels = require('../lib/ErrorCorrectLevel')

test('basic', function() {
    var qrcode = qr('foo');
    assert.equal(qrcode.modules.length, 21);
});

test('specify correction level', function () {
    for (var name in ErrorCorrectLevels) {
      var level = ErrorCorrectLevels[name]
      var qrcode = qr('foo', { errorCorrectLevel: level })
      assert.equal(qrcode.errorCorrectLevel, level)
    }
});
