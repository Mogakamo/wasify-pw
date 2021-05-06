//session handler 
import session from 'express-session'
import connectMongo from 'connect-mongo'

const MongoStore = connectMongo(session)

export default function sessionMiddleware(req, res, next) {
    const mongoStore = new MongoStore({
        
    })
}