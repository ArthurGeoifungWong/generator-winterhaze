'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the first-rate ${chalk.red('generator-winterhaze')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      },
      {
        type: 'input',
        name: 'name',
        message: 'Project name',
        default: ''
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description',
        default: 'this is.'
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'Package keywords (comma to split)',
        default: 'yo,whiterhaze'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author\'s Name',
        default: ''
      },
      {
        type: 'input',
        name: 'email',
        message: 'Author\'s Email',
        default: ''
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.log('\ndownloading template...\n');

    this.fs.copy(
      this.templatePath('build/'),
      this.destinationPath('build/')
    );
    this.fs.copy(
      this.templatePath('config/'),
      this.destinationPath('config/')
    );
    this.fs.copy(
      this.templatePath('src/'),
      this.destinationPath('src/')
    );
    this.fs.copy(
      this.templatePath('static/'),
      this.destinationPath('static/')
    );
    this.fs.copy(
      this.templatePath('test/'),
      this.destinationPath('test/')
    );
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
    // this.fs.copy(
    //   this.templatePath('package.json'),
    //   this.destinationPath('package.json')
    // );
    this._writingPackageJSON();
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
  }

  _writingPackageJSON() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name,
        description: this.props.description,
        keywords: this.props.keywords.split(","),
        author: this.props.author,
        email: this.props.email,
        // repository: this.props.repository,
        // homepage: this.props.homepage,
        // license: this.props.license
      }
    );
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
