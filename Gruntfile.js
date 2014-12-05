module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      scripts: {
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        tasks: ['nodeunit'],
        options: {
          atBegin: true,
          reload: true
        }
      }
    },

    nodeunit: {
      all: ['test/**/*test.js'],
      options: {
        reporter: 'default'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['nodeunit']);

};