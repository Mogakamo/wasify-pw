import nc from 'next-connect'
import bcrypt from 'bcrypt'
import { all } from '@/middlewares/index'
import { updateUserById } from '@/db/index'

const handler = nc()
handler.use(all);

handler.put(async (req, res) => {
    if (!req.user) { res.json(401).send('you need to be authenticated'); return;}
    const { oldPassword, newPassword } = req.body;
    if (!(await bcrypt.compare(oldPassword, req.user.password))) {
        res.status(401).send('The password you have entered is incorrect')
    }
    const password = await bcrypt.hashSync(newPassword, 10)
})