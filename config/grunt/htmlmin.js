module.exports = {
    default: {
        files: [
            {
                cwd: 'build/audio-developer-conference-2019',
                dest: 'build/audio-developer-conference-2019',
                expand: true,
                src: ['**/*.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true
        }
    }
};
