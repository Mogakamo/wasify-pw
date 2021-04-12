import { nanoid } from 'nanoid'
import normalizeEmail from 'validator/lib/normalizeEmail'

export async function findUserById(db, userId) {
    return db.collection('users').findOne({ 
        _id: userId,
    }).then((user) => user || null);
}

export async function findUserByEmail(db, email) {
    email = normalizeEmail(email)
    return db.collection('users').findOne({ 
        email,
    }).then((user) => user || null)
}

export async function updateUserById() {

}