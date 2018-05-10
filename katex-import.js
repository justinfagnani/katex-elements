// Set up some globals to emulate a CommonJS environment
import {originalExports, originalModule, katex} from './katex-module-shim.js';

// Load and executes the Katex UMD bundle
import 'katex';

// Export the exports
export const render = window.module.exports.render;
export const renderToString = window.module.exports.renderToString;

// Reset the globals
window.exports = originalExports;
window.module = originalModule;
