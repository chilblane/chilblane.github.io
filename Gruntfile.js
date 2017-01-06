module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    var serveStatic = require('serve-static');
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
                    'about.html',
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
                livereload: 35729,
                middleware: function(connect, options, middlewares) {
                    return [
                        function(req, res, next) {
                            var suffix = '.html',
                                url = req.url,
                                urlLength = url.length;
                            if (urlLength > 1 && url.indexOf('.') === -1) {
                                req.url += suffix;
                            }
                            next();
                        },
                        serveStatic(options.base[0]),
                    ];
                }
            },
            rules: [{
                from: '(^((?!css|html|js|img|fonts|\/$).)*$)',
                to: "$1.html"
            }],
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
                    "node_modules/rupture",
                    "node_modules/font-awesome-stylus"
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
            },
            fa: {
                expand: true,
                dot: true,
                cwd: 'node_modules/font-awesome-stylus/fonts',
                src: '**',
                dest: 'assets/fonts'
            }
        },
        jekyll: {
            dist: {}
        },
        // production tasks
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['*.js'],
                    dest: 'assets/'
                }]
            }
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
        'copy:fa',
        'jekyll:dist'
    ]);

    grunt.registerTask('build-prod', [
        'clean:dist',
        'stylus:dist',
        'browserify:dist',
        'copy:dist',
        'copy:fa',
        'uglify:dist',
        'jekyll:dist'
    ]);

    grunt.registerTask('develop', ['build', 'serve']);
    grunt.registerTask('production', ['build-prod', 'serve']);

    grunt.registerTask('default', ['develop']);

};
