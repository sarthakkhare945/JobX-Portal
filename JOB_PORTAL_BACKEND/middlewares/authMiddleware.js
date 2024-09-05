// middlewares/RecruiterAuth.js
import JWT from 'jsonwebtoken';
import User from '../models/User.js'; // Adjust the path as needed

const UserAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
      return res.status(401).json({ success: false, message: 'Authentication Failed' });
    }

    const token = authHeader.split(' ')[1];
    try {
      const payload = JWT.verify(token, process.env.JWT_SECRET);
      console.log('payload-->',payload)
      const user = await User.findById(payload.userId);
      console.log('user check--->',user)

      if (!user) {
        return res.status(401).json({ success: false, message: 'Authentication Failed' });
      }

      req.User = user; // Set the entire recruiter object, including role
      next();
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Authentication Failed' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export default UserAuth;
