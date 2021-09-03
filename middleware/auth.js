const jwt = require("jsonwebtoken");
const User = require("../models/User");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  // Check for token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

function isAdmin(req, res, next) {
  User.findOne({ _id: req.user.id }).then((user) => {
    if (!user || user.role !== 1)
      return res.status(400).json({ msg: "Access denied" });
    next();
  });
}

module.exports = { auth, isAdmin };
