module.exports = function(grunt) {

    grunt.initConfig({

        accessibility: { // begin HTML_CodeSniffer
            options : {
                accessibilityLevel: 'WCAG2A'
            },
            test : {
                src: ['index.html']
            }
        },

        "axe-webdriver": { // begin aXe
            phantomjs: {
                options: {
                    browser: 'phantomjs',
                    tags: ['wcag2a', 'wcag2aa', 'wcag2aaa']
                },
                urls: ['index.html'],
                dest: "axeReport.json"
            }
        }

    });

    grunt.loadNpmTasks('grunt-accessibility');
    grunt.loadNpmTasks('grunt-axe-webdriver');

    grunt.registerTask('default', ['axe', 'sniffer']);

    grunt.registerTask('axe', [
        'axe-webdriver'
    ]);

    grunt.registerTask('sniffer', [
        'accessibility'
    ]);
};
