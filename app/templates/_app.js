angular.module('<%=appName%>', [
  <% if(uiRouterVersion) {%>
  'ui.router',
  <% } %>
  'ngCookies',
  'ngAnimate',
  '<%=appName%>.templates',
  '<%=appName%>.config',
  '<%=appName%>.foo'
])
.config(function ($locationProvider, $httpProvider) {

}) 
.run(function($timeout, $rootScope, $location){
  alert('Your angular app is initialized.  Happy hacking!')
})

