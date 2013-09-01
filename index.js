var     levelup = require('levelup'),
	ldH     = require("lmdb"),
     	ldh_f   = function (location) { return new ldH(location) }

module.exports = function LevelUP (location, options, callback) {
	if ( options instanceof Function ) {
		callback = options
		options  = { db: ldh_f }
	}

	// Can't be done more efficiently;
	// Object.create(null) wouldn't have
	// Object as constructor nor would it instanciate it
	if ( typeof options === "object" )
		options["db"] = ldh_f;

	if ( !options )
		options = { db: ldh_f };

	return levelup ( location, options, callback )
}