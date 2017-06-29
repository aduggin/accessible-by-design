module.exports = function(grunt) {

    grunt.initConfig({

        accessibility: { // begin
            options : {
                accessibilityLevel: 'WCAG2A'
            },
            test : {
                src: ['index.html']
            }
        }

    });

    grunt.loadNpmTasks('grunt-accessibility');

    grunt.registerTask('default', ['accessibility']);
};
