const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/main/resources/static/app.js',
    output: {
        path: path.resolve(process.cwd(), "./src/main/resources/public"),
        filename: '[name].[chunkHash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            title: 'webpack',
            template: './src/main/resources/templates/index.html'
        })
    ]
};