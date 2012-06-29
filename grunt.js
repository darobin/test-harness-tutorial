
module.exports = function (grunt) {
    grunt.initConfig({
        docco: {
            app: {
                src:    ["using-testharness.js"]
            }
        }
    ,   watch: {
            files:  "using-testharness.js"
        ,   tasks:  "docco"
        }
    });
    grunt.loadNpmTasks("grunt-docco");
    grunt.registerTask("default", "docco");
};
