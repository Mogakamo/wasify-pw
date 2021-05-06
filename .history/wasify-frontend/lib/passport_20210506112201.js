//passport instance
import passport from 'passport'
import bcrypt from 'bcryptjs'
import { Strategy as LocalStrategy } from 'passport-local'
import { ObjectId } from 'mongodb'

passport