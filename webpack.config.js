module.exports = {
    entry: './src/file.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            },
            {
                test: /\.html$/i,
                use: ['extract-loader', 'html-loader']
            }
        ]
    }
};
