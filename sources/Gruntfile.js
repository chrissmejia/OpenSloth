/*global module, require*/

module.exports = function(grunt) {  
    // URI paths for our tasks to use.
    grunt.uri = './';
    grunt.folder = 'js/'
    grunt.uriDistBase = '../static/';
    grunt.uriDist = grunt.uriDistBase + grunt.folder;
    grunt.uriSrc = grunt.uri + grunt.folder;
    grunt.uriTask = grunt.uri + 'tasks/';

    // Our task object where we'll store our configuration.
    var tasks = {};
    tasks.concat = {};

    // Lint Tasks
    tasks = require(grunt.uriTask + 'js-lint.js')(grunt, tasks);

    // Concatenation Tasks
    tasks = require(grunt.uriTask + 'js-concat.js')(grunt, tasks);

    // Minify Tasks
    tasks = require(grunt.uriTask + 'js-minify.js')(grunt, tasks);

    // Register The Tasks
    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('devexport', ['concat']);
    grunt.registerTask('minify', ['uglify']);
    grunt.registerTask('default', ['lint', 'devexport', 'minify']);

    // Initialize The Grunt Configuration
    grunt.initConfig(tasks);
};
