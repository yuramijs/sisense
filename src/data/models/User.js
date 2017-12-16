import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = mongoose.model('User', new Schema({
  name: String,
  password: String,
}));

export default User;