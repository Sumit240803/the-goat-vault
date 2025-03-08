const jwt = require("jsonwebtoken");
const User = require("../models/User");
const protect = async (req, res, next) => {
  let token;

  // Check if Authorization header exists and starts with "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      if (!token) {
        return res.status(401).json({ message: "Unauthorized, no token provided" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch user & exclude password
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({ message: "Unauthorized, user not found" });
      }

      req.user = user; // Attach user to request
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized, invalid token" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized, no token provided" });
  }
};
  
  const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "Access denied, admin only" });
    }
  };
  
  module.exports = { protect, admin };