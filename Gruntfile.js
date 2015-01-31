module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: 1234
      }
      files: ['**/*.js', '**/*.html', '**/*.css']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default')
}
