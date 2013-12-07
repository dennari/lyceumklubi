(function() {
  module.exports.register = function(Handlebars, options) {

    /**
     * Helper name
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    Handlebars.registerHelper('tr', function(key, options) {
      
    // taken from https://github.com/assemble/handlebars-helpers/blob/master/lib/helpers/helpers-i18n.js
      var language = void 0;
      if (typeof key !== "string") {
        throw "Key must be of type 'string'";
      }
      language = (typeof options.hash.language === "string" ? options.hash.language : this.language);
      if (typeof language === "undefined") {
        throw "The 'language' parameter is not defined";
      }
      if (typeof this[language] === "undefined") {
        throw "No strings found for language '" + language + "'";
      }
      if (typeof this[language][key] === "undefined") {
        throw "No string for key '" + key + "' for language '" + language + "'";
      }
      var tr = this[language][key];
      if(options.fn)
        return options.fn({translated: tr});
      
      return tr;      

    });

  };
}).call(this);
