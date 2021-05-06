import nextConnect from 'next-connect'
import isEmail from 'validator/lib/isEmail'
import normalizeEmail from 'validator/lib/normalizeEmail'
import bcrypt from 'bcryptjs'
import middleware from '../../util/middleware'
import { extractUser } from '../../lib/api-helpers'


const h