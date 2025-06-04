

// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password"); // attach user to req
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};


exports.authorizeRoles = (...roles) => {
   return (req, res, next) => {
      if(!roles.includes(req.user.role)){
         return next(new ErrorHandler(`Role ${req.user.role} is not Allowed for this opparations!`, 401));
      }
      next();
   }
}


