'use strict';

describe('Controller: MainCtrl', function () {

    beforeEach(module('ngI18n'));



  // load the controller's module
  beforeEach(module('ngI18n'));

    var $httpBackend, resourceBundleEn, resourceBundleFr;
    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        resourceBundleEn= {
            "key.1"       : "KEY 1 en",
            "key.2"       : "KEY 2 en"
        };
        resourceBundleFr= {
            "key.1"       : "KEY 1 fr",
            "key.2"       : "KEY 2 fr"
        };
        $httpBackend.when("GET", 'i18n/en.json').respond(resourceBundleEn);
        $httpBackend.when("GET", 'i18n/fr.json').respond(resourceBundleFr);
    }));


  var i18n;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($i18n) {
      i18n = $i18n;
      i18n.changeLanguage('en');
  }));

    it('i18n get language', function () {
        expect(i18n.getLanguage()).toBe('en');
    });

  it('i18n get item', function () {
    expect(i18n.get('key.1')).toBe('KEY 1 en');
  });
});
