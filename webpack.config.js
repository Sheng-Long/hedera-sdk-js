const path = require("path");

module.exports = {
    entry: "mocha!./test/index.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                include: [ path.resolve(__dirname, "test") ],
                use: [{ loader: "ts-loader", options: { onlyCompileBundledFiles: true }}]
            }
        ]
    },
    resolve: {
        modules: [ path.resolve(__dirname, "test") ],
        extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "test")
    }
};
