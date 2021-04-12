import nc from 'next-connect'
import bcrypt from 'bcrypt'
import { all } from '@/middlewares/index'
import { updateUserById } from '@/db/index'

const handler = nc()
handler.use(all);

handler.put(async (req, res) => {
    if (!req.user) { res.json(401).send('you need to be authenticated'); return;}
    const { oldPassword, newPassword } 
})