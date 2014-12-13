module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      scripts: {
        files: ['.jshintrc', 'Gruntfile.js', 'src/**/*.js', 'test/**/*.js', 'uitest/**/*.js'],
        tasks: ['jshint', 'nodeunit', 'mocha'],
        options: {
          atBegin: true,
          reload: true
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      target: {
        src: ['src/**/*.js', 'test/**/*.js']
      }
    },

    nodeunit: {
      all: ['test/**/*test.js'],
      options: {
        reporter: 'default'
      }
    },

    mocha: {
      all: {
        src: ['uitest/testrunner.html'],
      },
      options: {
        run: true,
        reporter: 'Spec'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('test', ['nodeunit', 'mocha']);
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};