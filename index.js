// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require('@babel/polyfill');
require("@babel/register")({
    presets: ["@babel/preset-env"]
});

/*eslint no-process-env:0*/

// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Export the application
module.exports = require('./app');