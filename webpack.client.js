const path = require("node:path")
const merge = require("webpack-merge")
const baseConfig = require("./webpack.base.js")

const config = {
    entry: './src/client/client.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, config)