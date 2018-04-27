const path = require('path');
const ZipFilesPlugin = require('webpack-zip-files-plugin');

module.exports = {
    // specify the entry point for our app
    entry: [
        path.join(__dirname, 'index.js')
    ],
    // specify the output file containing our bundled code
    output: {
        path: __dirname + '/app',
        filename: 'index.js',
        library: 'index',
        libraryTarget: 'umd'
    },
    target: "node",
    externals: [
        //provided by Lambda runtime
        "aws-sdk"
    ],
    plugins: [
        new ZipFilesPlugin({
            entries: [
                {src: path.join(__dirname, './app/index.js'), dist: 'index.js'}
            ],
            output: path.join(__dirname, './app/bundle'),
            format: 'zip',
        }),
    ]
};
