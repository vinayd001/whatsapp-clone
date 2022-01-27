import User from "../modal/User.js";

export const addUser = async (req, res) => {
  try {
    const exist = await User.findOne({ googleId: req.body.googleId });
    if (exist) {
      res.status(200).json("user already exist");
      return;
    }
    const newUser = await new User(req.body);
    await newUser.save();
    res.status(200).json("ok");
  } catch (err) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
