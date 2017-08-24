const fs = require('fs');
const path = require('path');
const entryIndices = fs.readdirSync('src');

let entries = {};

entryIndices.forEach(entry => entries[path.basename(entry)] = `./src/${entry}`);

module.exports = {
    entry: entries,
    devtool: 'eval',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/scripts/",
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
