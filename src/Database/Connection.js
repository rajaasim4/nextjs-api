const { Mongoose, default: mongoose } = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MOGODBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
    console.log("Database have been Connected Successfully");
  } catch (error) {
    console.log("An Error Occurred While Conection with Database", error);
  }
};

export default ConnectDB;
