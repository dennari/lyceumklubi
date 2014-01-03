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
            layoutdir: '<%= yeoman.app %>/layouts',
            assets: '<%= yeoman.app %>/assets',
            partials: ['<%= yeoman.app %>/partials/*.hbs'],
            distdir: '<%= yeoman.dist %>',
            data: '<%= yeoman.app %>/**/*.json',
            helpers: ['hbs-helpers/*.js']
          },
          fi: {
            options: {
                language: 'fi'
            },
            files: {              
              '.tmp/del/': ['<%= yeoman.app %>/pages/fi/*.md'],
              '.tmp/fi/': ['<%= yeoman.app %>/index.hbs']
            }
          },
          se: {
            options: {
                language: 'se'
            },
            files: {
              '.tmp/del/': ['<%= yeoman.app %>/pages/se/*.md'],
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

        scripts: [
            'scripts/main.js',
            'vendor/bootstrap/dist/js/bootstrap.js'
        ],

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
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    '<%= yeoman.dist %>/assets/{,*/}*.{gif,jpeg,jpg,png,webp}',
                    '<%= yeoman.dist %>/styles/fonts/{,*/}*.*'
                ]
            }
        },

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
            def: {
              expand: true,
              cwd: '.tmp/fi/',
              dest: '.tmp/',
              src: ['index.html']
            },
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
                },{
                    expand: true,
                    dot: true,
                    cwd: '.tmp',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.html',
                        'fi/*.html',
                        'se/*.html'
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
                'imagemin',
                'svgmin'                
            ]         
        },
        //aws: grunt.file.readJSON("credentials.json"),
        s3: {
          options: {
            accessKeyId: "AKIAII54LSHZLBATPQEQ",
            secretAccessKey: "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",
            bucket: "lyceum",
            headers: {
                Expires: new Date('2050'), //Sat, 01 Jan 2050 00:00:00 GMT
                CacheControl: 2*360*24*3600 //max-age=630720000, public
            }
          },
          jscss: {
             options: {
                gzip: true
            },
            cwd: "<%= yeoman.dist %>/",
            src: [
                "styles/*.css",
                "scripts/*.js"
            ]
          },
          html: {
            options: {
                gzip: true,
                headers: {
                    Expires: new Date(),
                    CacheControl: 0 //max-age=630720000, public
                }
            },
            cwd: "<%= yeoman.dist %>/",
            src: ['*', 'fi/*.html', 'se/*.html']
          },
          img: {
            options: {
                gzip: false
            },
            cwd: "<%= yeoman.dist %>/",
            src: [                
                "assets/**"
            ]
          }
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
            'copy:def',
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

    grunt.registerTask('revlog', function () {
      grunt.log.writeln(JSON.stringify(grunt.filerev.summary,null,2));
    });

    grunt.registerTask('build', function() {
        grunt.task.run([
            'clean:dist',
            'concurrent:dist',
            'copy:dist',
            'filerev',
            'assemble',
            'revlog'
        ]);
        
    });



    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
