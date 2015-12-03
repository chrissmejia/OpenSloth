/*global module*/

module.exports = function(grunt, tasks) {  
    // Load our node module required for this task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // The configuration for a specific task.
    tasks.uglify = {
        dist: {
            cwd: grunt.uriSrc, // The current working directory.
            dest: grunt.uriDist, // The destination directory to store our minified files.
            expand: true,
            ext: '.min.js', // The extension to use for our minified file.
            flatten: true,
            src: [
                'opensloth.js' // Specific rule to minify our `concat.js` file in our dist directory.
            ]
        }
    };

    return tasks;
};