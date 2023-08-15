const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};

//login service
const loginService = async (email, password) => {
  const user = {
    id: 1,
    email,
    password,
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
  };

  const token = await createToken(user);
  return token;
};

const signUpService = async (email, password) => {
  console.log("====================================");
  console.log("service", email, password);
  console.log("====================================");
};

module.exports = { signUpService, loginService };
