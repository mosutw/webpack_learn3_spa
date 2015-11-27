var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server','./app/main.jsx'],
        Home: ['./app/Home.jsx'],
        Admin: ['./app/Admin.jsx']
    },
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.jsx$/, 
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: { presets:['react'] }
            },
            {
                test:  /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    plugins: [ new webpack.optimize.CommonsChunkPlugin('common.js',2)]
};


