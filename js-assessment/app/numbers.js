exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    // return ((1 << bit) & num) >>> bit;
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  convertToBinary: function (num) {
    return (num >>> 0).toString(2);
    // I am having the worst time with the whole leading 0s thing. I feel like just squishing 0s onto the front of the string is way too sloppy...
  },

  multiply: function (a, b) {
    return (a * 10 * b * 10) / 100;
    // I really don't love this and hope that there's a more elegant way...
  }
};
