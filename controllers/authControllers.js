const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.signup = (req, res) => {
  const { name, email, password, address } = req.body;
  let role;

  if (!name || !email || !password) {
    res.status(400).json({ msg: "Please enter all fields" });
  }

  if (password.length < 8)
    return res
      .status(400)
      .json({ msg: "Password needs to be at least 8 characters long." });

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    if (email === "admin@example.com") {
      role = 1;
    }

    const newUser = new User({
      name,
      email,
      password,
      ...(address && { address: address }), // if defined address insert user adress
      ...(role && { role: role }),
    });

    // Create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => {
            jwt.sign(
              { id: user._id },
              process.env.JWT_SECRET,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    address: user.address,
                    role: user.role,
                  },
                });
              }
            );
          })
          .catch((err) => {
            return res.status(400).json({ msg: err.errors.email.message });
          });
      });
    });
  });
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: "Please enter all fields" });
  }
  User.findOne({ email }).then((user) => {
    if (!user)
      return res.status(400).json({ msg: "Invalid credentials/not found." });

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch)
        return res.status(400).json({ msg: "Invalid credentials/not found." });

      jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: 7 * 24 * 60 * 60 }, //7 days
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              _id: user._id,
              name: user.name,
              email: user.email,
              address: user.address,
              role: user.role,
            },
          });
        }
      );
    });
  });
};

module.exports.get_user = (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
};
