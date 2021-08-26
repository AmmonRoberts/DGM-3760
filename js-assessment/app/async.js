exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    let response = await fetch(value)
      .then(() => {
        return response;
      }
      )
    // Or something
  },

  manipulateRemoteData: function (url) {

  }
};
