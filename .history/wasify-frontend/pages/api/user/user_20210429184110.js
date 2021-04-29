import createHandler from '@middlewares'
import User from '@models/user'

const handler = createHandler();

handler.get(async (req, res) => {
  const fighters = await Fighter.find({}).exec();
  res.status(200).json(users`);
});

export default handler;
