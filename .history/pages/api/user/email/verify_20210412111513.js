import nc from 'next-connect'
import { sendMail } from '@/lib/mail'
import { all } from '@/middlewares/index'
import { insertToken } from '@/db/index'

const handler = nc()

handler.use(all)

handler.post(async (req, res) => {
    if(!)
})