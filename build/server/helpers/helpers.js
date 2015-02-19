// Generated by CoffeeScript 1.9.0
module.exports = {
  slugify: function(text) {
    return text.replace(/[^-a-zA-Z0-9,&\s]+/ig, '').replace(/-/gi, '_').replace(/\s/gi, '-');
  },
  makeDateStamp: function() {
    var date, day, month, year;
    date = new Date();
    year = date.getYear();
    month = date.getMonth();
    day = date.getDay();
    return date = year + "-" + month + "-" + day;
  }
};
