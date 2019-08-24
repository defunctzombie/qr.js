var assert = require('assert');
var qr = require('../');
var ErrorCorrectLevels = require('../lib/ErrorCorrectLevel')
var mode = require('../lib/mode');

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


test('detect mode for data', function() {
  var testdata = '1231231232';
  var qrcode = qr(testdata);
  assert.equal(qrcode.detectMode(testdata), mode.MODE_NUMBER);

  assert.equal(qrcode.dataList[0].mode, mode.MODE_NUMBER);

  assert.equal(qrcode.detectMode('12312dsafsd'), null);
});
