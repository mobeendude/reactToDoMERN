const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-todo-list',
  port: process.env.PORT || 8080,
  secret: 'super secret passphrase',
};

export default config;
