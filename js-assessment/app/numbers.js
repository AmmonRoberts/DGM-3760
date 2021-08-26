exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {

  },

  base10: function (str) {

  },

  convertToBinary: function (num) {

  },

  multiply: function (a, b) {
    return (a * 10 * b * 10) / 100;
    // I really don't love this and hope that there's a ore elegant way...
  }
};
