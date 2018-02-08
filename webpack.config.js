var path = require('path');

module.exports = {
    entry: './src/dashboard.jsx',
    output: {
        path: path.resolve(__dirname, 'app/assets/javascripts'),
        filename: 'dashboard.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
