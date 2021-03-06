exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    let result = 0;
    arr.forEach(element => {
      result += element;
    });
    return result;
  },

  remove: function (arr, item) {
    arr = arr.filter(element => {
      return (element !== item)
    });
    return arr;
  },

  removeWithoutCopy: function (arr, item) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element == item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item)
    return arr;
  },

  truncate: function (arr) {
    arr.pop(arr.length - 1);
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    let count = 0;
    arr.forEach(element => {
      element == item ? count += 1 : count += 0;
    });
    return count;
  },

  duplicates: function (arr) {

    let newArray = arr.some((element, index) => {
      return arr.indexOf(element) !== index
    });
    return newArray;
  },

  square: function (arr) {
    return arr.map(element =>
      element ** 2
    )
  },

  findAllOccurrences: function (arr, target) {
    let newArr = [];
    let i = 0;
    arr.forEach(
      element => {
        if (element == target)
          newArr.push(i);
        i++;
      }
    );
    return newArr;
  }
};
