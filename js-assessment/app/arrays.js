exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    let result = 0;
    arr.forEach(element => {
      result += element;
    });
    return result;
  },

  remove: function(arr, item) {
    arr = arr.filter(element => {
      return (element !== item)
    });
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element == item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item)
    return arr;
  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
