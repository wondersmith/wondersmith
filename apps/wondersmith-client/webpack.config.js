const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*
 * List of pages to be built - should be used in reducers or maps to generate the needed
 * configuration.
 */
const pagesArray = ["game", "login", "options", "splash"];

module.exports = {
    entry: pagesArray.reduce(
        (prev, cur) => ({ ...prev, [cur]: path.resolve(__dirname, "src", "pages", cur, "index.ts") }),
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
        ...pagesArray.map(
            page =>
                new HtmlWebpackPlugin({
                    chunks: [page],
                    filename: path.resolve(__dirname, "bin", "pages", page, "index.html"),
                    minify: false,
                    scriptLoading: "blocking",
                    title: `Wondersmith - ${page}`,
                })
        ),
    ],
};
