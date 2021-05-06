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
    const { name, password } = req.body
    const email = normalizeEmail(req.body.email)
    if (!isEmail(email)) {
        res.statusCode(400).send('The email you entered is invalid.')
        return
    }
    if (!password || name) {
        res.status()
    }
})