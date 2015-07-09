// Copyright 2015 Michael Bürge. All rights reserved.



goog.provide('jsonrpc.Transport');


/**
 * @interface
 */
jsonrpc.Transport = function() {};


/**
 * @param {string} method
 * @param {Object=} opt_params
 */
jsonrpc.Transport.prototype.performCall = goog.abstractMethod;

