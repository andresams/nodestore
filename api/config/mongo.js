const mongoose = require('mongoose');

const connect = async () => {
  try {
    const uri = `mongodb://${process.env.MONGO_SERVER}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
      }).then((result) => {
        console.log('MongoDB Successfully Connected.');
      }).catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connect;
