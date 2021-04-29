import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'User';

const UserSchema = new mongoose.Schema(
  {
    username: {
        type: String
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, 'users');
