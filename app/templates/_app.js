angular.module('<%=appName%>', [
  <% if(uiRouterVersion) {%>
  'ui.router',
  <% } %>
  'ngCookies',
  'ngAnimate',
  '<%=appName%>.templates',
  '<%=appName%>.config'
])
.config(function ($locationProvider, $httpProvider) {

}) 
.run(function($state, $timeout, $rootScope, $location){
  
})

