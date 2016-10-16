module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        browserify: {
            options: {
                browserifyOptions: {
                    transform: ['babelify']
                }
            },
            build: {
                files: {
                    'dist/scripts.js': ['assets/js/**/*.js']
                }
            }
        },

        copy: {
            main: {
                expand: true,
                dot: true,
                cwd: 'assets/static',
                src: '**',
                dest: 'dist/'
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
                    cwd: 'assets/stylus/',
                    src: ['styles.styl'],
                    dest: 'dist/',
                    ext:'.css'
                }]
            }
        },

        watch: {
            options: {
                interrupt: true,
                spawn: false,
                livereload: true
            },
            js: {
                files: ['assets/js/**/*.js'],
                tasks: ['browserify']
            },
            stylus: {
                files: ['assets/stylus/**/*.styl'],
                tasks: ['stylus']
            },
            copy: {
                files: ['assets/static/**/*.*'],
                tasks: ['copy']
            }
        }
    });

    grunt.registerTask('build', function() {

        var tasks = [];
        tasks.push('copy', 'stylus:development');
        grunt.task.run(tasks);
    });

    grunt.registerTask('default', ['build']);
    grunt.registerTask('debug', ['default', 'watch']);

};
