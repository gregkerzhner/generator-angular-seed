var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  promptUser: function() {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    var prompts = [{
        name: 'appName',
        message: 'What is the name ?',
        required: true
      },
      {
        name: 'angularVersion',
        message: 'Angular version?'
      },
      {
        name: 'uiRouterVersion',
        message: 'UI Router version?'
      },
      {
        name: 'jQueryVersion',
        message: 'jQuery Version?'
      },
      {
        name: 'bootstrapVersion',
        message: 'Bootstrap version?'
      },
      {
        name: 'underscoreVersion',
        message: 'Underscore Version?'
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
    this.template("_module.tpl.html", this.appName+'/app/scripts/foo/foo.tpl.html', this)

    var that = this;

    this.conflicter.resolve(function (err) {
      var hook   = '<!-- ===== yeoman hook ===== -->';
      var path   =  that.appName+'/app/_index.html';
      var file   = that.readFileAsString(path);
      var insert = "<body ng-app='"+that.appName+"'>";  
      console.log("File:")
      console.log(file)
      console.log("Index")
      console.log(file.indexOf('<!-- ===== yeoman hook ===== -->'))
      console.log("new file")
      var newFile = file.replace(hook, insert+'\n'+hook)
      console.log(newFile)
      that.writeFileFromString(newFile, path);
    });
  }
}); 