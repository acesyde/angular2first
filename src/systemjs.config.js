(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app',
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        'ng2-bootstrap': 'node_modules/ng2-bootstrap',
        'ng2-table': 'node_modules/ng2-table',
        'moment': 'node_modules/moment'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        app: { main: 'main.js',  defaultExtension: 'js' },
        rxjs: { defaultExtension: 'js' },
        "ng2-bootstrap": {main: '/bundles/ng2-bootstrap.min.js', defaultExtension: 'js'},
        "ng2-table": {main: '/bundles/ng2-table.min.js', defaultExtension: 'js'},
        "moment": {main: '/moment.js', defaultExtension: 'js'}
    };

    var ngPackageNames = [
        'core',
        'common',
        'compiler',
        'forms',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'http'
    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);
