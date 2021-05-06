import nextConnect from 'next-connect'
import isEmail from 'validator/lib/isEmail'
import normalizeEmail from 'validator/lib/normalizeEmail'
import bcrypt from 'bcryptjs'
import middleware from '../../util/middleware'
import { extractUser } from '../../lib/api-helpers'
import next from 'next'


const handler = nextConnect()

handler.use(middleware) //reusing the middleware 

//POST /api/users
handler.post(async (req, res) => {
    co
})