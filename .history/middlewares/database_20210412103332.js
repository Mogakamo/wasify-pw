import { MongoClient } from 'mongodb'

/**
 * Global is used to maintain a cached connnection across hot reloads
 * in development. This prevents connections growing exponentiallly
 */