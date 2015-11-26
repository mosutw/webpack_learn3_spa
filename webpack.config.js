var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './app/main.jsx'],
        Home: ['./app/Home.jsx'],
        Admin: ['./app/Admin.jsx']
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.jsx$/, 
                loader: 'babel-loader',
                query: {
                    presets:['react']
                }
            },
            {
                test:  /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js',2)]
};


