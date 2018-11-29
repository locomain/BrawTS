const path = require('path');

module.exports = {
    mode:'development',
    entry: './app/src/kaas.ts',
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: "test.js"
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