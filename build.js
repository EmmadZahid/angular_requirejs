({
    appDir: './',
    baseUrl: './app',
    dir: './build',
    removeCombined: true,
    modules: [
        {
            name: 'main'
        }
    ],
    paths: {
        angular: 'empty:',
        angularRoute: 'empty:'
    },
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        angular: {
            exports: "angular"
        },
        angularRoute: {
            deps: ["angular"],
            exports: "angularRoute"
        }
    }
})