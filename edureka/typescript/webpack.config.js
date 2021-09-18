module.exports = {
    mode: "development",
    entry: "/calculator.ts",
    output: {
        filename: "./dist/calculator.js"
    },
    resolve: {
        extensions: [".ts",".tsx",".js",".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: "ts-loader"
            }
        ]
    }
}