module.exports = {
    default: {
        files: [
            {
                cwd: 'build/audio-developer-conference-2019/browser',
                dest: 'build/audio-developer-conference-2019/browser',
                expand: true,
                src: ['**/404.html']
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
