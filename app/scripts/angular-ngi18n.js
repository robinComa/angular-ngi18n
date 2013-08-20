angular.module('ngI18n', ['ngResource']).
/**
 * @ngdoc object
 * @name ngI18n.$i18n
 * @requires $resource
 *
 * @description
 * Provides internationalization to angularJS projects.
 *
 * @example
 <doc:example>
 <doc:source>
 <script>
 function ExampleController($i18n) {
                   var myTranslatedWordInEnglish = $i18n.get('my.key.in.i18n.file');
                   $i18n.changeLanguage('fr');
                   var myTranslatedWordInFrench = $i18n.get('my.key.in.i18n.file');
                }
 </script>
 </doc:source>
 </doc:example>
 */
    factory('$i18n', function($resource){

        var config = {
            files       : 'i18n/:lang.json',
            languages   : ['en', 'fr']
        };

        var language = (navigator.browserLanguage ? navigator.browserLanguage : navigator.language);

        var languageIsAllow = function(lang){
            for(var i in config.languages){
                if(config.languages[i] == lang){
                    return true;
                }
            }
            return false;
        };

        if(!languageIsAllow(language)){
            language = config.languages[0]; //First is the default language
        }

        var i18nResource = $resource(config.files, {lang:'@lang'});

        var dictionary;
        var getDictionary = function(lang){
            dictionary = i18nResource.get({lang : lang}, null, function(){
                language = lang;
            }, function(arg){
                console.error('The content file for "' + language + '" no exist in "' + config.files +'"!');
            });
        };
        getDictionary(language);

        return{
            get : function(input, args){
                if(!dictionary[input]){
                    return input;
                }
                var string = dictionary[input];
                for(var i in args){
                    string = string.replace(new RegExp('(\\{' + i + '\\})', "g"), args[i]);
                }
                return string;
            },
            getLanguage : function(){
                return language;
            },
            changeLanguage : function (lang) {
                if(languageIsAllow(lang)){
                    getDictionary(lang);
                }else{
                    console.error(lang + ' is not allow in the ngI18n module configuration!');
                }
            }
        };

    }).filter('i18n', ['$i18n', function($i18n) {
        return function (input, args) {
            return $i18n.get(input, args);
        };
    }]);