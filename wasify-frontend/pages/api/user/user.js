import createHandler from '@middlewares'
import User from '@models/user'

const handler = createHandler();

handler.get(async (req, res) => {
  const users = await User.find({}).exec();
  res.status(200).json(users);
});

export default handler;
