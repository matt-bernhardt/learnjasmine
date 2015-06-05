module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jasmine: {
            src: 'src/**/*.js',
            options: {
                specs: 'specs/**/*.js'
            }
        }
    });

    // Register tasks
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task.
    grunt.registerTask('default', ['jasmine']);
};