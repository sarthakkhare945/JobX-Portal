// middlewares/recruiterRoleCheck.js
export const userRoleCheck = (req, res, next) => {
    console.log('recruiterrole-->',req.User)
    if (req.User.role !== 'recruiter') {
      return res.status(403).json({ success: false, message: "Access denied: Only recruiters can perform this action" });
    }
    next();
  };
  