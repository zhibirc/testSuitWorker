'use strict';

/**
 * Main function, Lambda itself.
 *
 * @param {Object} event event object from trigger
 * @param {Object} context runtime environment
 * @param {function} callback async result handler
 */
exports.handler = function ( event, context, callback ) {
    const worker = require('src/js/main');

    let data;

    callback(null, data);
};
