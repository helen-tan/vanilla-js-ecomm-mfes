const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // [HOST]: Module Federation Plugin to decide which modules/files to get from the remote
        new ModuleFederationPlugin({
           name: 'container',
           remotes: {
            products: 'products@http://localhost:8081/remoteEntry.js', // runtime entry point
            cart: 'cart@http://localhost:8082/remoteEntry.js'
           },
        })
    ]
};
