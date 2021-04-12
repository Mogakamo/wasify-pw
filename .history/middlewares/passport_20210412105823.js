import passport from 'passport'
import bcrypt from 'bcrypt'
import { Stategy as LocalStrategy } from 'passport-local'
import { findUserById, findUserByEmail } from '@db'