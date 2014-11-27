module.exports = {

  vendorJs: [
  <% if(jQueryVersion){%>
  'app/vendor/jquery/jquery.js',
  <% } %>
  'app/vendor/angular/angular.js',
  'app/vendor/angular-animate/angular-animate.js',
  'app/vendor/angular-cookies/angular-cookies.js',
  'app/vendor/angular-sanitize/angular-sanitize.js',
  <% if(underscoreVersion){%>
  'app/vendor/underscore/underscore.js',
  <% } %>
  <% if(uiRouterVersion){%>
  'app/vendor/angular-ui-router/release/angular-ui-router.js'
  <% } %>
  ],

  vendorStyles: [
    <% if(bootstrapVersion){%>
    'app/vendor/bootstrap/dist/css/bootstrap.css'
    <% } %>
  ],

  otherAssets: [
    './app/fonts/**/*.*',
    './app/images/**/*.*'   
  ]
}