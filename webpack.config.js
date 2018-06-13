const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: './postcss.config.js'
                        }
                    }
                }
            ]
        }]
    },
    devServer: {
        // Browser refresh fix
        historyApiFallback: true,
    },
    plugins: [htmlWebpackPlugin]
};
