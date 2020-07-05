const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/main/js/app.js',
    output: {
        path: path.resolve(process.cwd(),"./src/main/resources/static/built/"),
        filename: '[name].[chunkHash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            title: 'webpack',
            template: './src/main/resources/static/built/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
};