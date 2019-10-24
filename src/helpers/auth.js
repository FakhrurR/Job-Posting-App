const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv/config')

const db = require('../configs/db');

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey : process.env.JWT_KEY 
};

module.exports = passport => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			db.query(`SELECT * FROM user WHERE id = '${jwt_payload.id}'`, (err, result) => {
				if (!err) {
					return done(null, result);
				} else {
					return done(null, false);
				}
			});
		})
	);
};