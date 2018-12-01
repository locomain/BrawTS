const path = require('path');

module.exports = {
    mode:'development',
    entry: './app/src/index.ts',
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};