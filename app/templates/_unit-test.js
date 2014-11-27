// ---SPECS-------------------------

describe('<%=appName%>', function () {
  var scope,
    controller;
  
  beforeEach(function () {
    module('<%=appName%>');
  });

  describe('<%= camelCaseName %>Controller', function () {
    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('<%= camelCaseName %>Controller', {
        '$scope': scope
      });
    }));
        
    it('sets the name', function () {
      scope.fooBar();
      expect(scope.foo).toBe('bar');
    });
  });
    
});
