const db = require("../models");
const hashService = require("../services/hashService");
const jwtService = require("../services/jwtService");

const User = db.User;

async function register(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email dan password wajib diisi."
      });
    }

    const existingUser = await User.findOne({
      where: { email }
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email sudah terdaftar."
      });
    }

    const hashedPassword = await hashService.hashPassword(password);

    const user = await User.create({
      email,
      password: hashedPassword
    });

    return res.status(201).json({
      message: "Registrasi berhasil.",
      data: {
        id: user.id,
        email: user.email
      }
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email dan password wajib diisi."
      });
    }

    const user = await User.findOne({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({
        message: "Email atau password salah."
      });
    }

    const isMatch = await hashService.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Email atau password salah."
      });
    }

    const token = jwtService.generateToken({
      id: user.id,
      email: user.email
    });

    return res.status(200).json({
      message: "Login berhasil.",
      token
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}

module.exports = {
  register,
  login
};
