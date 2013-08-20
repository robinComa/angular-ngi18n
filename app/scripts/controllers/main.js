'use strict';

angular.module('angularNgi18nApp')
  .controller('MainCtrl', function ($scope, $i18n) {

        setTimeout(function(){
            $scope.$apply(function(){
                $scope.currentLang = $i18n.getLanguage();
            });
        }, 1000);

        $scope.changeLanguage = function(){
            $i18n.changeLanguage(this.currentLang);
        };

        $scope.submitForm = function(){
            $scope.word = $i18n.get(this.key);
        };

  });
