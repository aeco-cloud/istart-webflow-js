var merge = require('webpack-merge').merge;
var common = require('./webpack.common.js');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        hot: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
    }
});
//# sourceMappingURL=webpack.dev.js.map