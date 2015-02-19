// Generated by CoffeeScript 1.9.0
var americano;

americano = require('cozydb');

module.exports = {
  contact: {
    all: americano.defaultRequests.all,
    byName: function(doc) {
      var dp, _i, _len, _ref, _results;
      if ((doc.fn != null) && doc.fn.length > 0) {
        return emit(doc.fn, doc);
      } else if (doc.n != null) {
        return emit(doc.n.split(';').join(' ').trim(), doc);
      } else {
        _ref = doc.datapoints;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          dp = _ref[_i];
          if (dp.name === 'email') {
            _results.push(emit(dp.value, doc));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    }
  },
  config: {
    all: americano.defaultRequests.all
  },
  webdavaccount: {
    all: americano.defaultRequests.all
  }
};
