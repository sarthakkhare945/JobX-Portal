import User from "../models/User.js";

export const registerController = async (req, res, next) => {
  try {
    // const { name, email,role, password } = req.body;
    const { name, email, password } = req.body;
    // validate
    // if (!name || !email || !role || !password) {
      if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Please fill required fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "Email already registered, Please Login",
      });
    }

    // const user = await User.create({ name, email,role, password });
    const user = await User.create({ name, email, password });
    //token
    const token = user.createJWT();

    res.status(201).json({
      success: true,
      message: "Hurrah! Registered successfully",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        // location: recruiter.location,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("email,password", email, password);
    // validation
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide login credentials" });
    }
    // find Recruiter by email
    // const recruiter = await Recruiter.findOne({ role:'recruiter',email });
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // compare password
    const isMatch = await user.comparePassword(password);
    console.log("match pass-->", isMatch);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = user.createJWT();
    const role  = user.role
    res.status(200).json({
      success: true,
      message: "Login successfully",
      token,
      role
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

