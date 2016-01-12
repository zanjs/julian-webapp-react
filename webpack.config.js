module.exports = {
    entry: "./client.js",
    output: {
        filename: "./public/js/bundle.js"
    },
    module: {
        loaders: [
           
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /public/, /views/],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.(png|jpg)$/, loader: 'file' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=10000'},
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }
};