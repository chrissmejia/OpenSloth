/*global module*/

module.exports = function(grunt, tasks) {  
    // Load our node module required for this task.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // The configuration for a specific task.
    tasks.jshint = {
        // The files that we want to check.
        dist: {
            src: [
                grunt.uriSrc + 'partials/*.js', // Include all JS files for Content Scripts.
                '!' + grunt.uriSrc + 'partials/*.min.js' // Exclude any files ending with `.min.js`
            ]
        }
    };

    return tasks;
};