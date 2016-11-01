module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            stylus: {
                files: ['src/stylus/**/*.styl'],
                tasks: ['stylus:dist', 'jekyll:dist']
            },
            browserify: {
                files: ['src/js/**/*.js'],
                tasks: ['browserify:dist', 'jekyll:dist']
            },
            copy: {
                files: ['src/static/**'],
                tasks: ['copy:dist', 'jekyll:dist']
            },
            jekyll: {
                files: [
                    'index.html',
                    '_includes/*',
                    '_layouts/*'
                ],
                tasks: ['jekyll:dist']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'src/stylus/**/*.styl',
                    'src/js/**/*.js',
                    'src/static/**',
                    '**/*.html'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0',
                base: '_site',
                livereload: 35729
            },
            server: {
            }
        },
        clean: {
            dist: {
                files: [{
                    src: [
                        'assets/'
                    ]
                }]
            }
        },
        stylus: {
            options: {
                compress: false,
                "include css": true,
                paths: [
                    "node_modules/grunt-contrib-stylus/node-modules",
                    "node_modules/rupture"
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/stylus/',
                    src: ['styles.styl'],
                    dest: 'assets/',
                    ext:'.css'
                }]
            }
        },
        browserify: {
            options: {
                browserifyOptions: {
                    transform: ['babelify']
                }
            },
            dist: {
                files: {
                    'assets/scripts.js': ['src/js/**/*.js']
                }
            }
        },
        copy: {
            dist: {
                expand: true,
                dot: true,
                cwd: 'src/static',
                src: '**',
                dest: 'assets/'
            }
        },
        jekyll: {
            dist: {}
        }

    });

    grunt.registerTask('serve', [
        'connect:server',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'stylus:dist',
        'browserify:dist',
        'copy:dist',
        'jekyll:dist'
    ]);

    grunt.registerTask('develop', ['build', 'serve']);

    grunt.registerTask('default', ['develop']);

};
