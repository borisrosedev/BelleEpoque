#!/bin/bash
install_deps(){
    chmod u+x ./scripts/deps/index.sh
    ./scripts/deps/index.sh
}

install_init(){
    npm init --yes && npm pkg set eslintConfig.extends="./.github/linters/.eslintrc.yml" && git init

    write_scripts(){
        npm pkg set scripts.start="wepback serve --mode development --open --watch"
        npm pkg set scripts.linte="npx eslint ."
        npm pkg set scripts.format:write="npx prettier --write ."
        npm pkg set scripts.package="webpack --mode production"
        npm pkg set scripts.test="jest"
        npm pkg set scripts.format:check="npx prettier --check ."
        npm pkg set scripts.coverage="npm test -- --coverage && make-coverage-badge"

    }

    write_jest_config(){
        npm pkg set jest.testEnvironment="jsdom"
        npm pkg set jest.setupFiles="<rootDir>/__test__/setup-tests.ts"
        npm pkg set jest.testMach=[\"**/*.test.ts\", \"**/*.spec.ts\"]
        npm pkg set jest.coverageReporters=[\"json-summary\"]
       
        npm pkg set jest.testPathIgnorePatterns=[\"/node_modules\", \"/dist\"]
        npm pkg set jest.collectCoverage=true
        npm pkg set jest.collectCoverageFrom=[\"./src/**\"]
    }
   
    write_scripts
    write_jest_config
}

install_stuff(){
    touch .gitignore && echo "dist/\ncoverage/" >> .gitignore
    touch .prettierrc.json
    touch .prettierignore && echo "dist/\ncoverage/" >> .prettierignore
    touch .editorconfig
    touch tsconfig.json 
    touch webpack.config.js
    touch babel.config.js
    touch .node-version && echo "20.6.0" >> .node-version
}

install_app(){
    mkdir -p src/ts/components src/ts/views src/ts/layout src/sass/base src/sass/components/ src/sass/abstracts/ src/sass/layout src/sass/pages assets data
    mkdir -p .github/linters .github/workflows
    touch main.ts router.ts
}

install_init && install_deps && install_stuff && install_app