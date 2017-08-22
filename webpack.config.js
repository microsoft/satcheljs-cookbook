const fs = require('fs');
const path = require('path');
const entries = fs.readdirSync('src');

module.exports = {
    entry: entries.map(entry => `src/${entry}/index`),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
