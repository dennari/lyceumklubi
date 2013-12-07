// Generated on 2013-12-05 using generator-webapp 0.4.4
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // configurable paths
        yeoman: {
            app: 'app',
            dist: 'dist'
        },      
        watch: {
            recess: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.less'],
                tasks: ['recess:server']
            },
            uglify: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['uglify:server']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['copy:styles']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '.tmp/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            },
            assemble: {
              files: ['<%= yeoman.app %>/layouts/*.hbs',
                     '<%= yeoman.app %>/pages/*.hbs',
                     '<%= yeoman.app %>/index.hbs',
                     '<%= yeoman.app %>/partials/*.hbs'],
              tasks: ['assemble']
            }
        },
        recess: {
          options: {
            compile: true    
          },
          server: {
            src: ['<%= yeoman.app %>/styles/main.less'],
            dest: '.tmp/styles/main.css'
          },
          dist: {
            options: {
              compress: true
            },
            src: ['<%= yeoman.app %>/styles/main.less'],
            dest: '<%= yeoman.dist %>/styles/main.css'
          },
          // theme: {
          //   src: ['less/theme.less'],
          //   dest: 'dist/css/<%= pkg.name %>-theme.css'
          // },
          // theme_min: {
          //   options: {
          //     compress: true
          //   },
          //   src: ['less/theme.less'],
          //   dest: 'dist/css/<%= pkg.name %>-theme.min.css'
          // }
        },
        assemble: {
          options: {
            flatten: true,
            layout: 'layout-outermost.hbs',
            layoutdir: '<%= yeoman.app %>/layouts',
            assets: '<%= yeoman.app %>/assets',
            partials: ['<%= yeoman.app %>/partials/*.hbs'],
            language: 'fi',
            data: '<%= yeoman.app %>/**/*.json',
            helpers: ['helper-compose','hbs-helpers/*.js']
          },
          dist: {
            options: {
                language: 'fi'
            },
            files: {
              '<%= yeoman.dist %>/': ['<%= yeoman.app %>/index.hbs']
            } 
          },
          dist_fi: {
            options: {
                language: 'fi'
            },
            files: {
              '<%= yeoman.dist %>/fi/': ['<%= yeoman.app %>/index.hbs']
            } 
          },
          dist_se: {
            options: {
                language: 'se'
            },
            files: {
              '<%= yeoman.dist %>/se/': ['<%= yeoman.app %>/index.hbs']
            } 
          },
          def: {
            options: {
                language: 'fi'
            },
            files: {
              '.tmp/': ['<%= yeoman.app %>/index.hbs']
            }
          },
          fi: {
            options: {
                language: 'fi'
            },
            files: {
              '.tmp/fi/': ['<%= yeoman.app %>/index.hbs']
            }
          },
          se: {
            options: {
                language: 'se'
            },
            files: {
              '.tmp/se/': ['<%= yeoman.app %>/index.hbs']
            }
          }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>',
                    livereload: false
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        uglify: {
            server: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files: {
                  '.tmp/scripts/main.js': [
                    '<%= yeoman.app %>/scripts/main.js',
                    '<%= yeoman.app %>/vendor/bootstrap/dist/js/bootstrap.js'
                    ]  
                } 
            },
            dist: {
                options: {
                    beautify: false,
                    mangle: true,
                    compress: false
                },
                files: {
                  '<%= yeoman.dist %>/scripts/main.js': [
                    '<%= yeoman.app %>/scripts/main.js',
                    '<%= yeoman.app %>/vendor/bootstrap/dist/js/bootstrap.js'
                    ]  
                } 
            }
        },
        // rev: {
        //     dist: {
        //         files: {
        //             src: [
        //                 '<%= yeoman.dist %>/scripts/{,*/}*.js',
        //                 '<%= yeoman.dist %>/styles/{,*/}*.css',
        //                 '<%= yeoman.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
        //                 '<%= yeoman.dist %>/styles/fonts/{,*/}*.*'
        //             ]
        //         }
        //     }
        // },
        // useminPrepare: {
        //     options: {
        //         dest: '<%= yeoman.dist %>'
        //     },
        //     html: '<%= yeoman.app %>/index.html'
        // },
        // usemin: {
        //     options: {
        //         assetsDirs: ['<%= yeoman.dist %>']
        //     },
        //     html: ['<%= yeoman.dist %>/{,*/}*.html'],
        //     css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        // },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/assets',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= yeoman.dist %>/assets'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/assets',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/assets'
                }]
            }
        },
        cssmin: {            
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'assets/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*'
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        concurrent: {
            server: [
                'recess:server',
                'uglify:server',
                'copy:styles',
                'assemble'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'recess:dist',
                'uglify:dist',
                'assemble',
                'imagemin',
                'svgmin',
            ]
        }
    });

    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',

            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
      grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
      grunt.task.run(['serve']);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'copy:dist'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
