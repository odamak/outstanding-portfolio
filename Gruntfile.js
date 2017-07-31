module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'medium',
            width: '80%',
            //suffix: '_medium',
            quality: 80
          },{
            name: 'small',
            width: '50%',
            //suffix: '_small',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'bootstrap-prestructure_files/',
          dest: 'images_grunt/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
