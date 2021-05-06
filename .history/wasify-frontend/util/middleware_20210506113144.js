//middleware
import { data } from 'autoprefixer';
import nextConnect from 'next-connect'
import passport from '../lib/passport';
import database from './mongodb'
import session from './session'

const middleware = nextConnect();

middleware
    .use(database)
    .use(session)
    .use(passport.ini)