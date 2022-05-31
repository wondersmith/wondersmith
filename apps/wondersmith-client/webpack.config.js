const path = require("path");

module.exports = {
    entry: {
        splash: "./src/pages/splash/index.ts",
        game: "./src/pages/game/index.ts",
    },
    output: {
        filename: "[name]/[name].bundle.js",
        path: path.resolve(__dirname, "bin", "pages"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
            },
        ],
    },
};
