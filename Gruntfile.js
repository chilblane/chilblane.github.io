module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-compile-handlebars');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        browserify: {
            options: {
                browserifyOptions: {
                    transform: ['babelify']
                }
            },
            build: {
                files: {
                    './scripts.js': ['src/js/**/*.js']
                }
            }
        },

        'compile-handlebars': {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/pages/',
                    src: '**/*.hbs',
                    dest: './',
                    ext: '.html'
                }],
                templateData: {},
                partials: 'src/partials/**/*.hbs'
            }
        },

        copy: {
            main: {
                expand: true,
                dot: true,
                cwd: 'src/static',
                src: '**',
                dest: '/'
            }
        },

        stylus: {
            options: {
                compress: false,
                "include css": true,
                paths: [
                    "node_modules/grunt-contrib-stylus/node-modules",
                    "node_modules/jeet/stylus",
                    "node_modules/rupture"
                ]
            },

            development: {
                files: [{
                    expand: true,
                    cwd: 'src/stylus/',
                    src: ['styles.styl'],
                    dest: './',
                    ext:'.css'
                }]
            }
        },

        // uglify: {
        //     production: {
        //         files: {
        //             'build/js/main.js': ['build/js/main.js']
        //         }
        //     }

        // },

        watch: {
            options: {
                interrupt: true,
                spawn: false,
                livereload: true
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['browserify']
            },
            stylus: {
                files: ['src/stylus/**/*.styl'],
                tasks: ['stylus']
            },
            handlebars: {
                files: ['src/pages/**', 'src/partials/**/*.hbs'],
                tasks: ['compile-handlebars']
            },
            copy: {
                files: ['src/static/**/*.*'],
                tasks: ['copy']
            }
        }
    });

    grunt.registerTask('build', function() {

        var tasks = [];
        tasks.push('copy', 'compile-handlebars:main', 'stylus:development');
        grunt.task.run(tasks);
    });

    grunt.registerTask('default', ['build']);
    grunt.registerTask('debug', ['default', 'watch']);

};
