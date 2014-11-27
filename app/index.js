var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  promptUser: function() {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    var prompts = [{
        name: 'appName',
        message: 'What would you like to call your angular app (and base module)?',
        required: true
      },
      {
        name: 'angularVersion',
        message: 'Angular version?'
      },
      {
        name: 'uiRouterVersion',
        message: 'UI Router version? (Or just press enter if you don\'t want this library)'
      },
      {
        name: 'jQueryVersion',
        message: 'jQuery Version? (Or just press enter if you don\'t want this library)'
      },
      {
        name: 'bootstrapVersion',
        message: 'Bootstrap version? (Or just press enter if you don\'t want this library)'
      },
      {
        name: 'underscoreVersion',
        message: 'Underscore Version? (Or just press enter if you don\'t want this library)'
      }

    ];

    this.prompt(prompts, function (props) {
      this.appName= props.appName;
      this.angularVersion = props.angularVersion;
      this.jQueryVersion = props.jQueryVersion; 
      this.bootstrapVersion = props.bootstrapVersion;   
      this.underscoreVersion = props.underscoreVersion;  
      this.uiRouterVersion = props.uiRouterVersion;   
      this.camelCaseName = "";

      var split = this.appName.split("-");

      for(var i = 0 ; i<split.length; i++){
        var word = split[i];
        this.camelCaseName += word.charAt(0).toUpperCase();
        this.camelCaseName += word.slice(1);
      }

      this.upperCaseCamelCaseName = this.camelCaseName.charAt(0).toUpperCase() + this.camelCaseName.slice(1);

      done();
    }.bind(this));
  },

  generateFiles: function(){
    this.mkdir(this.appName); 
    this.mkdir(this.appName+'/app/fonts'); 
    this.mkdir(this.appName+'/app/images'); 
    this.template("_package.json", this.appName+'/package.json', this);
    this.template("_bower.json", this.appName+'/bower.json', this);
    this.template("_Gulpfile.js", this.appName+'/Gulpfile.js', this);

    this.template("_config.json", this.appName+'/app/scripts/config/config-development.json', this)
    this.template("_config.json", this.appName+'/app/scripts/config/config-staging.json', this)
    this.template("_config.json", this.appName+'/app/scripts/config/config-production.json', this)
    this.template("_bowerrc", this.appName+'/.bowerrc', this)
    this.template("_gitignore", this.appName+'/.gitignore', this)
    this.copy("_index.html", this.appName+'/app/_index.html', this)
    this.copy("_app.scss", this.appName+"/app/styles/app.scss", this)
    this.template("_app.js", this.appName+'/app/scripts/app.js', this)
    this.template("_module.js", this.appName+'/app/scripts/foo/foo.js', this)
    this.template("_unit-test.js", this.appName+'/app/scripts/foo/foo.test.js', this)
    this.template("_module.tpl.html", this.appName+'/app/scripts/foo/foo.tpl.html', this)
    this.template("_karma.conf.js", this.appName+'/karma.conf.js', this)
    this.template("_protractor.conf.js", this.appName+'/protractor.conf.js', this)
    this.template("_e2e-test.js", this.appName+'/e2e/foo.test.js', this)

    var that = this;

    this.conflicter.resolve(function (err) {
      var hook   = '<!-- ===== yeoman hook ===== -->';
      var path   =  that.appName+'/app/_index.html';
      var file   = that.readFileAsString(path);
      var insert = "<body ng-app='"+that.appName+"'>";  
      var newFile = file.replace(hook, insert+'\n'+hook)
      that.writeFileFromString(newFile, path);
    });
  }
}); 