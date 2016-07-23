var assert = require('assert');
var qr = require('../');

test('basic', function() {
    var qrcode = qr('foo');
    assert.equal(qrcode.modules.length, 21);
});

test('binary', function() {
    // 256 bytes
    var hex = '80f6182109c4619b30c12a98c7a4b28b8d3de462c3229fd578c3419de077687b98f9de3d25b834ff586215f9f659901944fac939e5b1c914040d5efaa3471a78c7bebffd4443ab27790ece7b9bd2adfd46e172e1aef67627600c2385243eca54b8ab90c1b0f2e18e644b844f1e71349b38822d2cc1e6e828efba248f70900973cd1cb5b6032ede759ee9c9e99800f91fd95775fa01e8c3119f793ff4b84e000c6d53033211dcd5a26ecffeaeb7581259c951f121c83711bc8bc8a982b5c011fdce5390d7d2440048d405734e5f06c467af1170dbb051cc46037bd83a4da652f1dede815825af68d3b4d8f7e8075605e88664aac49607335e68bf66b34435c830'
    var qrcodeStr = qr(new Buffer(hex, 'hex'));
    var qrcodeBuffer = qr(hex);
    assert.equal(qrcodeStr.modules.length, 85);
    assert.equal(qrcodeBuffer.modules.length, 117);
});
