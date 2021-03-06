const merge = require('webpack-merge');
const common = require('./webpack.common');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        new BrowserSyncPlugin({
            host: '127.0.0.1',
            port: '3000',
            server: {
                baseDir: [ 'dist' ]
            },
            injectCss: true,
            rewriteRules: [
                {
                    match: /Content-Security-Policy/,
                    fn: function (match) {
                        return "DISABLED-Content-Security-Policy";
                    }
                }
              ]
        })
    ],
    mode: 'development'
});