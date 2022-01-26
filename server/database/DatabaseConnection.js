import mongoose from "mongoose";

const DatabaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("Databse connection error: ", error.message);
  }
};

export default DatabaseConnection;
