import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const authSchema = new Schema({
  username: { type: 'String', required: true },
  password: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
});

export default mongoose.model('auth', authSchema);
