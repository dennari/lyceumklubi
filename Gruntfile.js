// Generated on 2013-12-05 using generator-webapp 0.4.4
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    //require('time-grunt')(grunt);
    // load all grunt tasks
    //require('load-grunt-tasks')(grunt);

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
                files: [
                    '<%= yeoman.app %>/**/*.md',
                    '<%= yeoman.app %>/layouts/*.hbs',
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
                src: ['<%= yeoman.app %>/styles/main.less', '<%= yeoman.app %>/vendor/magnific-popup/dist/magnific-popup.css'],
                dest: '.tmp/styles/main.css'
            },
            dist: {
                options: {
                    compress: true
                },
                src: ['<%= yeoman.app %>/styles/main.less', '<%= yeoman.app %>/vendor/magnific-popup/dist/magnific-popup.css'],
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
                helpers: ['handlebars-helper-compose', 'hbs-helpers/*.js'],
                language: 'fi',
                compose: {
                    cwd: '<%= yeoman.app %>/pages/fi'
                }
            },
            fi: {
                options: {
                    language: 'fi',
                    compose: {
                        cwd: '<%= yeoman.app %>/pages/fi'
                    }
                },
                files: {
                    '.tmp/del/': ['<%= yeoman.app %>/pages/fi/*'],
                    '.tmp/fi/': ['<%= yeoman.app %>/index.hbs']
                }
            },
            se: {
                options: {
                    language: 'se',
                    compose: {
                        cwd: '<%= yeoman.app %>/pages/se'
                    }
                },
                files: {
                    '.tmp/del/': ['<%= yeoman.app %>/pages/se/*'],
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
        uglify: {
            server: {
                options: {
                    beautify: true,
                    mangle: false
                },
                files: {
                    '.tmp/scripts/main.js': [
                        '<%= yeoman.app %>/scripts/main.js',
                        '<%= yeoman.app %>/vendor/bootstrap/dist/js/bootstrap.js',
                        '<%= yeoman.app %>/vendor/magnific-popup/dist/jquery.magnific-popup.js'
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
                        '<%= yeoman.app %>/vendor/bootstrap/dist/js/bootstrap.js',
                        '<%= yeoman.app %>/vendor/magnific-popup/dist/jquery.magnific-popup.js'
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
        // Put files not handled in other tasks here
        copy: {
            fi_index: {
                expand: true,
                cwd: '.tmp/fi/',
                dest: '.tmp/',
                src: ['index.html']
            },
            se_index: {
                expand: true,
                cwd: '<%= yeoman.dist %>/se',
                dest: '<%= yeoman.dist %>',
                src: ['index.html']
            },
            img: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>',
                dest: '<%= yeoman.dist %>',
                src: [
                    'assets/{,*/}*.{jpg,png,gif}',
                ]
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
                        'assets/{,*/}*.pdf',
                        'styles/fonts/{,*/}*.*'
                    ]
                }, {
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
                'imagemin'
            ]
        },
        aws: {
            "bucketfi": "www.helsinginlyceumklubi.fi",
            "bucket-test": "helsinginlyceumklubi-test",
            "bucket-se": "www.helsingforslyceumklubb.fi",
            "region": "eu-west-1"
        },
        s3: {
            options: {
                bucket: "<%= aws.bucketfi %>",
                region: "<%= aws.region %>",
                headers: {
                    Expires: new Date('2050'), //Sat, 01 Jan 2050 00:00:00 GMT
                    CacheControl: 2 * 360 * 24 * 3600 //max-age=630720000, public
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
                    "assets/{,*/}*.{jpg,png,ico}"
                ]
            },
            pdf: {
                options: {
                    gzip: false,
                    headers: {
                        Expires: new Date(),
                        CacheControl: 0 //max-age=630720000, public
                    }
                },
                cwd: "<%= yeoman.dist %>/",
                src: [
                    "assets/{,*/}*.pdf"
                ]
            }
        }
    });

    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-aws');



    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'copy:fi_index',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    // grunt.registerTask('test', [
    //     'clean:server',
    //     'concurrent:test',
    //     'autoprefixer',
    //     'connect:test',
    //     'mocha'
    // ]);

    grunt.registerTask('revlog', function () {
        grunt.log.writeln(JSON.stringify(grunt.filerev.summary, null, 2));
    });


    if (grunt.file.exists('.aws-credentials.json')) {
        var credentials = grunt.file.readJSON('.aws-credentials.json');
        grunt.config("s3.options.accessKeyId", credentials.key);
        grunt.config("s3.options.secretAccessKey", credentials.secret);
    } else {
        grunt.config("s3.options.accessKeyId", process.env.AWS_KEY);
        grunt.config("s3.options.secretAccessKey", process.env.AWS_SECRET);
    }

    grunt.registerTask('s3test', function () {
        grunt.config("s3.options.bucket", grunt.config("aws.bucket-test"));
        grunt.task.run(['s3']);

    });

    grunt.registerTask('s3se', function () {
        grunt.config("s3.options.bucket", grunt.config("aws.bucket-se"));
        grunt.task.run(['copy:se_index', 's3']);

    });


    grunt.registerTask('heroku', function (env) {
        if (env == "PRODUCTION")
            grunt.task.run(['build', 's3', 's3se']);
        else
            grunt.task.run(['build', 's3test']);
    });

    grunt.registerTask('default', function () {
        grunt.task.run(['build', 's3test']);
    });



    grunt.registerTask('build', function () {
        grunt.task.run([
            'clean:dist',
            'recess:dist',
            'uglify:dist',
            //'imagemin',
            'copy:img',
            'filerev',
            'assemble',
            'copy:fi_index',
            'copy:dist',
            'revlog'
        ]);

    });

    grunt.registerTask('build_se', function () {
        grunt.task.run([
            'build',
            'copy:se_index',
        ]);

    });



};
