const { signUpService, loginService } = require("../Services/authService");

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService(email, password);
  console.log("result", result);
  res.json({ msg: "user logged in successfully", result });
};

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  signUpService(email, password);
  res.json({ msg: "User signed up successfully" });
};

module.exports = { loginUser, signupUser };
