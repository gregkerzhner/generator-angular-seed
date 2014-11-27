angular.module('<%=appName%>.foo', [

])
.config(function ($locationProvider, $httpProvider) {

})

.controller('<%= camelCaseName %>Controller', function($scope) {
  $scope.foo;
  $scope.fooBar = function(){
    $scope.foo = 'bar';
  }
})  