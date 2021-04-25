import passport from 'passport'
import bcrypt from 'bcrypt'
import { Stategy as LocalStrategy } from 'passport-local'
import { findUserById, findUserByEmail } from '@/db/index'

passport.serializeUser((user, done) => {
    done (null, user._id);
})

//passport#160
passport.deserializeUser((req, id, done) => {
    findUserById(req.db, id).then((user) => done(null, user))
})

passport.use(
    new LocalStrategy(
        { usernameField: 'email', passReqToCallback: true },
        async () => {
            
        }
        )
)