var merge = require('webpack-merge').merge;
var common = require('./webpack.common.js');
module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'production'
});
//# sourceMappingURL=webpack.prod.js.map