import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'User';

const UserSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        lowercase: true,
        require: [true, "cant be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, "cant be blank"],
        match: [/\S+@\.\S+/, 'is invalid'],
        index: true
    },
    bio: String,
    image: String,
    hash: String,
    salt: String,
    
  },
  {
    timestamps: true,
  },
);

export default mongoose.models[MODEL_NAME] ||
  mongoose.model(MODEL_NAME, schema, 'users');
