var mode = require('./mode');

function QrNumber(data) {
  this.mode = mode.MODE_NUMBER;
  this.data = data;
}

QrNumber.prototype = {
  getLength(buffer) {
    return this.data.length;
  },

  write(buffer) {
    var data = this.data;

    let i = 0;

    while (i + 2 < data.length) {
      buffer.put(this.strToNum(data.substring(i, i + 3)), 10);
      i += 3;
    }

    if (i < data.length) {
      if (data.length - i === 1) {
        buffer.put(this.strToNum(data.substring(i, i + 1)), 4);
      } else if (data.length - i === 2) {
        buffer.put(this.strToNum(data.substring(i, i + 2)), 7);
      }
    }
  },

  strToNum(s) {
    let num = 0;
    for (let i = 0; i < s.length; i += 1) {
      num = num * 10 + this.chatToNum(s.charAt(i));
    }
    return num;
  },

  chatToNum(c) {
    if (c >= '0' && c <= '9') {
      return c.charCodeAt(0) - '0'.charCodeAt(0);
    }
  }
};

module.exports = QrNumber;
