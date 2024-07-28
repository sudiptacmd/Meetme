import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";

export const register = async (req, res) => {
  const { name, email, password, secret } = req.body;

  //validation
  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and should be 6 characters long");
  if (!secret)
    return res.status(400).send("Answer to the question is required");
  const exist = await User.findOne({ email });
  if (exist) return res.status(400).send("Email is taken");

  //hash password
  const hashedPassword = await hashPassword(password);

  const user = new User({ name, email, password: hashedPassword, secret });
  try {
    await user.save();
    console.log("REG COMPLETE!");
    return res.json({
      ok: true,
    });
  } catch (error) {
    console.log("Register failed! ", error);
    return res.status(400).send("error while registering");
  }
};
