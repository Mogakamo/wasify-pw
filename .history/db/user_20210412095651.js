import { nanoid } from 'nanoid'
import normalizeEmail from 'validator/lib/normalizeEmail'

export async function findUserById(db, userId) {
    return db.collection('users').findOne({ 
        _id: 
    })
}