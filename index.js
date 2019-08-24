var QRCode = require('./lib/QRCode');
var ErrorCorrectLevel = require('./lib/ErrorCorrectLevel');
var Mode = require('./lib/mode');

var qrcode = function(data, opt) {
	opt = opt || {};
  var level = isNaN(opt.errorCorrectLevel) ? ErrorCorrectLevel.H : opt.errorCorrectLevel;
  var qr = new QRCode(opt.typeNumber || -1, level);
  qr.addData(data, opt.mode || Mode.MODE_8BIT_BYTE);
	qr.make();

	return qr;
};

qrcode.ErrorCorrectLevel = ErrorCorrectLevel;

module.exports = qrcode;
