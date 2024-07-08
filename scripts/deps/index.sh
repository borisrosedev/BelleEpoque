#bundler
install_webpack(){

    npm install --save-dev webpack webpack-cli webpack-dev-server

    #loaders
    npm install -D sass-loader style-loader css-loader
    npm install -D file-loader
    npm install -D babel-loader
    npm install -D ts-loader

    #plugins
    npm i -D copy-webpack-plugin
    npm i -D html-webpack-plugin

}

install_sass(){
    npm install -D sass

}

#formatter
install_prettier(){
    npm install --save-dev prettier
}


#linter
install_eslint(){
    npm i -D eslint-plugin-jest eslint eslint-plugin-github
}


#transpiler
install_babel(){
    #core 
    npm i -D @babel/core

    #jest
    npm i -D babel-jest
    
    #parser
    npm i -D @babel/eslint-parser
    
    #presets
    npm i -D @babel/preset-env @babel/preset-typescript 
}


#testing 

install_coverage_badge(){
    npm i -D make-coverage-badge
}

install_jest(){
    npm i -D jest jest-environment-jsdom
}

install_testing_library(){
    npm install -D @testing-library/dom @testing-library/jest-dom @testing-library/user-event
}

install_cypress(){
    #webpack
    npm install -D @cypress/webpack-preprocessor
}


install_typescript(){

    #typescript
    npm install -D typescript
    #types 
    npm install --save-dev @types/cypress @types/jest
    #plugins
    npm install --save-dev @typescript-eslint/eslint-plugin
    #parsers
    npm install --save-dev @typescript-eslint/parser

}

install_babel
install_webpack
install_coverage_badge
install_cypress
install_eslint
install_prettier
install_typescript
install_sass
install_jest
install_testing_library

