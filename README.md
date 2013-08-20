# angular-ngi18n

Provides internationalization to angularJS projects.
Requires $resource

    bower install angular-ngi18n

## Get Started

    &lt;script src=&quot;dist/angular-ngi18n.js&quot;&gt;&lt;/script&gt;
    ...
    angular.module('yourApp', ['ngI18n'])
    ...
    .controller('MainCtrl', function ($scope, $i18n) {


## Configuration

    (angular-ngi18n.js)
    var config = {
        files       : 'i18n/:lang.json',    //Ex : 'i18n/en.json'
        languages   : ['en', 'fr']          //config.languages[0] == default
    };

## Sample

    I am 26 years old

    <i>{{'how.old.are.you' | i18n:[26]}}</i>

## Sample

    This is the translation of 'key.in.i18n.file' key
    <i>{ {'key.in.i18n.file' | i18n} }</i>

    {
        ...
        "key.in.i18n.file" : "This is the translation of 'key.in.i18n.file' key",
        ...
    }

## Sample

    <form ng-submit="submitForm()">
        <div class="form-group">
            <label for="exampleSelect">{ {'choose.language' | i18n} } :</label>
            <select id="exampleSelect" ng-model="currentLang" ng-change="changeLanguage()">
                <option value="en" selected="selected">English</option>
                <option value="fr" selected="selected">Français</option>
            </select>
        </div>
    </form>
    ...
    $scope.currentLang = $i18n.getLanguage();

    $scope.changeLanguage = function(){
        $i18n.changeLanguage(this.currentLang);
    };
