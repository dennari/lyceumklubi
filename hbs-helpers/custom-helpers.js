(function() {
  module.exports.register = function(Handlebars, options, params) {

    var assembleOpts = options || {};

    /**
     * Helper name
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    Handlebars.registerHelper('tr', function(key, options) {
      
      //params.grunt.log.writeln(JSON.stringify(,null,2));
    // taken from https://github.com/assemble/handlebars-helpers/blob/master/lib/helpers/helpers-i18n.js
      var language = void 0;
      if (typeof key !== "string") {
        throw "Key must be of type 'string'";
      }
      language = (typeof options.hash.language === "string" ? options.hash.language : params.assemble.options.language);
      if (typeof language === "undefined") {
        throw "The 'language' parameter is not defined";
      }
      var arr = params.assemble.options.data[language];
      if (typeof arr === "undefined") {
        throw "No strings found for language '" + language + "'";
      }
      if (typeof arr[key] === "undefined") {
        throw "No string for key '" + key + "' for language '" + language + "'";
      }
      var tr = arr[key];
      if(options.fn)
        return options.fn({translated: tr});
      
      return tr;      

    });

    
  

    /**
     * Helper name
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    Handlebars.registerHelper('rev', function(key, options) {
      if (typeof params.assemble.options.distdir === "undefined") {
        throw "No distdir defined";
      }
      var pref = new RegExp("^"+params.assemble.options.distdir.replace(/\/$/,'')+"/");
      var o = params.grunt.filerev;
      //params.grunt.log.writeln
      if(o && o.summary) {
         
        for(var k in o.summary) {
            if(key == k.replace(pref,''))
                return o.summary[k].replace(pref,'');
        };
       
      }   

      return key;
    });


    Handlebars.registerHelper('mycompose', function(key, options) {
      
      var file = "app/pages/"+assembleOpts.language+"/"+key;
      //params.grunt.log.writeln(JSON.stringify({key: key, options: options, compose: assembleOpts.compose},null,2));
      var result = Handlebars.helpers.compose.call(this, key, options);
      params.grunt.log.writeln(JSON.stringify(result,null,2));
      return result;


    });



  };
}).call(this);
