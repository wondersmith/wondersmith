const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

/*
 * List of pages to be built - should be used in reducers or maps to generate the needed
 * configuration.
 */
const pagesArray = ["game", "login", "options", "splash"];

module.exports = {
    mode: "development",
    target: "electron-renderer",
    entry: pagesArray.reduce(
        (prev, cur) => ({ ...prev, [cur]: path.resolve(__dirname, "src", "pages", cur, "index.tsx") }),
        {}
    ),
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
    plugins: [
        new webpack.ExternalsPlugin("commonjs", ["electron"]),
        ...pagesArray.map(
            page =>
                new HtmlWebpackPlugin({
                    chunks: [page],
                    filename: path.resolve(__dirname, "bin", "pages", page, "index.html"),
                    inject: false,
                    minify: false,
                    scriptLoading: "blocking",
                    template: path.resolve(__dirname, "src", "pages", "template.ejs"),
                    title: `Wondersmith - ${page}`,
                })
        ),
    ],
};
