import nextConnect from 'next-connect'
import middleware from '../../util/middleware'
import { extractUser } from '../../lib/api-helpers'

const handler = nextConnect()