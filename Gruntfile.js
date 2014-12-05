module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      scripts: {
        files: ['.jshintrc', 'Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        tasks: ['jshint', 'nodeunit'],
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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['nodeunit']);
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};