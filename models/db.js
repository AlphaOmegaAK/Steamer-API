const mongoose = require('mongoose');

const connection = process.env.MONGODB_URI || "mongodb://localhost:27017/steamerMern";

const config = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connectDB = () => {
  mongoose.connect(connection, config)
    .then(() => console.log("MongoDB Success"))
    .catch(err => console.log(`MongoDb Failure ${err}`))
}
module.exports = connectDB;
