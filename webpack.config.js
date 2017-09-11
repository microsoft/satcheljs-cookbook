const fs = require('fs');
const path = require('path');
const entryIndices = fs.readdirSync('src');

let entries = {};

entryIndices.forEach(entry => {
    const name = path.basename(entry);
    if (name != 'common') {
        entries[name] = `./src/${entry}`;
    }
});

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
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],

    },
};
