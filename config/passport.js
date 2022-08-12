const passport = require("passport")
const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const Users = require("./../Database/users")
const { jwtsecret } = require("./jwt")

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = jwtsecret

passport.use(
    new JwtStrategy(opts, async(jwt_payload, done) => {
        try {
            let user = await Users.findById(jwt_payload.sub).exec()
            if (user) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        } catch (err) {
            return done(err, false)
        }
    })
)

module.exports = passport