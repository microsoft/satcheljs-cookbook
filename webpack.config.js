const fs = require('fs');
const path = require('path');
const entryIndices = fs.readdirSync('src');

module.exports = {
    mode: 'development',
    entry: {
        bookstore: './src/index',
    },
    devtool: 'eval',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/scripts/',
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
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    performance: {
        hints: false,
    },
};
