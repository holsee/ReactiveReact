/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    
    react: {
      jsx: {
        files: [
          {
            expand: true,
            cwd: 'src/views',
            src: [ '**/*.jsx' ],
            dest: 'public/js',
            ext: '.js'
          }
        ]
      }
    },
 
    watch: {
      react: {
        files: 'src/views/**/*.jsx',
        tasks: ['react']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');
  
  grunt.registerTask('default', ['react']);
};