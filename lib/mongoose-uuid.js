/**
 * mongoose-uuid
 * git@github.com:dlamp/mongoose-uuid.git
 *
 * Copyright (c) 2014 Darin Lampson
 * Licensed under the MIT license.
 */

var uuid = require('node-uuid');

(function(){
	'use strict';

	/**
	 * Injects plugin on a Schema
	 * @param  Schema schema Schema that will be modified.
	 * @return {Middleware} Invokes next middleware.
	 */
	module.exports = function(schema, options) {

		if(!schema.paths._id) {
			schema.add({
				'_id': {
					type: String,
					index: {
						unique: true
					}
				}
			});
		}

		schema.pre('save', function(next) {
			if(this.isNew)
				this._id = uuid.v4();

			return next();
		});
	};
})();