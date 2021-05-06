//passport instance
import passport from 'passport'
import bcrypt from 'bcryptjs'
import { Strategy as LocalStrategy } from 'passport-local'
import { ObjectId } from 'mongodb'

passport.serializeUser((user, done) => {
    done(null, user._id.toString())
})

//passport #160
passport.deserializeUser((req, is, done) => {
    req.db 
        .collection('users')
        .findOne(ObjectId(id))
        .then((user) => done(null, user))
})

passport.use(
    new LocalStrategy(
        
    )
)