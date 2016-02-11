module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
            ' * Angular JS Course v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2016-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the <%= pkg.license %> license\n' +
            ' */\n',
        /*
         * Clean (https://github.com/gruntjs/grunt-contrib-clean)
         * - clear files and folders
         */
        clean: {
            dist: ['dist'],
            docs: ['docs/dist', 'docs/assets'],
            src: ['src/assets']
        },
        /* 
         * JS Hint (https://github.com/gruntjs/grunt-contrib-jshint)
         * - validate JavaScript files 
         */
        jshint: {
            // List of options: http://jshint.com/docs/options/
            options: {
                jshintrc: 'js/.jshintrc'
            },
            grunt: {
                options: {
                    jshintrc: 'grunt/.jshintrc'
                },
                src: ['Gruntfile.js', 'package.js', 'grunt/*.js']
            },
            core: {
                src: 'js/*.js'
            },
            docs: {
                src: 'docs/js/*.js'
            },
            test: {
                options: {
                    jshintrc: 'js/tests/unit/.jshintrc'
                },
                src: 'js/tests/unit/*.js'
            },
            assets: {
                src: ['docs/assets/js/**/*.js', '!docs/assets/js/**/*.min.js']
            }
        },

        // uglify: {
        //     options: {
        //         banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //     },
        //     build: {
        //         src: 'src/<%= pkg.name %>.js',
        //         dest: 'build/<%= pkg.name %>.min.js'
        //     }
        // },
        // htmlmin: {
        //     dist: {
        //         options: {
        //             removeComments: true,
        //             collapseWhitespace: true
        //         },
        //         files: { // Dictionary of files
        //             'dist/index.html': 'src/index.html', // 'destination': 'source'
        //             'dist/contact.html': 'src/contact.html'
        //         }
        //     },
        //     dev: {
        //         files: {
        //             'dist/index.html': 'src/index.html',
        //             'dist/contact.html': 'src/contact.html'
        //         }
        //     }
        // },
        // watch: {
        //     options: {
        //         dateFormat: function(time) {
        //             grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
        //             grunt.log.writeln('Waiting for more changes...');
        //         },
        //     },
        //     scripts: {
        //         files: ['**/*.js'],
        //         tasks: ['jshint'],
        //         options: {
        //             spawn: false,
        //         },
        //     },
        // }
    });

    /*
     * Clean (https://github.com/gruntjs/grunt-contrib-clean)
     * - clear files and folders
     */
    grunt.loadNpmTasks('grunt-contrib-clean');
    /* 
     * JS Hint (https://github.com/gruntjs/grunt-contrib-jshint)
     * - validate JavaScript files 
     */
    grunt.loadNpmTasks('grunt-contrib-jshint');

    /*
     * CSS Lint (https://github.com/gruntjs/grunt-contrib-csslint)
     * - validate CSS using rules
     * - format CSS
     */
    grunt.loadNpmTasks('grunt-contrib-csslint');

    /* MINIFICATION */

    /* Uglify (https://github.com/gruntjs/grunt-contrib-uglify)
     * - create sourceMap(s)
     * - combine multiple JavaScript files into one (compressing, concatination)
     * - minify JavaScript files 
     * - beautify JavaScript files (dev)
     */
    grunt.loadNpmTasks('grunt-contrib-uglify');

    /* 
     * CSS Min (https://github.com/gruntjs/grunt-contrib-cssmin)
     * - create sourceMap(s)
     * - combine multiple css files into one (compressing, concatination)
     * - minify css files 
     */
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    /*
     * HTML Min (https://github.com/gruntjs/grunt-contrib-htmlmin)
     * - remove comments
     * - remove whitespace(s)
     */
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    /* WATCH */

    // Load the plugin that provides the "uglify" task.

    /*
     * Watch for file changes and trigger actions.
     */
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    // grunt.registerTask('validate', ['jshint', 'csslint']);
    // grunt.registerTask('minify', ['uglify', 'cssmin', 'htmlmin']);
    grunt.registerTask('default', ['clean','jshint']);
};
