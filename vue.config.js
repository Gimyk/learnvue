module.exports = {
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    includePaths: [
                        './node_modules'
                    ]
                },
                prependData: `@import "@/styles/_global.scss";`,
            },
        },
    },
};