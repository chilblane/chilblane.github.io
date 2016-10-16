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

        jekyll: {
            serve: {
                options: {
                    serve: true
                }
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
        }
    });

    grunt.registerTask('build', function() {

        var tasks = [];
        tasks.push('copy', 'stylus:development', 'jekyll:serve');
        grunt.task.run(tasks);
    });

    grunt.registerTask('default', ['build']);

};
