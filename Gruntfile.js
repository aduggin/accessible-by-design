module.exports = function(grunt) {

    require('dotenv').load(); // load environmental variables in .env

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
        },

        tenon: { // begin aXe
            options: {
                key: process.env.TENON_API_KEY, // tenon key stored in .env file
                level: 'AA',
                store: '1',
                snippet: true,
                projectID: 'accessible_by_design'

            },
            all: {
                options: {
                    saveOutputIn: 'tenonReport.json',
                    snippet: true,
                    asyncLim: 2
                },
                src: ['index.html']
            }
        },

        validation: { // begin HTML validation
            options: {
                reset: false,
                stoponerror: false,
                generateReport: false,
                relaxerror: [
                    'The “banner” role is unnecessary for element “header”.',
                    'The “main” role is unnecessary for element “main”.',
                    'The “contentinfo” role is unnecessary for element “footer”.'
                ]
            },
            files: {
                src: ['index.html']
            }
        }


    });

    grunt.loadNpmTasks('grunt-accessibility');
    grunt.loadNpmTasks('grunt-axe-webdriver');
    grunt.loadNpmTasks('grunt-tenon-client');
    grunt.loadNpmTasks('grunt-w3c-html-validation');

    grunt.registerTask('default', ['axe', 'sniffer', 'tenon']);
    grunt.registerTask('axe', ['axe-webdriver']);
    grunt.registerTask('sniffer', ['accessibility']);

};
