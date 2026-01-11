const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // [REMOTE]: Module Federation Plugin to expose which modules/files you want to make available to other projects at runtime
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap'
            },
            shared: ['faker']
        })
    ]
};
